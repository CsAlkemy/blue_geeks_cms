import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const blogBody = props => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <div className="font-semibold  inline-block">{text}</div>
      ),
      [MARKS.ITALIC]: text => (
        <div className="font-semibold  italic inline-block">{text}</div>
      ),
      [MARKS.CODE]: text => (
        <>
          <pre
            as="div"
            className="overflow-auto rounded-md bg-gray-900 text-white p-5"
          >
            <code className="text-base font-light ">{text}</code>
          </pre>
        </>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        return <div className="text-2xl font-semibold py-2">{children}</div>
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <div className="hover:underline hover:bg-blue-300 p-1 inline">
            <a
              href={node.data.uri}
              className="font-semibold text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          </div>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <div className="text-base font-light text-justify py-5">
            {children}
          </div>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node)
        return (
          <img
            className="py-5"
            src={"https://" + node.data.target.fixed.src}
            alt={node.data.target.title}
          ></img>
        )
      },
    },
  }

  return <div className="my-10 mr-5">{renderRichText(props.data, options)}</div>
}

export default blogBody
