"use client"
import { Carousel } from "@/src/components/UI/Carousel";
import { MapData } from "@/src/types/MapTypes";
import { useState } from "react";

export default function MapPage() {
  const [selectedDataId, setSelectedDataId] = useState<string | null>(null);

  const clickImageAction = (id: string) => {
    setSelectedDataId(id);
  }

  return (
    <div className="w-full h-[calc(100%-85px)] flex justify-center items-center mt-5 px-10">
      {selectedDataId ? 
      (
        <div className="w-full h-full flex flex-row gap-10">
          <div className="w-1/3 h-full ">
            {/* main image */}
            <div className="card h-full">
              <div className={`w-full h-full rounded-2xl`}>
                <img className="w-full h-full" src={DATAS.find(e => e.id == selectedDataId)?.main_url} alt="" />
              </div>
              <div className="rounded-full card-body space-y-3 items-center">
                <h5 className="card-title">{DATAS.find(e => e.id == selectedDataId)?.label}</h5>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full  flex flex-col gap-5">
            <div className="w-full h-1/2">
              {/* second image */}
              <div className={`w-full h-full rounded-2xl`}>
                <img className="w-full h-full" src={DATAS.find(e => e.id == selectedDataId)?.second_url} alt="" />
              </div>
            </div>
            <div className="w-full h-1/2 flex flex-row gap-5">
              {/* content */}
              <div className="w-1/2 h-full rounded-2xl bg-[#f1e0d6] text-black flex items-center px-5">
                <span className="text-center">{DATAS.find(e => e.id == selectedDataId)?.content}</span>
              </div>
              <div className="w-1/2 h-full">
                <Carousel datas={DATAS.filter(e => e.id !== selectedDataId)} numImgInRow={3} clickImageAction={clickImageAction} />
              </div>
            </div>
          </div>
        </div>
        ) : (<div className="w-full h-full py-10"><Carousel datas={DATAS} numImgInRow={4} clickImageAction={clickImageAction}/></div>)}
      
      
    </div>
  );
}

