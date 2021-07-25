import React from "react"

import Title from "../Blog/title"
// import BlogContent from "../Blog/blogContent"
// import BlogSidebar from "../Blog/blogSidebar"

const blogParent = () => {
  return (
    <main>
      <section className="bg-cyan-300">
        <div className="w-full lg:w-8/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="bg-black bg-opacity-25 p-5  h-full col-span-1 text-white md:col-span-4">
              {" "}
              <Title />
            </div>
            <div className="bg-black bg-opacity-25 py-5 pr-5  col-span-1 hidden md:inline">
              <div className="bg-white h-full w-full">
                <div className="p-2">Sponsoor</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="w-full lg:w-8/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-y-3 md:gap-x-2 bg-gray-100">
            <div className="col-span-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              placeat molestiae libero. Quod quas expedita ipsa sequi id quo
              numquam labore voluptatibus praesentium, impedit deserunt vitae
              ipsum veniam commodi distinctio vero accusamus maxime assumenda
              dolor voluptatum doloremque saepe obcaecati dolore! Fugiat
              distinctio eius minima beatae voluptatibus assumenda! Aspernatur,
              praesentium dignissimos! Sunt nobis et aliquid fugit voluptatibus!
              Placeat commodi, architecto rem animi dolore minima labore ad
              itaque numquam maiores quaerat iste. Ut veniam provident ipsum,
              iure tenetur quisquam placeat dicta enim quaerat aut eius quam
              temporibus numquam iste quae adipisci aperiam delectus ipsa
              exercitationem. Quia architecto voluptatibus non pariatur, cumque
              nemo totam amet, autem voluptas dolorem sed aspernatur ab
              incidunt. Ipsam non consequuntur sint id odit enim impedit
              quibusdam reprehenderit veritatis eius, sit deserunt corporis
              delectus magnam architecto. Odit fugiat rem eum cum aspernatur
              incidunt inventore! Explicabo expedita ab eos molestiae. Dolor
              quod, quam soluta iure natus deserunt, accusamus voluptatibus
              dolore deleniti neque maiores nobis est culpa voluptates earum
              expedita quae hic modi? Rerum repudiandae consectetur atque libero
              laborum in saepe perspiciatis aliquid quo, deleniti nostrum
              quaerat illum? Accusantium atque quod cum quas qui dolores
              nesciunt officia magnam, ab, sapiente expedita laudantium natus
              blanditiis ratione eius nisi, saepe incidunt? Reiciendis, unde.
            </div>
            <div className="bg-white col-span-1">Sponsoor</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default blogParent
