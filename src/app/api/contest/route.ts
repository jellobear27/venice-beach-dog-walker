import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // For now, just return a success message
    // We'll implement Supabase integration later
    return NextResponse.json({ 
      success: true, 
      message: 'Contest entry received successfully' 
    });
    
  } catch (error) {
    console.error('Error processing contest entry:', error);
    return NextResponse.json(
      { error: 'Failed to process contest entry' },
      { status: 500 }
    );
  }
} 