import Image from "next/image";
import CardDesign from "../Design";
import women from  "../../../public/asset/women.png"
import skin from "../../../public/asset/skin.png"
import health from "../../../public/asset/healt.png"
import hair from "../../../public/asset/hair.png"
const ImgPath = [
    {
        id:1,
        img:women,
        text:"women's health"
    },
    {
        id:2,
        img:skin,
        text:"skin care"
    },
    {
        id:3,
        img:health,
        text:"immunity"
    },
    {
        id:4,
        img:hair,
        text:"hair care"
    }
   ];
export default function Specialize() {
  return (
    <div>
      <CardDesign title={"I specialize in"} content={
      <div className="flex shadow-none mt-4">
      
      {ImgPath.map((imgs)=>{
        const {id,img,text} = imgs
        return(
            <div className="m-2 p-2 shadow-none" key={id}>
                  <Image
                width={100}
                height={100}
                  style={{ width: "92px", height: "96px" }}
                  src={img}
                  alt="img"
                />
                <p className="mt-1 text-center capitalize">{text}</p>
            </div>
        )
      })}
      </div>} />
     
    </div>
  );
}
