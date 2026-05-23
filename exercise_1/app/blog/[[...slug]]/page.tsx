import React from 'react'

interface DocsProps {
  params: {
    slug?: string[]
  }
}

const page = ({ params }: DocsProps) => {
    const slugPath = params.slug?.join(" / ") || "Home";
    return   <h1>You visited: /{slugPath}</h1>
}

export default page