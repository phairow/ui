import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  return NextResponse.redirect('http://www.ratekl.com:3333/api/v1/domains')
}