const DATAS: MapData[] = [
  {
    id: "1",
    main_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    second_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    content: "Eleanor Roosevelt là Đệ nhất Phu nhân Hoa Kỳ, nhà hoạt động xã hội và chính trị lỗi lạc của thế kỷ XX. Dù xuất thân trong một gia đình quyền thế, bà dành trọn đời mình cho những người yếu thế – đặc biệt là phụ nữ, người nghèo và các cộng đồng da màu. Là vợ của Tổng thống Franklin D. Roosevelt, bà không chỉ là hậu phương mà còn là tiếng nói mạnh mẽ thúc đẩy các chính sách nhân đạo và bình đẳng giới. Sau khi chồng qua đời, bà tiếp tục cống hiến cho thế giới với vai trò Chủ tịch Ủy ban Nhân quyền Liên Hợp Quốc (1946). Eleanor Roosevelt là biểu tượng của lòng nhân ái, trí tuệ và sự dấn thân vì công bằng. Bà truyền cảm hứng cho mọi thế hệ tin rằng: “Không ai có thể khiến bạn cảm thấy thấp kém nếu không có sự đồng ý của chính bạn.” Câu chuyện của bà khẳng định rằng phụ nữ hoàn toàn có thể trở thành lực lượng dẫn dắt thay đổi thế giới bằng tri thức, lòng dũng cảm và tinh thần nhân văn.",
    label: "Anntonia Porsild Marthaya ",
  },
  {
    id: "2",
    main_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    second_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    content: "Eleanor Roosevelt là Đệ nhất Phu nhân Hoa Kỳ, nhà hoạt động xã hội và chính trị lỗi lạc của thế kỷ XX. Dù xuất thân trong một gia đình quyền thế, bà dành trọn đời mình cho những người yếu thế – đặc biệt là phụ nữ, người nghèo và các cộng đồng da màu. Là vợ của Tổng thống Franklin D. Roosevelt, bà không chỉ là hậu phương mà còn là tiếng nói mạnh mẽ thúc đẩy các chính sách nhân đạo và bình đẳng giới. Sau khi chồng qua đời, bà tiếp tục cống hiến cho thế giới với vai trò Chủ tịch Ủy ban Nhân quyền Liên Hợp Quốc (1946). Eleanor Roosevelt là biểu tượng của lòng nhân ái, trí tuệ và sự dấn thân vì công bằng. Bà truyền cảm hứng cho mọi thế hệ tin rằng: “Không ai có thể khiến bạn cảm thấy thấp kém nếu không có sự đồng ý của chính bạn.” Câu chuyện của bà khẳng định rằng phụ nữ hoàn toàn có thể trở thành lực lượng dẫn dắt thay đổi thế giới bằng tri thức, lòng dũng cảm và tinh thần nhân văn.",
    label: "Malala Yousafzai",
  },
  {
    id: "3",
    main_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    second_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    content: "Eleanor Roosevelt là Đệ nhất Phu nhân Hoa Kỳ, nhà hoạt động xã hội và chính trị lỗi lạc của thế kỷ XX. Dù xuất thân trong một gia đình quyền thế, bà dành trọn đời mình cho những người yếu thế – đặc biệt là phụ nữ, người nghèo và các cộng đồng da màu. Là vợ của Tổng thống Franklin D. Roosevelt, bà không chỉ là hậu phương mà còn là tiếng nói mạnh mẽ thúc đẩy các chính sách nhân đạo và bình đẳng giới. Sau khi chồng qua đời, bà tiếp tục cống hiến cho thế giới với vai trò Chủ tịch Ủy ban Nhân quyền Liên Hợp Quốc (1946). Eleanor Roosevelt là biểu tượng của lòng nhân ái, trí tuệ và sự dấn thân vì công bằng. Bà truyền cảm hứng cho mọi thế hệ tin rằng: “Không ai có thể khiến bạn cảm thấy thấp kém nếu không có sự đồng ý của chính bạn.” Câu chuyện của bà khẳng định rằng phụ nữ hoàn toàn có thể trở thành lực lượng dẫn dắt thay đổi thế giới bằng tri thức, lòng dũng cảm và tinh thần nhân văn.",
    label: "Eleanor Roosevelt",
  },
  {
    id: "4",
    main_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    second_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    content: "Eleanor Roosevelt là Đệ nhất Phu nhân Hoa Kỳ, nhà hoạt động xã hội và chính trị lỗi lạc của thế kỷ XX. Dù xuất thân trong một gia đình quyền thế, bà dành trọn đời mình cho những người yếu thế – đặc biệt là phụ nữ, người nghèo và các cộng đồng da màu. Là vợ của Tổng thống Franklin D. Roosevelt, bà không chỉ là hậu phương mà còn là tiếng nói mạnh mẽ thúc đẩy các chính sách nhân đạo và bình đẳng giới. Sau khi chồng qua đời, bà tiếp tục cống hiến cho thế giới với vai trò Chủ tịch Ủy ban Nhân quyền Liên Hợp Quốc (1946). Eleanor Roosevelt là biểu tượng của lòng nhân ái, trí tuệ và sự dấn thân vì công bằng. Bà truyền cảm hứng cho mọi thế hệ tin rằng: “Không ai có thể khiến bạn cảm thấy thấp kém nếu không có sự đồng ý của chính bạn.” Câu chuyện của bà khẳng định rằng phụ nữ hoàn toàn có thể trở thành lực lượng dẫn dắt thay đổi thế giới bằng tri thức, lòng dũng cảm và tinh thần nhân văn.",
    label: "Hansa Mehta",
  },
  {
    id: "5",
    main_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    second_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    content: "Eleanor Roosevelt là Đệ nhất Phu nhân Hoa Kỳ, nhà hoạt động xã hội và chính trị lỗi lạc của thế kỷ XX. Dù xuất thân trong một gia đình quyền thế, bà dành trọn đời mình cho những người yếu thế – đặc biệt là phụ nữ, người nghèo và các cộng đồng da màu. Là vợ của Tổng thống Franklin D. Roosevelt, bà không chỉ là hậu phương mà còn là tiếng nói mạnh mẽ thúc đẩy các chính sách nhân đạo và bình đẳng giới. Sau khi chồng qua đời, bà tiếp tục cống hiến cho thế giới với vai trò Chủ tịch Ủy ban Nhân quyền Liên Hợp Quốc (1946). Eleanor Roosevelt là biểu tượng của lòng nhân ái, trí tuệ và sự dấn thân vì công bằng. Bà truyền cảm hứng cho mọi thế hệ tin rằng: “Không ai có thể khiến bạn cảm thấy thấp kém nếu không có sự đồng ý của chính bạn.” Câu chuyện của bà khẳng định rằng phụ nữ hoàn toàn có thể trở thành lực lượng dẫn dắt thay đổi thế giới bằng tri thức, lòng dũng cảm và tinh thần nhân văn.",
    label: "Hansa Mehta",
  },
  {
    id: "6",
    main_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    second_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    content: "Eleanor Roosevelt là Đệ nhất Phu nhân Hoa Kỳ, nhà hoạt động xã hội và chính trị lỗi lạc của thế kỷ XX. Dù xuất thân trong một gia đình quyền thế, bà dành trọn đời mình cho những người yếu thế – đặc biệt là phụ nữ, người nghèo và các cộng đồng da màu. Là vợ của Tổng thống Franklin D. Roosevelt, bà không chỉ là hậu phương mà còn là tiếng nói mạnh mẽ thúc đẩy các chính sách nhân đạo và bình đẳng giới. Sau khi chồng qua đời, bà tiếp tục cống hiến cho thế giới với vai trò Chủ tịch Ủy ban Nhân quyền Liên Hợp Quốc (1946). Eleanor Roosevelt là biểu tượng của lòng nhân ái, trí tuệ và sự dấn thân vì công bằng. Bà truyền cảm hứng cho mọi thế hệ tin rằng: “Không ai có thể khiến bạn cảm thấy thấp kém nếu không có sự đồng ý của chính bạn.” Câu chuyện của bà khẳng định rằng phụ nữ hoàn toàn có thể trở thành lực lượng dẫn dắt thay đổi thế giới bằng tri thức, lòng dũng cảm và tinh thần nhân văn.",
    label: "Hansa Mehta",
  },
  {
    id: "7",
    main_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    second_url: "https://cdn.flyonui.com/fy-assets/components/card/image-7.png",
    content: "Eleanor Roosevelt là Đệ nhất Phu nhân Hoa Kỳ, nhà hoạt động xã hội và chính trị lỗi lạc của thế kỷ XX. Dù xuất thân trong một gia đình quyền thế, bà dành trọn đời mình cho những người yếu thế – đặc biệt là phụ nữ, người nghèo và các cộng đồng da màu. Là vợ của Tổng thống Franklin D. Roosevelt, bà không chỉ là hậu phương mà còn là tiếng nói mạnh mẽ thúc đẩy các chính sách nhân đạo và bình đẳng giới. Sau khi chồng qua đời, bà tiếp tục cống hiến cho thế giới với vai trò Chủ tịch Ủy ban Nhân quyền Liên Hợp Quốc (1946). Eleanor Roosevelt là biểu tượng của lòng nhân ái, trí tuệ và sự dấn thân vì công bằng. Bà truyền cảm hứng cho mọi thế hệ tin rằng: “Không ai có thể khiến bạn cảm thấy thấp kém nếu không có sự đồng ý của chính bạn.” Câu chuyện của bà khẳng định rằng phụ nữ hoàn toàn có thể trở thành lực lượng dẫn dắt thay đổi thế giới bằng tri thức, lòng dũng cảm và tinh thần nhân văn.",
    label: "Hansa Mehta",
  },
];