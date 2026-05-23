import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    username: string;
  };
};

export async function GET( request: NextRequest, { params }: Props) {
  return NextResponse.json({
    username: params.username,
  });
}