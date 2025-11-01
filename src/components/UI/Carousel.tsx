import { MapData } from "@/src/types/MapTypes";

export function Carousel({ datas = [], numImgInRow = 1, clickImageAction }: { datas: MapData[]; numImgInRow: number; clickImageAction?: (id: string) => void }) {

    // const onClickImageAction = (id: string) => {
    //     clickImageAction(id);
    // }

    return (
        <div
            id="multi-slide"
            data-carousel={'{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "lg": ' + numImgInRow + '} }'}
            className="relative w-full h-full"
        >
            <div className="carousel rounded-none h-full">
                <div className="carousel-body h-full opacity-0 gap-5">
                    {datas.map(e => (
                        <div key={e.id} className="carousel-slide h-full hover:scale-105">
                            <div className="card h-full">
                                <div className={`w-full h-full bg-[url(${e.main_url})] bg-cover bg-center bg-no-repeat`}></div>
                                <div className="rounded-full card-body space-y-3 items-center">
                                    <h5 className="card-title text-center">{e.label}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button type="button" className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
                <span className="icon-[tabler--chevron-left] size-5 cursor-pointer"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
                <span className="icon-[tabler--chevron-right] size-5"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
}