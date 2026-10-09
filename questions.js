

const questions = [

    /* =========================================================
   ẨM THỰC
   ========================================================= */

{level:1,question:"Món ăn nào của Ý có đế bột tròn, phủ phô mai và nhiều loại topping?",answer:"Pizza",explanation:"Pizza là món bánh nướng của Ý, gồm đế bột mì phủ sốt cà chua, phô mai và các loại nhân như thịt, hải sản hoặc rau củ, được nướng cho đến khi thơm ngon.🍕"},

{level:1,question:"Loại hạt nào thực ra không phải là hạt mà là cây họ đậu?",answer:"Đậu phộng",explanation:"Đậu phộng là loại hạt giàu dinh dưỡng thuộc họ đậu, thường được dùng làm thực phẩm, chế biến thành nhiều món ăn và ép lấy dầu🥜"},

{level:1,question:"Quốc gia nào phát minh ra mì ăn liền?",answer:"Nhật Bản",explanation:"Mì ăn liền đầu tiên trên thế giới được phát minh tại Nhật Bản vào năm 1958 bởi Momofuku Ando. Phát minh này giúp mọi người chuẩn bị bữa ăn nhanh chóng và tiện lợi. Từ đó, mì ăn liền dần phổ biến trên khắp thế giới."},

{level:1,question:"Loại quả nào có nhiều kali hơn chuối?",answer:"Bơ",explanation:"🥑 Đáp án là bơ vì quả bơ chứa nhiều kali hơn chuối. Kali là một khoáng chất quan trọng giúp cơ thể duy trì hoạt động của cơ bắp, tim và hệ thần kinh. Mặc dù chuối rất nổi tiếng vì giàu kali, nhưng tính theo cùng khối lượng, bơ thường có hàm lượng kali cao hơn."},

{level:1,question:"Loại quả nhỏ màu đỏ, có hạt bên ngoài thường dùng làm nước ép?",answer:"Dâu"},

{level:1,question:"Cà chua được xếp vào loại gì theo thực vật học?",answer:"Trái cây",explanation:"🍅 Tại sao là trái cây? Vì cà chua mọc từ hoa và có hạt bên trong nên theo thực vật học, nó được xếp vào nhóm trái cây, dù nhiều người thường gọi là rau"},

{level:1,question:"Loại trái cây được mệnh danh là vua trái cây?",answer:"Sầu Riêng",explanation:"vì sầu riêng được mệnh danh là vua của các loại trái cây nhờ kích thước lớn, hương vị đặc trưng và hàm lượng dinh dưỡng cao. Loại quả này rất được yêu thích ở nhiều nước Đông Nam Á và thường có giá trị kinh tế cao hơn nhiều loại trái cây khác"},

{level:1,question:"Loại trái cây được mệnh danh là nữ hoàng trái cây?",answer:"Măng Cụt",explanation:"vì măng cụt được mệnh danh là nữ hoàng trái cây nhờ hương vị ngọt thanh, thơm ngon và vẻ ngoài đẹp mắt. Loại quả này thường được xem là sự kết hợp hoàn hảo với sầu riêng, loại quả được gọi là vua trái cây"},

{level:1,question:"Quế được lấy từ phần nào của cây?",answer:"Vỏ Cây",explanation:"🌿 Đáp án là vỏ cây vì quế được lấy từ lớp vỏ bên trong của cây quế. Sau khi thu hoạch, vỏ được phơi hoặc sấy khô để tạo thành những thanh quế có mùi thơm đặc trưng dùng làm gia vị\n✅ Tác dụng Quế giúp tạo hương thơm cho món ăn, đồ uống, hỗ trợ giữ ấm cơ thể và thường được sử dụng trong y học cổ truyền."},

{level:1,question:"Tàu hũ (đậu phụ) được làm từ loại đậu nào?",answer:"Đậu nành",explanation:"🌱 Đáp án là đậu nành vì tàu hũ (đậu phụ) được làm từ sữa đậu nành. Hạt đậu nành được ngâm, xay với nước, lọc lấy sữa rồi đông tụ để tạo thành những miếng đậu phụ mềm và giàu dinh dưỡng.\n✅ Tác dụng của tàu hũ là nguồn cung cấp protein thực vật tốt, chứa nhiều chất dinh dưỡng, dễ tiêu hóa và thường được sử dụng trong các món ăn chay cũng như món mặn"},

{level:1,question:"Bột năng được làm từ củ gì?",answer:"Củ sắn",explanation:" Đáp án là củ sắn vì bột năng được sản xuất từ củ sắn (khoai mì). Củ sắn được nghiền, lọc lấy tinh bột rồi phơi hoặc sấy khô để tạo thành bột năng.\n✅ Tác dụng bột năng thường được dùng để tạo độ dai, dẻo và sánh cho các món ăn như chè, bánh, súp, nước sốt và trân châu."},

{level:1,question:"Loại đường nào không được tinh luyện hoàn toàn và còn chứa mật mía?",answer:"Đường nâu",explanation:"🍯 Đáp án là đường nâu vì đường nâu không được tinh luyện hoàn toàn như đường trắng nên vẫn giữ lại một phần mật mía, tạo nên màu nâu đặc trưng và hương vị ngọt thơm nhẹ.\n✅ Tác dụng đường nâu thường được dùng trong làm bánh, pha đồ uống và nấu ăn để tăng màu sắc, mùi thơm cũng như tạo vị ngọt đậm đà hơn so với đường trắng."},

{level:1,question:"Loại hạt thường bị nhầm là hạt nhưng thực chất là phần nhân của hạch quả?",answer:"Hạnh nhân",explanation:"🌰 Đáp án là hạnh nhân vì phần chúng ta ăn thực chất không phải là một hạt theo nghĩa thực vật học. Hạnh nhân là phần nhân nằm bên trong hạch quả của cây hạnh nhân. Khi lớp vỏ và phần thịt quả bên ngoài được loại bỏ, phần nhân bên trong sẽ được thu hoạch để làm thực phẩm.\n✅ Tác dụng Hạnh nhân giàu chất béo lành mạnh, protein, chất xơ, vitamin E và nhiều khoáng chất, tốt cho tim mạch và sức khỏe tổng thể"},

{level:1,question:"Thứ gì càng khô càng cay?",answer:"Ớt khô"},

{level:1,question:"Loại quả tên có chữ chanh nhưng không phải chanh\"đố mẹo\"?",answer:"Chanh dây"},

{level:1,question:"Loại mì Nhật Bản thường ăn với nước dùng nóng?",answer:"Ramen"},

{level:1,question:"Loại chè nào được nấu từ đậu xanh, bột báng và nước cốt dừa?",answer:"Chè bà ba"},

{level:1,question:"Món ăn nào của Thổ Nhĩ Kỳ gồm thịt nướng cắt lát từ khối thịt lớn?",answer:"Kebab"},

{level:1,question:"Tôi có vỏ nhưng không phải trái cây, bên trong có nhân thịt và tôm \"đố mẹo\"?",answer:"Há cảo"},

{level:1,question:"Tôi là món ăn Hàn Quốc, càng để lâu càng chua?\"đố mẹo\"?",answer:"Kimchi"},

{level:1,question:"Thứ gì trong bếp có thể chảy nhưng không phải chất lỏng \"đố mẹo\"?",answer:"Phô mai"},

{level:1,question:"Tôi không phải rau, không phải quả. Tôi được tạo ra từ đậu nành nhưng lại có thể thay thế thịt trong nhiều món ăn. Tôi là gì \"đố mẹo\"?",answer:"đậu hũ"},

{level:1,question:"Loại bánh của Mexico thường được gói nhân thịt?",answer:"Taco"},

{level:1,question:"Loại cá dùng để làm trứng cá muối caviar?",answer:"Cá tầm"},

{level:1,question:"Trong ly có đá mát ghê\nThêm viên đen nhỏ thích mê vô cùng\nHút hoài chẳng muốn ngừng luôn.Là món nước gì ai thường gọi tên?\"đố mẹo\"?",answer:"Trà sữa trân châu"},

{level:1,question:"Gia vị nào ai cũng có? \"đố mẹo\" ",answer:"Khẩu vị"},

{level:1,question:"Món ăn nào càng nóng càng đông người \"đố mẹo\"?",answer:"lẩu"},

{level:1,question:"Tôi có mắt nhưng không nhìn, có vỏ nhưng không mặc, có nước nhưng không bơi vậy tôi là là gì \"đố mẹo\"?",answer:"Thơm"},

{level:1,question:"Tên tôi có chữ long, nhưng không phải con vật vậy tôi là quả gì \"đố mẹo\"?",answer:"Thanh long"},

{level:1,question:" Tôi mặc áo gai, ruột vàng thơm ngát vậy tôi là quả gì \"đố mẹo\"?",answer:"Mít"},

{level:1,question:"Quả gì có vỏ có lông, ruột trắng trong như thạch?",answer:"Chôm chôm"},

{level:1,question:"Quả gì có nước bên trong mà không cần ép?",answer:"Dừa"},

{level:1,question:"Loại quả nào tên chỉ có một âm tiết và vị rất chua?",answer:"Cóc"},

{level:1,question:"Quả gì có múi nhưng không phải cam?",answer:"Bưởi"},

{level:1,question:"Món gì tên có bò nhưng không có bò?",answer:"Bò bía"},

{level:1,question:"Món gì vừa ăn vừa thổi?",answer:"Cháo"},

{level:1,question:"Món gì càng cay càng nhiều người thích?",answer:"Tokbokki"},

{level:1,question:"Món ăn nào ăn bằng thìa, thường được dùng khai vị và có nhiều nước\"đố mẹo\"?",answer:"Súp"},

{level:1,question:"Món gì tên là một câu hỏi?\"đố mẹo\"?",answer:"Bánh hỏi"},

{level:1,question:"Món gì có đúc nhưng không xây nhà\"đố mẹo\"?",answer:"Bánh đúc"},

{level:1,question:"Món gì tên là một màu sắc\"đố mẹo\"?",answer:"Xôi gấc"},

{level:1,question:"Bánh gì có tên bộ phận cơ thể\"đố mẹo\"?",answer:"Bánh tai Heo"},

{level:1,question:"Bánh gì được gọi bằng tên con vật nhưng nguyên liệu chính không phải con vật đó\"đố mẹo\"?",answer:"Bánh da lợn"},

{level:1,question:"Bánh gì vuông vức, gói lá xanh, bên trong có nếp, đậu và thịt?",answer:"Bánh chưng",explanation:"Vì bánh chưng có hình vuông, được gói bằng lá dong màu xanh, bên trong gồm gạo nếp, đậu xanh và thịt heo. Đây là những đặc điểm rất đặc trưng của bánh chưng nên chỉ cần nghe mô tả là có thể nhận ra ngay."},

{level:1,question:"Đây là món gì Bột gạo + nghệ + tôm thịt = Bánh?",answer:"Bánh xèo"},

{level:1,question:"Cơm nguội phơi khô + chiên giòn + kho quẹt = ?",answer:"Cơm cháy"},

{level:1,question:"Bánh gì trắng dẻo tròn đầy,Lang Liêu dâng lễ Vua Hùng ngày xưa",answer:"Bánh dày",explanation:"Bánh dày có màu trắng, hình tròn và dẻo, được làm từ gạo nếp giã nhuyễn. Theo truyền thuyết, Lang Liêu đã làm bánh dày để dâng lên Vua Hùng. Bánh dày tượng trưng cho bầu trời, còn bánh chưng tượng trưng cho mặt đất."},

{level:1,question:"Bột trắng bọc thịt bên trong,Hấp lên nóng hổi, thơm lừng cả mâm.Là món gì?",answer:"Bánh bao"},

{level:1,question:"Bún gì không có lửa vẫn nướng \"đố mẹo\"?",answer:"Bún thịt nướng"},

{level:1,question:"Ba anh em cùng họ, một nổi, một nằm, một lọc là ai? \"đố mẹo\ ",answer:"Bèo Nậm Lọc"},


/* =========================================================
   LỊCH SỬ
   ========================================================= */

{level:2,question:"Người được gọi là Kẻ chinh phục thế giới ở thế kỷ XIII?",answer:"Thành Cát Tư Hãn"},
{level:2,question:"Người đọc bản Tuyên ngôn Độc lập ngày 2/9/1945 là ai?",answer:"Hồ Chí Minh"},
{level:2,question:"Hai Bà Trưng khởi nghĩa chống ách đô hộ của nước nào?",answer:"Nhà Hán"},
{level:2,question:"Ai là người thống nhất 12 sứ quân?",answer:"Đinh Bộ Lĩnh"},
{level:2,question:"Người viết Bình Ngô Đại Cáo là ai?",answer:"Nguyễn Trãi"},
{level:2,question:"Vị vua cuối cùng của triều Nguyễn là ai?",answer:"Bảo Đại"},
{level:2,question:"Ai là hoàng đế đầu tiên của Trung Quốc thống nhất?",answer:"Tần Thủy Hoàng"},
{level:2,question:"Chiến thắng Điện Biên Phủ diễn ra năm nào?",answer:"1954"},
{level:2,question:"Ai là người lãnh đạo cuộc khởi nghĩa Hai Bà Trưng cùng với Trưng Trắc?",answer:"Trưng Nhị"},
{level:2,question:"Quang Trung tên thật là gì?",answer:"Nguyễn Huệ"},
{level:2,question:"Kinh đô Thăng Long ngày nay là thành phố nào?",answer:"HÀ NỘI"},
{level:2,question:"Ngoài thành phố Nagasaki của Nhật Bản đã bị Mỹ ném bom nguyên tử trong Chiến tranh thế giới thứ hai còn thành phố nào khác ?",answer:"Hiroshima"},
{level:2,question:"Chiến thắng Bạch Đằng năm 938 do ai lãnh đạo?",answer:"Ngô Quyền"},
{level:2,question:"Cha của Bác Hồ là ai?",answer:"Nguyễn Sinh Sắc"},
{level:2,question:"Ai là vị vua đầu tiên của nhà Nguyễn?",answer:"Gia Long"},
{level:2,question:"Ai là hoàng đế đầu tiên thống nhất Trung Quốc?",answer:"Tần Thủy Hoàng"},
{level:2,question:"Con tàu Titanic chìm năm nào?",answer:"1912"},
{level:2,question:"Ai là lãnh đạo Đức Quốc xã trong Thế chiến II",answer:"Hitler"},
{level:2,question:"Ai là tổng thống đầu tiên của Hoa Kỳ",answer:"Washington"},
{level:2,question:"Ai được mệnh danh là Cha đẻ của Liên Xô?",answer:"Lenin"},
{level:2,question:"Người tìm ra châu Mỹ?",answer:"Columbus"},
{level:2,question:"Trận chiến gắn với cọc gỗ?",answer:"Bạch Đằng"},
{level:2,question:"Ai trả gươm cho Rùa Vàng?",answer:"Lê Lợi"},
{level:2,question:"Anh trai của Chủ Tịch Hồ Chí Minh là ai?",answer:"Nguyễn Sinh Khiêm"},
{level:2,question:"Bác Hồ sinh năm nào?",answer:"1890"},
{level:2,question:"Bác Hồ ra đi tìm đường cứu nước năm nào?",answer:"1911"},
{level:2,question:"Quang Trung và Nguyễn Huệ có mối quan hệ gì?",answer:"là một"},
{level:2,question:"Tên khai sinh của Bác Hồ là gì?",answer:"Nguyễn Sinh Cung"},
{level:2,question:"Nữ anh hùng tuổi trẻ của Việt Nam là ai?",answer:"Võ Thị Sáu"},
{level:2,question:"Người anh hùng cưỡi voi đánh giặc?",answer:"Bà Triệu"},
{level:2,question:"Anh hùng thiếu niên lấy thân mình chèn pháo?",answer:"Tô Vĩnh Diện"},
{level:2,question:"Anh hùng lấy thân lấp lỗ châu mai?",answer:"Phan Đình Giót"},
{level:2,question:"Thiếu niên anh hùng bóp nát quả cam?",answer:"Trần Quốc Toản"},
{level:2,question:"Người đốt kho xăng Thị Nghè?",answer:"Nguyễn Văn Trỗi"},
{level:2,question:"Ai chỉ huy chiến dịch Điện Biên Phủ?",answer:"Võ Nguyên Giáp"},
{level:2,question:"Bác Hồ mất năm nào?",answer:"1969"},
{level:2,question:"Bác Hồ hưởng thọ bao nhiêu tuổi?",answer:"79"},
{level:2,question:"Đại tướng Võ Nguyên Giáp mất năm nào?",answer:"2013"},
{level:2,question:"Đại tướng Võ Nguyên Giáp hưởng thọ bao nhiêu tuổi?",answer:"102"},
{level:2,question:"Ai là Hoàng đế Pháp nổi tiếng nhất?",answer:"Napoleon"},
{level:2,question:"Người đầu tiên đặt chân lên Mặt Trăng?",answer:"Armstrong"},
{level:2,question:"Tổng Bí thư đầu tiên của Đảng là ai?",answer:"Trần Phú"},
{level:2,question:"Anh hùng thiếu niên liên lạc nổi tiếng?",answer:"Kim Đồng"},
{level:2,question:"Việt Nam gia nhập ASEAN năm nào?",answer:"1995"},
{level:2,question:"Năm nào xảy ra nạn đói khiến hơn 2 triệu người Việt Nam thiệt mạng",answer:"1945"},
{level:2,question:"Vị anh hùng dân tộc nào tự xưng Đế thay vì Vương để khẳng định nước ta bình đẳng với phương Bắc??",answer:"Mai Hắc Đế"},
{level:2,question:"Người Ê Đê đầu tiên của Đắk Lắk được bầu vào Quốc hội khóa I là ai?",answer:"Y Ngông"},
{level:2,question:"Ai là quân sư nổi tiếng của chúa Nguyễn ở Đàng Trong?",answer:"Đào Duy Từ"},
{level:2,question:"Vị hoàng tử nhà Trần nổi tiếng thông thạo nhiều ngôn ngữ là ai?",answer:"Trần Nhật Duật"},
{level:2,question:"Nhà yêu nước nào được gọi là Ông già Bến Ngự?",answer:"Phan Bội Châu"},


/* =========================================================
   ÂM NHẠC
   ========================================================= */

{level:3,question:"Nhạc sĩ sáng tác bài Tiến quân ca là ai?",answer:"Văn Cao"},
{level:3,question:"Loại nhạc cụ có 88 phím?",answer:"Piano"},
{level:3,question:"Vua nhạc Pop được nhắc đến nhiều nhất thế giới là ai?",answer:"Michael Jackson"},
{level:3,question:"Bài hát nào giúp Jack trở thành hiện tượng V-pop năm 2019?",answer:"Hồng nhan"},
{level:3,question:"Nhắc đến Thái Bình người ta nghĩ đến ai ?",answer:"Sơn Tùng MTP"},
{level:3,question:"Loại nhạc cụ nào có 1 dây?",answer:"đàn bầu"},
{level:3,question:"Ai được mệnh danh là Họa mi tóc nâu của V-pop?",answer:"Mỹ Tâm"},
{level:3,question:"Bài hát nào có câu mở đầu Từ Bắc vô Nam nối liền nắm tay...?",answer:"Nối vòng tay lớn"},
{level:3,question:"Bài hát nào gắn liền với Mỹ Linh những năm đầu sự nghiệp?",answer:"Hương ngọc lan"},
{level:3,question:"Ca sĩ hát bài Shape of You là ai?",answer:"Ed Sheeran"},
{level:3,question:"Nhóm nhạc nữ nổi tiếng của Hàn Quốc với bài DDU-DU DDU-DU?",answer:"BLACKPINK"},
{level:3,question:"Bài hát nổi tiếng nhất của PSY?",answer:"Gangnam Style"},
{level:3,question:"Bài hát nào của Sơn Tùng M-TP có tên một địa điểm?",answer:"Nơi này có anh"},
{level:3,question:"Ca sĩ nổi tiếng với bài Anh cứ đi đi?",answer:"Hari Won"},
{level:3,question:"Nhạc cụ nào có 6 dây và thường dùng trong nhạc rock?",answer:"Guitar"},
{level:3,question:"Nhạc cụ dân tộc Việt Nam có 16 dây?",answer:"Đàn tranh"},
{level:3,question:"Đàn nhị có bao nhiêu dây?",answer:"2 dây"},
{level:3,question:"Nhạc cụ nào không có dây nhưng vẫn tạo ra giai điệu?",answer:"Sáo"},
{level:3,question:"Anh Bo là biệt danh ca sĩ nào?",answer:"Đan Trường"},
{level:3,question:"Ca sĩ nào được mệnh danh nhân vật Hạo Nam?",answer:"Lâm Chấn Khang"},
{level:3,question:"Nhạc sĩ nào được mệnh danh là Bob Dylan của Việt Nam?",answer:"Trịnh Công Sơn"},
{level:3,question:"🌽 + 🐜 + 🥇 = ai?",answer:"Ngô Kiến Huy"},
{level:3,question:"Ông hoàng nhạc sến là ai?",answer:"Ngọc Sơn"},
{level:3,question:"Nữ hoàng nhạc Trịnh là ai?",answer:"Khánh Ly"},
{level:3,question:"Nữ hoàng Pop là ai?",answer:"Madonna"},
{level:3,question:"Ông hoàng K-pop là ai?",answer:"G-Dragon"},
{level:3,question:"Hoàng tử V-pop là ai?",answer:"Soobin"},
{level:3,question:"Nhóm nhạc nào từng nổi tiếng với phong cách tóc dựng và trang phục gây chú ý?",answer:"HKT"},
{level:3,question:"Bài hát nào gắn liền với tên tuổi HKT?",answer:"Thêm Một Lần Đau"},
{level:3,question:"Nhóm nhạc có kí hiệu 09 ?",answer:"Zero Nine"},
{level:3,question:"Bài hát nào của Hòa Minzy tái hiện lịch sử và văn hóa Bắc Ninh?",answer:"Bắc Bling"},
{level:3,question:"Nhạc sĩ nào nổi tiếng với ca khúc Vợ người ta và tự hát chính bài hát đó?",answer:"Phan Mạnh Quỳnh"},
{level:3,question:"Ca sĩ nào ra bài thì học sinh cuối cấp 3 đều lắng nghe ?",answer:"Đen Vâu"},
{level:3,question:"Nhạc cụ nào được kéo bằng vĩ?",answer:"Violin"},
{level:3,question:"Loại kèn có thân cong và màu vàng đồng?",answer:"Saxophone"},
{level:3,question:"Nhạc cụ nào giống guitar nhưng nhỏ hơn?",answer:"Ukulele"},
{level:3,question:"Ca sĩ nào được gọi là Hoàng tử mưa?",answer:"Trung Quân"},
{level:3,question:"Ai là giọng ca chính của bài Baby?",answer:"Justin Bieber"},
{level:3,question:"🏞️ + ⚪🦪 + 🦛= 🤔?",answer:"Hồ Ngọc Hà"},
{level:3,question:"❄️ + 👶= 🤔?",answer:"Đông Nhi"},
{level:3,question:"🔋+ 💤 ?",answer:"Binz"},
{level:3,question:"Ca sĩ 🍊 này là ai?",answer:"Orange"},
{level:3,question:"Rapper này 🐥 là ai ?",answer:"Gducky"},
{level:3,question:"Ca sĩ này 🍸 🍸 là ai?",answer:"Ly Ly"},
{level:3,question:"Bài hát này 👀 + ❤️ là gì?",answer:"See Tình"},
{level:3,question:"Bài hát này ✅ + ➡️ + ❌ là gì ?",answer:"Đúng cũng thành sai"},
{level:3,question:"Bài hát này 👐 + 💰 + ➡️ + 👩‍👧 là gì?",answer:"Mang tiền về cho mẹ"},
{level:3,question:"Bài hát này 👧🏻+ 🌧️ là gì ?",answer:"Em gái mưa"},
{level:3,question:"Rapper này 🍼 +🪙 là ai ?",answer:"Bình Gold"},
{level:3,question:"Nhạc cụ nào có 16 dây và thường được đặt ngang để gảy?",answer:"Đàn tranh"},


/* =========================================================
   THỂ THAO
   ========================================================= */

{level:4,question:"Cầu thủ nào được mệnh danh là Vua bóng đá?",answer:"Pele"},
{level:4,question:"Ai được mệnh danh là El Pulga?",answer:"Messi"},
{level:4,question:"CLB nào được gọi là Bà đầm già thành Turin?",answer:"Juventus"},
{level:4,question:"Cầu thủ nào có biệt danh Hoàng tử thành Rome?",answer:"Totti"},
{level:4,question:"CLB nào có biệt danh Rossoneri??",answer:"AC Milan"},
{level:4,question:"Cầu thủ này 🐢+🥷 là ai?",answer:"Mbappé"},
{level:4,question:"Cầu thủ này 🇵🇹 + 💪 + 7️⃣ + 🐐 là ai ?",answer:"Ronaldo CR7"},
{level:4,question:"Cầu thủ này 👽 + ⚽ là ai?",answer:"Ronaldo"},
{level:4,question:"Câu lạc bộ này 🔵 + 👑🦁 là?",answer:"Chelse"},
{level:4,question:"Biệt danh Lữ đoàn đỏ là của?",answer:"Liverpool"},
{level:4,question:"Câu lạc bộ này 🔴 + 🧨 là?",answer:"Arsenal"},
{level:4,question:"Câu lạc bộ này ⚪+👑+🏆?",answer:"Real Madrid"},
{level:4,question:"Từ Fergie time bắt nguồn từ câu lạc bộ nào?",answer:"Manchester United"},
{level:4,question:"Năm 2018 ai đã chấm dứt chuỗi quả bóng vàng của Messi và Ronaldo ?",answer:"Luka modric"},
{level:4,question:"Ở Thường Châu ai là cầu thủ ghi cú đúp vào lưới Qatar ?",answer:"Quang Hải"},
{level:4,question:"Tuyển thủ cầu lông nổi tiếng của VN là ai ?",answer:"Tiến Minh"},
{level:4,question:"Vận động viên bóng rổ có một hãng giày riêng là ai .?",answer:"Jordan"},
{level:4,question:"Lần đầu tiên VN vô địch AFF cup là khi nào ?",answer:"2008"},
{level:4,question:"Vận động viên espost của VN được mệnh danh thần rừng là ai?",answer:"Levi"},
{level:4,question:"Nhắc tới Qủy vương bất tử là biệt danh của tuyển thủ nào ?",answer:"Faker"},
{level:4,question:"Thủ môn lần đầu tiên được quả bóng vàng là ai ?",answer:"Yashin"},
{level:4,question:"Cầu thủ được mệnh danh là người ba phổi là ai ?",answer:"Park Ji Sung"},
{level:4,question:"Cầu thủ được mệnh danh Vũ công cuối cùng của Brasil là ai ?",answer:"Neymar"},
{level:4,question:"Đêm Istanbul huyền thoại là nói đến CLB nào ?",answer:"AC Milan"},
{level:4,question:"Cầu thủ được mệnh danh chiến binh Viking là ai ?",answer:"haaland"},
{level:4,question:"Hùm xám xứ bavaria là nói đến CLB nào ?",answer:"Bayern Munich"},
{level:4,question:"The Citizens ?",answer:"Manchester City"},
{level:4,question:"CLB nào có biệt danh Nerazzurri ?",answer:"Inter Milan"},
{level:4,question:"CLB nào được gọi là Gã khổng lồ xứ Catalan ?",answer:"Barcelona"},
{level:4,question:"CLB nào mang biệt danh Đại bàng của Bồ Đào Nha?",answer:"Benfica"},
{level:4,question:"The Foxes là CLB nào?",answer:"Leicester City"},
{level:4,question:"Ai là đội trưởng tuyển Việt Nam vô địch AFF Cup 2018?",answer:"Quế Ngọc Hải"},
{level:4,question:"Ai là chân sút ghi nhiều bàn nhất lịch sử tuyển Việt Nam?",answer:"Lê Công Vinh"},
{level:4,question:"Thủ môn bắt chính cho U23 Việt Nam tại Thường Châu 2018 là ai?",answer:"Bùi Tiến Dũng"},
{level:4,question:"Ai ghi bàn quyết định giúp Việt Nam thắng Malaysia ở AFF Cup 2018?",answer:"Anh Đức"},
{level:4,question:"Ai là đội trưởng U23 Việt Nam tại VCK U23 châu Á 2018?",answer:"Lương Xuân Trường"},
{level:4,question:"Cầu thủ nào được mệnh danh là người không phổi ?",answer:"Trọng Hoàng"},
{level:4,question:"Tiền vệ nào từng giành Quả bóng Vàng Việt Nam 2021?",answer:"Hoàng Đức"},
{level:4,question:"Cầu thủ nào được xem là biểu tượng của CLB Hà Nội FC trong nhiều năm?",answer:"Văn Quyết"},
{level:4,question:"Ai là đội trưởng tuyển nữ Việt Nam tại World Cup nữ 2023?",answer:"Huỳnh Như"},
{level:4,question:"Huấn luyện viên trưởng đưa tuyển nữ Việt Nam dự World Cup 2023 là ai?",answer:"Mai Đức Chung"},
{level:4,question:"Huyền thoại cầu lông nam của Malaysia là ai?",answer:"Lee Chong Wei"},
{level:4,question:"VĐV được mệnh danh là ông vua cầu lông của Trung Quốc?",answer:"Lin Dan"},
{level:4,question:"Nữ tay vợt từng giành 23 Grand Slam đơn?",answer:"Williams"},
{level:4,question:"Ai ghi bàn quyết định trong trận chung kết Champions League 2014 giúp Real Madrid hoàn tất La Décima?",answer:"Ramos"},
{level:4,question:"Ai là cầu thủ duy nhất vô địch Champions League với 3 CLB khác nhau?",answer:"Seedorf"},
{level:4,question:"HLV nào vô địch Champions League nhiều lần nhất?",answer:"Ancelotti"},
{level:4,question:"Biệt danh La Décima gắn với chức vô địch thứ mấy của Real Madrid?",answer:"10"},
{level:4,question:"Cầu thủ ghi nhiều bàn nhất lịch sử World Cup?",answer:"Klose"},
{level:4,question:"Ai ghi bàn bằng tay nổi tiếng tại World Cup 1986?",answer:"Maradona"},


/* =========================================================
   ĐỊA LÍ
   ========================================================= */

{level:5,question:"Thăng Long là tên cũ của thành phố nào hiện nay?",answer:"Hà Nội"},
{level:5,question:"Có bao nhiêu kỳ quan thế giới cổ đại?",answer:"7"},
{level:5,question:"Việt Nam có bao nhiêu Di sản Thế giới UNESCO?",answer:"8"},
{level:5,question:"Hang động lớn nhất thế giới nằm ở quốc gia nào?",answer:"Việt Nam"},
{level:5,question:"Thành phố nào được mệnh danh là Thành phố ngàn hoa?",answer:"Đà Lạt"},
{level:5,question:"Thành phố nào có biệt danh Hòn ngọc Viễn Đông?",answer:"Hồ Chí Minh"},
{level:5,question:"Thành phố này 🌉🐉🔥là gì?",answer:"Đà Nẵng"},
{level:5,question:"Thành phố nào được mệnh danh là thành phố Festival của Việt Nam?",answer:"Huế"},
{level:5,question:"Tỉnh nào được mệnh danh là xứ sở hoa vàng trên cỏ xanh",answer:"Phú Yên"},
{level:5,question:"Thành phố nào được mệnh danh là Kinh đô Ánh sáng?",answer:"Paris"},
{level:5,question:"Tôi có Big Ben, cung điện Buckingham và sông Thames.Tôi là thành phố nào?",answer:"London"},
{level:5,question:"Thành phố nào có tòa tháp Burj Khalifa cao nhất thế giới?",answer:"Dubai"},
{level:5,question:"Thành phố nào được mệnh danh là Hòn ngọc phương Đông?",answer:"Hong Kong"},
{level:5,question:"Thành phố nào được mệnh danh là Thành phố của các thiên thần?",answer:"Los Angeles"},
{level:5,question:"Quốc gia nào đông dân nhất thế giới?",answer:"Ấn Độ"},
{level:5,question:"Quốc gia nào có nhiều nước láng giềng nhất thế giới?",answer:"Trung Quốc"},
{level:5,question:"Quốc gia nào đcó 3 thủ đô?",answer:"Nam Phi"},
{level:5,question:"Quốc gia nào nhỏ nhất thế giới?",answer:"Vatican"},
{level:5,question:"Đây là châu lục nào 🐧🧊❄️ ?",answer:"Nam cực"},
{level:5,question:"Thành phố nào được mệnh danh là Thành phố Sư tử?",answer:"Singapore"},
{level:5,question:"Thủ đô nào của Đông Nam Á có tên nghĩa là Làng Mận Hoang?",answer:"Bangkok"},
{level:5,question:"Thành phố nào là cố đô hơn 1.000 năm của Nhật Bản?",answer:"Kyoto"},
{level:5,question:"Thành phố nào có đấu trường Colosseum?",answer:"Rome"},
{level:5,question:"Quốc gia nào có biểu tượng là lá phong?",answer:"Canada"},
{level:5,question:"Quốc gia nào có nhiều đảo nhất thế giới?",answer:"Sweden"},
{level:5,question:"Quốc gia nào là quê hương của điệu nhảy Tango?",answer:"Argentina"},
{level:5,question:"Quốc gia nào có nhiều núi lửa đang hoạt động nhất?",answer:"Indonesia"},
{level:5,question:"Quốc gia nào có quốc kỳ không hình chữ nhật?",answer:"Nepal"},
{level:5,question:"Quốc gia nào có diện tích lớn nhất nhưng hoàn toàn nằm ở Nam bán cầu?",answer:"Úc"},
{level:5,question:"Quốc gia nào có biệt danh Seleção Châu Âu🐐 ?",answer:"Bồ Đào Nha"},
{level:5,question:"Đỉnh núi cao nhất Việt Nam là gì?",answer:"Fansipan"},
{level:5,question:"Con sông nào dài nhất hoàn toàn nằm trên lãnh thổ Việt Nam?",answer:"Đồng Nai"},
{level:5,question:"Điểm cực Bắc của Việt Nam thuộc tỉnh nào?",answer:"Hà Giang"},
{level:5,question:"Hai quần đảo nào nằm giữa Biển Đông và có vị trí chiến lược quan trọng của Việt Nam(Không nằm trong Đường lưỡi bò)?",answer:"Hoàng Sa và Trường Sa"},
{level:5,question:"Điểm cực Nam của Việt Nam thuộc tỉnh nào?",answer:"Cà Mau"},
{level:5,question:"Điểm cực Đông của Việt Nam thuộc tỉnh nào?",answer:"Khánh Hòa"},
{level:5,question:"Điểm cực Tây của Việt Nam thuộc tỉnh nào?",answer:"Điện Biên"},
{level:5,question:"Rồng bay là Thăng Long, rồng đáp là ở đâu của Việt Nam?",answer:"Hạ Long"},
{level:5,question:"Tiền vào là Đồng Nai, tiền ra là đâu?",answer:"Đồng Tháp"},
{level:5,question:"Tỉnh nào nghe tên là biết rất giàu?",answer:"Bạc Liêu"},
{level:5,question:"Tỉnh nào nghe như một lời chúc?",answer:"Bình Phước"},
{level:5,question:"Di tích nào là nơi Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập?",answer:"Quảng trường Ba Đình"},
{level:5,question:"Di tích nào ở Phú Thọ gắn với tín ngưỡng thờ Hùng Vương?",answer:"Đền Hùng"},
{level:5,question:"Di tích nào ở Hà Nam được mệnh danh là ngôi chùa lớn nhất thế giới?",answer:"Chùa Tam Chúc"},
{level:5,question:"Khu căn cứ địa cách mạng nổi tiếng gắn với Chủ tịch Hồ Chí Minh ở Cao Bằng là gì?",answer:"Pác Bó"},
{level:5,question:"Nơi nào được gọi là địa ngục trần gian ở Việt Nam?",answer:"Côn Đảo"},
{level:5,question:"Hồ nước tự nhiên lớn nhất Việt Nam là hồ nào?",answer:"Ba Bể"},
{level:5,question:"Đèo nào nối Thừa Thiên Huế và Đà Nẵng, được mệnh danh là Thiên hạ đệ nhất hùng quan?",answer:"Hải Vân"},
{level:5,question:"Tên gọi nào gắn liền với biệt danh Hòn ngọc Viễn Đông?",answer:"Sài Gòn"},
{level:5,question:"Thành phố nào từng là kinh đô của Việt Nam dưới triều Nguyễn?",answer:"Huế"},


/* =========================================================
   VĂN HỌC
   ========================================================= */

{level:6,question:"Tôi là đại thi hào dân tộc, được UNESCO vinh danh.Tác phẩm nổi tiếng nhất của tôi kể về cuộc đời nàng Kiều.Tôi là ai?",answer:"Nguyễn Du"},
{level:6,question:"Tác phẩm nào có các nhân vật Mị và A Phủ?",answer:"Vợ chồng A Phủ"},
{level:6,question:"Ai được mệnh danh là Bà chúa thơ Nôm?",answer:"Hồ Xuân Hương"},
{level:6,question:"Tác phẩm nào được xem là bản tuyên ngôn độc lập thứ hai của dân tộc?",answer:"Bình Ngô đại cáo"},
{level:6,question:"Tác phẩm nào có nhân vật anh thanh niên làm công tác khí tượng trên đỉnh Yên Sơn?",answer:"Lặng lẽ Sa Pa"},
{level:6,question:"Nhà thơ nào được mệnh danh là Ông hoàng thơ tình?",answer:"Xuân Diệu"},
{level:6,question:"Nhà thơ nào vừa là nhà cách mạng, vừa được xem là lá cờ đầu của thơ ca cách mạng Việt Nam?",answer:"Tố Hữu"},
{level:6,question:"Tác phẩm nào kể về một cậu bé bằng gỗ thích nói dối?",answer:"Pinocchio"},
{level:6,question:"Tác phẩm nào có nhân vật Tràng, Thị và bà cụ Tứ?",answer:"Vợ nhặt"},
{level:6,question:"Tác phẩm nào kể về số phận bi thảm của người đàn bà hàng chài?",answer:"Chiếc thuyền ngoài xa"},
{level:6,question:"Tác phẩm nào mở đầu bằng cảnh một người đàn ông vừa đi vừa chửi, kết thúc bằng hình ảnh cái lò gạch cũ bỏ không?",answer:"Chí Phèo"},
{level:6,question:"Tác phẩm nào được xem là bản tuyên ngôn độc lập đầu tiên của Việt Nam?",answer:"Nam quốc sơn hà"},
{level:6,question:"Tác phẩm nào có nhân vật Vũ Nương?",answer:"Chuyện người con gái Nam Xương"},
{level:6,question:"Trong Truyện Kiều, ai là người cậy em, em có chịu lời, thay mình kết duyên với Kim Trọng",answer:"Thúy Vân"},
{level:6,question:"Tác phẩm nổi tiếng nhất của đại thi hào Nguyễn Du là?",answer:"Truyện Kiều"},
{level:6,question:"Câu thơ Sông Mã xa rồi Tây Tiến ơi! trên nằm trong tác phẩm của nhà thơ Quang Dũng ?",answer:"Tây Tiến"},
{level:6,question:"Tác phẩm nào có chi tiết một người cha dồn hết tình yêu thương vào chiếc lược nhưng chưa kịp trao tận tay con gái?",answer:"Chiếc lược ngà"},
{level:6,question:"Tập thơ nổi tiếng của Chủ tịch Hồ Chí Minh được viết trong thời gian bị giam giữ ở Trung Quốc có tên là gì?",answer:"Nhật ký trong tù"},
{level:6,question:"Câu thơ trên Sáng ra bờ suối, tối vào hang của tác phẩm nào được Bác Hồ viết ?",answer:"Tức cảnh Pác Bó"},
{level:6,question:"Ai được mệnh danh Nhà thơ của trăng ?",answer:"Hàn Mặc Tử"},
{level:6,question:"Ai được mệnh danh là Nữ hoàng thơ tình?",answer:"Xuân Quỳnh"},
{level:6,question:"Câu thơ Không có kính không phải vì xe không có kính\nBom giật bom rung kính vỡ đi rồi nằm trong tác phẩm nào?",answer:"tiểu đội xe không kính"},
{level:6,question:"Tác phẩm nổi tiếng nhất của J. K. Rowling là tác phẩm nào ?",answer:"Harry Potter"},
{level:6,question:"Nhà thơ nào có ba người con đều là nhà khoa học nổi tiếng,đồng thời là tác giả bài thơ Đoàn thuyền đánh cá?",answer:"Huy Cận"},
{level:6,question:"Nhà thơ nào được gọi là Thi sĩ chân quê?",answer:"Nguyễn Bính"},
{level:6,question:"Đoạn thơ sau trích ra từ tác phẩm nào của nhà thơ Nguyễn Khoa Điềm?\nKhi ta lớn lên Đất Nước đã có rồi\nĐất Nước có trong những cái \"ngày xửa ngày xưa...\"mẹ thường hay kể\nĐất Nước bắt đầu với miếng trầu bây giờ bà ăn",answer:"Đất Nước"},
{level:6,question:"Đoạn thơ sau trích ra từ tác phẩm nào của nhà thơ Chính Hữu?\nQuê hương anh nước mặn đồng chua\nLàng tôi nghèo đất cày lên sỏi đá\nAnh với tôi đôi người xa lạ\nTự phương trời chẳng hẹn quen nhau",answer:"Đồng chí"},
{level:6,question:"Đoạn thơ sau trích ra từ tác phẩm nào của nhà thơ Viễn Phương?\nNgày ngày mặt trời đi qua trên lăng\nThấy một mặt trời trong lăng rất đỏ\nNgày ngày dòng người đi trong thương nhớ\nKết tràng hoa dâng bảy mươi chín mùa xuân",answer:"Viếng lăng Bác"},
{level:6,question:"Đoạn thơ sau trích ra từ tác phẩm nào của nhà thơ Hàn Mặc Tử?\nSao anh không về chơi thôn Vĩ\nNhìn nắng hàng cau nắng mới lên\nVườn ai mướt quá xanh như ngọc\nLá trúc che ngang mặt chữ điền",answer:"Huế"},
{level:6,question:"Đoạn thơ sau trích ra từ tác phẩm nào của Bác Hồ?\nTiếng suối trong như tiếng hát xa\nTrăng lồng cổ thụ bóng lồng hoa\nCảnh khuya như vẽ người chưa ngủ\nChưa ngủ vì lo nỗi nước nhà",answer:"Cảnh khuya"},
{level:6,question:"Đoạn thơ sau trích ra từ tác phẩm nào của nhà thơ Hồ Xuân Hương?\nThân em vừa trắng lại vừa tròn\nBảy nổi ba chìm với nước non\nRắn nát mặc dầu tay kẻ nặn\nMà em vẫn giữ tấm lòng son",answer:"Bánh trôi nước"},
{level:6,question:"Đoạn thơ sau trích ra từ tác phẩm nào của nhà thơ Tố Hữu?\nMình về mình có nhớ ta\nTa về ta nhớ những hoa cùng người\nRừng xanh hoa chuối đỏ tươi\nĐèo cao nắng ánh dao gài thắt lưng",answer:"Việt Bắc"},
{level:6,question:"Liên và An là nhân vật trong tác phẩm nào của Thạch Lam ?",answer:"Hai đứa trẻ"},
{level:6,question:"Bài thơ nào khắc họa hình ảnh bà Tú tần tảo, chịu thương chịu khó nuôi cả gia đình của nhà thơ Trần Tế Xương?",answer:"Thương vợ"},
{level:6,question:"Nhân vật nào trong tác phẩm bán người bạn thân nhất của mình rồi khóc suốt đêm của nhà văn Nam Cao?",answer:"Lão Hạc"},
{level:6,question:"Món ăn nào của Thị Nở khiến Chí Phèo thức tỉnh phần người??",answer:"cháo hành"},
{level:6,question:"Nhân vật lão Hạc trong truyện cùng tên đã gửi ai mảnh vườn để giữ cho con trai?",answer:"Ông giáo"},
{level:6,question:"Ai là người phụ nữ nổi tiếng với câu nói \"Thà ngồi tù. Để chúng nó làm tình làm tội mãi thế, tôi không chịu được\"",answer:"Chị Dậu"},
{level:6,question:"Tác phẩm 'Người lái đò Sông Đà của nhà văn nào?",answer:"Nguyễn Tuân"},
{level:6,question:"Trong tác phẩm Vợ chồng A Phủ, loại lá nào xuất hiện nhiều lần như biểu tượng cho sự bế tắc trong cuộc đời Mị?",answer:"Lá ngón"},
{level:6,question:"Trong tác phẩm nào, người vợ theo không về làm vợ chỉ sau một câu hò đùa và 4 bát bánh đúc?",answer:"Vợ nhặt"},
{level:6,question:"Tác phẩm nào có các nhân vật: Phùng, Đẩu, người đàn bà hàng chài, thằng Phác là tác phẩm nào?",answer:"Chiếc thuyền ngoài xa"},
{level:6,question:"Nguyên nhân dẫn đến cái chết của nhân vật 'Lão Hạc'?",answer:"bả chó",explanation:"Vì sao nhân vật Lão Hạc chọn 'bả chó' mà không phải thứ khác để ra đi thanh thản\nVì Lão Hạc đã từng bán Cậu Vàng, con chó mà lão rất yêu quý. Việc dùng bả chó để kết thúc cuộc đời khiến cái chết của lão trở nên đau đớn, dữ dội, đồng thời thể hiện sự dằn vặt và bi kịch của số phận người nông dân nghèo"},
{level:6,question:"Nhà văn nào được mệnh danh là nhà văn của người nông dân Việt Nam trước Cách mạng?",answer:"Nam Cao"},
{level:6,question:"Tác Phẩm 'Vợ Nhặt' của tác giả nào?",answer:"Kim Lân"},
{level:6,question:"Nhà văn William Shakespeare là tác giả của tác phẩm kinh điển nào kể về chuyện tình của hai thiếu niên trẻ tuổi?",answer:"Romeo và Juliet",explanation:"Romeo và Juliet là một vở bi kịch nổi tiếng của William Shakespeare, kể về tình yêu giữa hai người trẻ thuộc hai dòng họ thù địch nhau\nCuối cùng Romeo tưởng Juliet đã chết nên uống thuốc độc tự tử. Khi Juliet tỉnh dậy, thấy Romeo đã chết, nàng cũng tự kết liễu đời mình"},
{level:6,question:"Nhà văn nào được mệnh danh là người mở đường tinh anh và tài năng của văn học thời kì đổi mới, tác giả của Chiếc thuyền ngoài xa?",answer:"Nguyễn Minh Châu"},
{level:6,question:"Tác giả nào viết Những ngôi sao xa xôi, nổi tiếng với các tác phẩm về tuổi trẻ trong kháng chiến chống Mỹ?",answer:"Lê Minh Khuê"},
{level:6,question:"Tác giả nào sáng tạo ra một thế giới côn trùng có tính cách như con người, với các nhân vật nổi tiếng như Dế Mèn, Dế Choắt, Dế Trũi?",answer:"Tô Hoài"},
{level:6,question:"Người phụ nữ nào trong văn học Việt Nam nổi tiếng với ;ma chê quỷ hờn' nhưng lại khiến một người đàn ông vừa đi vừa chửi rung động?",answer:"Thị Nở"},
{level:6,question:"Người con gái 'sắc sảo mặn mà', tài sắc vẹn toàn trong Truyện Kiều là ai?",answer:"Thúy Kiều"}

];

