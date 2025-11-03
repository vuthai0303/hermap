
export default function SolutionsPage() {

  const datas = [
    "https://cdn.flyonui.com/fy-assets/components/radio/image-1.png",
    "https://cdn.flyonui.com/fy-assets/components/radio/image-1.png",
    "https://cdn.flyonui.com/fy-assets/components/radio/image-1.png",
    "https://cdn.flyonui.com/fy-assets/components/radio/image-1.png",
    "https://cdn.flyonui.com/fy-assets/components/radio/image-1.png",
    "https://cdn.flyonui.com/fy-assets/components/radio/image-1.png",
  ]

  return (
    <div className="w-full h-[calc(100%-85px)] flex justify-center items-center mt-5 px-10">
      <div className="w-[1040px] h-[616px] relative flex flex-col overflow-hidden">
        <div className="flex flex-row gap-5 relative">
          {datas.map((e, i) => <img key={i} className="mask mask-diamond size-48" src={e} alt="mask image" />)}
        </div>
        <div className="flex flex-row gap-5 relative -left-[calc(96px+10px)] -top-[calc(86px)]">
          {datas.map((e, i) => <img key={i} className="mask mask-diamond size-48" src={e} alt="mask image" />)}
        </div>
        <div className="flex flex-row gap-5 relative -top-[calc(86*2px)]">
          {datas.map((e, i) => <img key={i} className="mask mask-diamond size-48" src={e} alt="mask image" />)}
        </div>
        <div className="flex flex-row gap-5 relative -left-[calc(96px+10px)] -top-[calc(86*3px)]">
          {datas.map((e, i) => <img key={i} className="mask mask-diamond size-48" src={e} alt="mask image" />)}
        </div>
        <div className="flex flex-row gap-5 relative -top-[calc(86*4px)]">
          {datas.map((e, i) => <img key={i} className="mask mask-diamond size-48" src={e} alt="mask image" />)}
        </div>
      </div>
    </div>
  );
}
