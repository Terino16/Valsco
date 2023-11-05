import Blogdata from "../assets/data.json";
import Blogcard from "../components/Blogcard";
const Blog = () => {
  console.log(Blogdata);
  return (
    <div className="mx-6 p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="headingfont text-7xl">Blogs </h1>
        <div className="flex flex-wrap items-center justify-between align-items-center gap-5  ">
          {Blogdata.map((article)=>{
            return(
              <div key={article.id}>
                 <Blogcard title={article.topic} author={article.author}  material={article.material} id={article.id}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
