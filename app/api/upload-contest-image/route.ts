import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: Request) {
  try {
    if (!request.body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 }
      );
    }

    // Parse the multipart form data
    const formData = await request.formData();
    
    // Extract form fields
    const dogName = formData.get("dogName") as string;
    const breed = formData.get("breed") as string;
    const funFact = formData.get("funFact") as string;
    const ownerName = formData.get("ownerName") as string;
    const ownerEmail = formData.get("ownerEmail") as string;
    const photo = formData.get("photo") as File;

    if (!dogName || !breed || !funFact || !ownerName || !ownerEmail || !photo) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize Supabase admin client with service role to bypass RLS
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }
    
    const supabaseAdmin = createServiceClient(supabaseUrl, supabaseServiceKey);

    // Upload the image to Supabase Storage
    const fileName = `${Date.now()}-${photo.name.replace(/\s+/g, "_")}`;
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("contest-photos")
      .upload(fileName, photo, {
        upsert: false,
        contentType: photo.type,
      });

    if (uploadError) {
      console.error("Error uploading image:", uploadError);
      return NextResponse.json(
        { error: "Failed to upload image" },
        { status: 500 }
      );
    }

    // Get the public URL for the uploaded image
    const { data: publicUrlData } = supabaseAdmin.storage
      .from("contest-photos")
      .getPublicUrl(fileName);

    const photoUrl = publicUrlData.publicUrl;

    // Insert the contest entry into the database
    const { data: entryData, error: entryError } = await supabaseAdmin
      .from("contest_entries")
      .insert([
        {
          dog_name: dogName,
          breed,
          fun_fact: funFact,
          owner_name: ownerName,
          owner_email: ownerEmail,
          photo_url: photoUrl,
          approved: false, // Default to not approved until reviewed
        },
      ])
      .select();

    if (entryError) {
      console.error("Error saving contest entry:", entryError);
      return NextResponse.json(
        { error: "Failed to save contest entry" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Contest entry submitted successfully",
      entry: entryData[0],
    });
  } catch (error) {
    console.error("Error processing contest entry:", error);
    return NextResponse.json(
      { error: "Failed to process contest entry" },
      { status: 500 }
    );
  }
}
