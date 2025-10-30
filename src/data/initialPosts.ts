import { Post } from '../types';

/** Dữ liệu  bài viết */
const initialPosts: Post[] = [
  {
    id: 1,
    title: 'OpenAI triển khai công cụ tạo video Sora 2 tại Việt Nam',
    author: 'Khoa học công nghệ ',
    thumbnail: 'https://i1-vnexpress.vnecdn.net/2025/10/30/20251030-123305-1761802994-176-2257-4348-1761803158.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=POM37UMNINEk0HVGxNHq-A',
    content:
    "Sáng 30/10, OpenAI cho biết Việt Nam là một trong những thị trường châu Á đầu tiên được triển khai Sora 2, cùng với Thái Lan và đảo Đài Loan.",
    category: 'Công nghệ',
    date: '30/10/2025',
  },
  {
    id: 2,
    title: 'Kinh nghiệm du lịch Đà Lạt',
    author: 'Trần Thị B',
    thumbnail: 'https://picsum.photos/seed/dalat/400/250',
    content:
      'Đà Lạt là điểm đến lãng mạn với khí hậu mát mẻ quanh năm. Bài viết này chia sẻ lịch trình 3 ngày, các quán cà phê đẹp và địa điểm sống ảo.',
    category: 'Du lịch',
    date: '05/09/2025',
  },
  {
    id: 3,
    title: 'Cách nấu sữa hạt tại nhà',
    author: 'Nguyễn Thị C',
    thumbnail: 'https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/n%E1%BA%A5u%20%C4%83n/cach-lam-sua-hat-sen.jpg',
    content:
      'Sữa hạt là món quà vô giá từ thiên nhiên, chúng không chỉ thơm ngon mà còn rất bổ dưỡng. Và việc làm ra những ly sữa hạt sạch sẽ, béo thơm cho bé tại nhà cũng rất đơn giản. Hãy cùng vào bếp với Nguyễn Kim bằng các cách làm sữa hạt đúng chuẩn, không bị tách nước.',
    category: 'Ẩm thực',
    date: '22/10/2025',
  },
  {
    id: 4,
    title: '15 thói quen tốt cho sức khỏe',
    author: 'Bùi Thị N',
    thumbnail: 'https://www.vinmec.com/static/uploads/small_20220208_181510_542994_loi_song_lanh_manh_max_1800x1800_jpg_dd478e9a9d.jpg',
    content:
      'Việc thiết lập và tuân thủ theo những thói quen sinh hoạt lành mạnh có thể đem lại cho bạn nhiều lợi ích sức khỏe tuyệt vời, chẳng hạn như ngăn ngừa bệnh tim, tiểu đường, cao huyết áp, hỗ trợ trí não, cải thiện tinh thần,... Dưới đây là 15 thói quen thực sự có lợi cho các khía cạnh sức khỏe mà bạn nên thực hiện hàng ngày.',
    category: 'Đời sống',
    date: '01/06/2025',
  },
  {
    id: 5,
    title: 'Tổng thống Trump đạt thỏa thuận với Trung Quốc về loạt vấn đề quan trọng',
    author: 'Thành Đạt',
    thumbnail: 'https://cdnphoto.dantri.com.vn/cq35dL8F9H6kRMgoAEY4s4cKlzk=/thumb_w/1020/2025/10/30/trumptaphanquocafp-1jpg-1761794953976.jpg',
    content:
      'Trao đổi với các phóng viên sau cuộc gặp kéo dài 1 giờ 40 phút với Chủ tịch Trung Quốc Tập Cận Bình tại Hàn Quốc hôm nay 30/10, Tổng thống Mỹ Donald Trump cho biết đây là cuộc gặp “tuyệt vời” và "một loạt quyết định quan trọng" đã được đưa ra.',
    category: 'Khác',
    date: '30/10/2025',
  },
  {
    id: 6,
    title:'Nâng mức phạt hành vi vượt đèn đỏ từ 3-6 lần: Cục Cảnh sát giao thông nói gì?',
    author: "Chính sách và đời sống ",
    thumbnail:"https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2025/1/1/vuot-den-do-1728484216634-4440-303-1735729735543210735329.jpg",
    content:"Mức phạt đối với lỗi không chấp hành hiệu lệnh của đèn tín hiệu giao thông (vượt đèn đỏ) theo quy định của Nghị định 168/2024/NĐ-CP sẽ tăng lên gấp từ 3-6 lần so với quy định trước đây.",
    category: "Đời sống",
    date:'05/01/2025',

  },
];

export default initialPosts;
