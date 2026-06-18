// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
import StorySection from "../components/StorySection";
import VideoSection from "../components/VideoSection";
import FeatureGrid from "../components/FeatureGrid";
import ResultSection from "../components/ResultSection";
import RoadmapSection from "../components/RoadmapSection";
import StoryFeatureSection from "../components/StoryFeatureSection";

export default function HomePage() {
    return (
        <>
        {/* Thêm thông tin chi tiết cho sản phẩm bằng cách nhấn vào hình ảnh, các hình phải liên quan với nhau */}
            {/* <Navbar /> */}
            <Hero />
            <TeamSection />
            <StorySection
                title={"Danh hiệu &<br />Giải Thưởng"}
                image="/assets/IMG_2695.JPEG"
                imageAlt="Durian Farm"
                showButton
                descriptions={[
                    <>
                        <strong>1. Thách thức:</strong>
                        {" "}
                        Phá vỡ "Tứ giác rủi ro" Nông nghiệp Tây Nguyên đang đứng trước những thách thức lớn từ môi trường và thị trường. EaAgri được phát triển để giải quyết triệt để 4 rào cản cốt lõi: Biến đổi khí hậu: Ứng phó tình trạng sốc nước và cực đoan thời tiết. Dịch bệnh: Kiểm soát các biến chủng dịch bệnh phức tạp trên cây trồng. Tri thức: Khỏa lấp khoảng trống về kỹ thuật canh tác chuyên sâu. Thị trường: Xóa bỏ sự bất đối xứng thông tin, tối ưu hóa chuỗi giá trị.
                    </>,

                    <>
                        <strong>2. Giải pháp:</strong>
                        {" "}
                        Số hóa quy trình canh tác (Data-driven Farming) Chúng tôi không chỉ cung cấp công cụ, mà xây dựng một tư duy canh tác mới dựa trên dữ liệu thực tế: AI & IoT Tiên tiến: Hệ thống cảm biến thu thập dữ liệu thời gian thực, kết hợp trí tuệ nhân tạo để đưa ra các kịch bản ứng phó chính xác. Tối ưu tài nguyên: Giảm thiểu lãng phí nước và phân bón, hướng tới nông nghiệp bền vững. Kết nối mạng lưới: Thu hẹp khoảng cách giữa người nông dân và đội ngũ chuyên gia kỹ thuật thông qua nền tảng công nghệ trực tuyến.
                    </>,
                ]}
            />
            <StorySection
                title={"Vấn Đề &<br />Giải Pháp"}
                image="/assets/mohinhtongquan"
                imageAlt="System Overview"
                showButton
                descriptions={[
                    <>
                        Nông nghiệp Tây Nguyên đang đối mặt với "Tứ giác rủi ro": Sốc nước do biến đổi khí hậu, dịch bệnh phức tạp, thiếu hụt tri thức chuyên môn và bất đối xứng thông tin thị trường.
                    </>,

                    <>
                        <strong>EaAgri</strong>
                        {" "}
                        ra đời nhằm số hóa quy trình canh tác, chuyển dịch sang "Data-driven farming", giúp giảm thiểu lãng phí tài nguyên và kết nối nông dân với chuyên gia kỹ thuật thông qua công nghệ AI & IoT tiên tiến.
                    </>,
                ]}
            />
            <VideoSection
                title="Lời Giải Cho Nông Dân"
                description="Sự khởi đầu của dự án!"
                videoUrl="https://www.youtube.com/embed/ap6V_7nSDm8?start=1"
                fallbackUrl="https://www.youtube.com/watch?v=ap6V_7nSDm8"
            />
            <VideoSection
                title="Kiến Trúc Hệ Thống"
                description="Mô hình Hybrid kết hợp giữa sức mạnh AI, IoT và chuyên gia con người."
                videoUrl="https://www.youtube.com/embed/QgVPizuOCdg?rel=0"
                fallbackUrl="https://www.youtube.com/watch?v=QgVPizuOCdg"
            />
            <VideoSection
                title="Demo Thực Tế Sản Phẩm"
                description="Trải nghiệm thực tế hệ thống EaAgri."
                videoUrl="https://www.youtube.com/embed/WxfKTEIxSjQ"
                fallbackUrl="https://www.youtube.com/watch?v=WxfKTEIxSjQ"
                footerText="Video demo thực tế sản phẩm EaAgri"
            />
            <StoryFeatureSection
                title="1. IoT & Tưới Thông Minh"
                description="Hệ thống sử dụng mạng lưới cảm biến độ ẩm đất đa tầng để ra quyết định tưới thông minh dựa trên logic 3 lớp:"
                image="/assets/mohinhtuoi.jpg"
                list={[
                    {
                        title: "Lớp Sinh học",
                        content:
                            "Tính toán nhu cầu nước theo tuổi cây và giai đoạn sinh trưởng.",
                    },
                    {
                        title: "Lớp Môi trường (Pre-emptive Stop)",
                        content:
                            "Tích hợp API thời tiết để tự động ngưng tưới nếu dự báo có mưa >10mm.",
                    },
                    {
                        title: "Lớp Bảo vệ",
                        content:
                            "Cưỡng chế ngắt bơm nếu độ ẩm đất >70% để chống úng rễ.",
                    },
                ]}
            />
            <StoryFeatureSection
                title='2. AI "Dual-Brain" (Bộ Não Kép)'
                description="Kết hợp sức mạnh giữa thị giác máy tính và khả năng suy luận ngôn ngữ:"
                image={[
                    "/assets/phantichanhbenh.png",
                    "/assets/mohinhphantichanh.png",
                    "/assets/hethonglongtext.jpg",
                ]}
                reverse
                list={[
                    {
                        title: "Thị giác máy tính (Vision)",
                        content:
                            "Sử dụng YOLOv9 để phát hiện và khoanh vùng bệnh trên lá cây theo thời gian thực.",
                    },
                    {
                        title: "Suy luận sâu (Reasoning)",
                        content:
                            "Sử dụng Gemini 2.0 Flash với cửa sổ ngữ cảnh rộng để phân tích nguyên nhân gốc rễ và đưa ra phác đồ điều trị chuẩn VietGAP.",
                    },
                    {
                        title: "📲 App Flutter & Ngrok Tunnel",
                        content:
                            "Giao tiếp an toàn giữa người dùng và Backend Server thông qua đường hầm mã hóa Ngrok.",
                    },
                    {
                        title: "📲🔊 Đa Phương Thức (GTTS)",
                        content:
                            "Tích hợp Google Text-to-Speech chuyển đổi kết quả tư vấn thành giọng nói (.mp3) hỗ trợ bà con..",
                    },
                    {
                        title: "📚 Kho Tri Thức Chuẩn Hóa",
                        content:
                            " Truy xuất dữ liệu cục bộ (VietGAP, BĐKH) đảm bảo độ chính xác chuyên môn cao.",
                    },
                ]}
            />
            <StoryFeatureSection
                title="3. Hệ thống RAG"
                description="Hệ thống chuẩn hóa và chuyển đổi dữ liệu đầu vào thành vector để truy xuất ngữ cảnh chính xác từ cơ sở dữ liệu, từ đó giúp LLM phản hồi thông minh về giá cả và kỹ thuật canh tác cây trồng."
                image="/assets/Rag1.jpg"
                list={[
                    {
                        title: "Prompt & Embedding",
                        content: "Chuẩn hóa câu hỏi và chuyển văn bản thành vector.",
                    },
                    {
                        title: "Vector Database",
                        content: " Lưu trữ dữ liệu về giá cả, ứng dụng và cây trồng.",
                    },
                    {
                        title: "Retriever",
                        content: "Tìm kiếm ngữ cảnh liên quan bằng similarity search.",
                    },
                    {
                        title: "LLM/Chatbot",
                        content: "Sinh câu trả lời tiếng Việt dựa trên ngữ cảnh truy xuất.",
                    },
                ]}
            />
            <StoryFeatureSection
                title="4. Module Dự Báo Thị Trường"
                description="Giải quyết vấn đề bất đối xứng thông tin thị trường cho nông dân:"
                image="/assets/mohinhgia.jpg"
                reverse
                list={[
                    {
                        title: "ML Model",
                        content: "Sử dụng các mô hình học máy (như LSTM) để phân tích chuỗi dữ liệu giá cả lịch sử.",
                    },
                    {
                        title: "Forecast",
                        content: "Đưa ra dự báo xu hướng giá trong ngắn hạn (1-7 ngày).",
                    },
                    {
                        title: "Impact",
                        content: "Giúp nông dân tránh bán đáy.",
                    },
                ]}
            />
            <FeatureGrid />
            <ResultSection />
            <RoadmapSection />
            {/* <Footer /> */}
        </>
    );
}