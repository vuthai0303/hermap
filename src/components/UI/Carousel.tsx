import { MapData } from "@/src/types/MapTypes";
import { useEffect } from "react";

export function Carousel({ datas = [], numImgInRow = 1, clickImageAction }: { datas: MapData[]; numImgInRow: number; clickImageAction?: (id: string) => void }) {

    useEffect(() => {
        window.HSStaticMethods?.autoInit();
    }, [datas])

    return (
        <div
            id="multi-slide"
            data-carousel={'{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "lg": ' + numImgInRow + '} }'}
            className="relative w-full h-full"
        >
            <div className="carousel rounded-none h-full">
                <div className="carousel-body h-full opacity-0 gap-4">
                    {datas.map(e => (
                        <div key={e.id + "_" + datas.map(d => d.id).join('-')} className="carousel-slide h-full relative">
                            <div className="border_trail rounded-lg">
                                <div className="trail bg-radial-[100%_100%_at_right] from-[#0000ff] to-transparent to-50% animate-journey"></div>
                            </div>
                            <div
                                className={`card h-full hover:scale-98 ${clickImageAction ? "cursor-pointer" : ""}`}
                                onClick={() => clickImageAction?.(e.id)}
                            >
                                <div className={`w-full h-full`}>
                                    <img className="w-full h-full" src={e.main_url} alt="" />
                                </div>
                                <div className="rounded-full card-body space-y-3 items-center">
                                    <h5 className="card-title text-center">{e.label}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button type="button" className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm hover:border-2 hover:border-primary">
                <span className="icon-[tabler--chevron-left] size-5 cursor-pointer"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm hover:border-2 hover:border-primary">
                <span className="icon-[tabler--chevron-right] size-5"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
}