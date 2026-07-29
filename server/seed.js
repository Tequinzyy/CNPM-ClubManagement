require('dotenv').config();

const { MongoClient, ObjectId } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/QuanLyCLB';
const dbName = process.env.MONGODB_DB || new URL(uri).pathname.replace(/^\//, '') || 'QuanLyCLB';
const client = new MongoClient(uri);

const clubs = [
  {
    _id: new ObjectId('67160c5ad55fc5f816de7644'),
    ten: 'Câu lạc bộ Tin học',
    logo: '/uploads/d034915e14df6c0d63b832c64483d6f6',
    linhVucHoatDong: 'Công Nghệ',
    thanhVien: [
      new ObjectId('6726cfd133e8fc5524a94e5c'),
      new ObjectId('67219e26f99a38a0a023c352'),
      new ObjectId('673c5ce77f6aae48b37a8561'),
      new ObjectId('685505fabd7d3fedefc63dc3'),
      new ObjectId('68857aa35ff6acacfac7f4a2')
    ],
    ngayThanhLap: new Date('2024-10-21T00:00:00.000Z'),
    giaoVienPhuTrach: 'Thầy Nguyễn Văn A',
    mieuTa: 'Câu lạc bộ tin học best là nơi dành cho các bạn đam mê công nghệ và lập trình. Tại đây, thành viên có cơ hội học hỏi về các ngôn ngữ lập trình như Python, Java, C++,... và tham gia vào các dự án thực tế, từ đó rèn luyện kỹ năng lập trình và làm việc nhóm.',
    quyDinh: 'Phải có mặt vào cuối ngày đấy nha',
    clubId: 20,
    __v: 0,
    truongBanCLB: 'HS123456',
    budget: 5914000,
    tinhTrang: 'Còn hoạt động'
  },
  {
    _id: new ObjectId('67161b6676f6c57d6dcbabcd'),
    ten: 'CLB Tình nguyện',
    logo: '/uploads/a0a8243e0f0496b727d58ded2a2ff8ae',
    linhVucHoatDong: 'Tình nguyện',
    thanhVien: [
      new ObjectId('6716253dc807c5932cd230fa'),
      new ObjectId('67270de0affce867afb816d8')
    ],
    ngayThanhLap: new Date('2020-02-02T00:00:00.000Z'),
    giaoVienPhuTrach: 'Cô Trần Thị T',
    mieuTa: 'Câu lạc bộ Tình nguyện là nơi các bạn trẻ có thể đóng góp cho cộng đồng thông qua các hoạt động thiện nguyện ý nghĩa. Thành viên sẽ có cơ hội tham gia vào các chương trình như hỗ trợ người nghèo, bảo vệ môi trường, thăm hỏi trẻ em khó khăn, giúp đỡ người già neo đơn. Đây là môi trường để các bạn học cách sẻ chia, trách nhiệm xã hội và rèn luyện tinh thần đoàn kết, làm việc nhóm',
    quyDinh: 'Tham gia vào các dịp cuối tuần',
    truongBanCLB: 'HS123463',
    clubId: 21,
    __v: 0,
    tinhTrang: 'Còn hoạt động',
    budget: 138248047
  },
  {
    _id: new ObjectId('671cb7f16c38be6f2e37fe91'),
    ten: 'CLB Nhiếp ảnh',
    linhVucHoatDong: 'Nhiếp ảnh',
    thanhVien: [],
    ngayThanhLap: new Date('2021-08-14T00:00:00.000Z'),
    giaoVienPhuTrach: 'Lê Văn F',
    mieuTa: 'Câu lạc bộ Nhiếp ảnh là nơi dành cho các bạn yêu thích nghệ thuật chụp ảnh và sáng tạo qua ống kính. Thành viên sẽ được học về các kỹ thuật chụp ảnh, ánh sáng, chỉnh sửa hình ảnh cũng như tham gia vào các chuyến đi thực tế để chụp phong cảnh, chân dung, và các sự kiện. Đây là cơ hội để các bạn phát triển óc quan sát, khả năng thẩm mỹ và kỹ năng nhiếp ảnh chuyên nghiệp.',
    quyDinh: 'Sinh hoạt vào chủ nhật hàng tuần',
    truongBanCLB: 'HS654321',
    clubId: 24,
    __v: 0,
    logo: '/uploads/9e9da4cb7f84882899c4c6d481adfe95',
    tinhTrang: 'Còn hoạt động'
  },
  {
    _id: new ObjectId('671cb8186c38be6f2e37fe97'),
    ten: 'CLB Anh ngữ',
    linhVucHoatDong: 'Ngôn ngữ',
    thanhVien: [],
    ngayThanhLap: new Date('2021-09-17T00:00:00.000Z'),
    giaoVienPhuTrach: 'Đoàn Văn J',
    mieuTa: 'Câu lạc bộ Anh ngữ là môi trường tuyệt vời để các bạn học sinh rèn luyện kỹ năng tiếng Anh của mình. Tại đây, thành viên được tham gia các buổi học về ngữ pháp, phát âm, và luyện nói với các giáo viên và tình nguyện viên nước ngoài. Câu lạc bộ cũng tổ chức các hoạt động như thuyết trình, tranh biện, và giao lưu văn hóa, giúp các bạn tự tin hơn khi giao tiếp bằng tiếng Anh.',
    quyDinh: 'Sinh hoạt vào thứ 3 hàng tuần',
    truongBanCLB: 'HS846182',
    clubId: 26,
    __v: 0,
    logo: '/uploads/0e22b19bee8bd85f3f55da324334566f',
    tinhTrang: 'Còn hoạt động',
    budget: 12435444
  },
  {
    _id: new ObjectId('671cb8326c38be6f2e37fe9d'),
    ten: 'CLB Hài kịch',
    linhVucHoatDong: 'Nghệ thuật',
    thanhVien: [],
    ngayThanhLap: new Date('2022-07-22T00:00:00.000Z'),
    giaoVienPhuTrach: 'Vũ Văn Q',
    mieuTa: 'Câu lạc bộ Hài kịch là nơi các bạn trẻ có niềm đam mê với nghệ thuật diễn xuất, đặc biệt là hài kịch, có thể thỏa sức sáng tạo và thể hiện bản thân. Thành viên sẽ được học cách xây dựng kịch bản, phát triển phong cách biểu diễn và cách tương tác với khán giả. Các buổi biểu diễn hài kịch là cơ hội để các bạn làm quen với sân khấu và tạo niềm vui cho mọi người xung quanh.',
    quyDinh: 'Tham gia mỗi thứ 5 và thứ 7',
    truongBanCLB: 'HS123457',
    clubId: 28,
    __v: 0,
    logo: '/uploads/8e9df14ec1c0ddbec3bc8f7f8ac0c774',
    tinhTrang: 'Còn hoạt động'
  },
  {
    _id: new ObjectId('671cb83c6c38be6f2e37fea3'),
    ten: 'CLB Thể thao',
    linhVucHoatDong: 'Thể thao',
    thanhVien: [],
    ngayThanhLap: new Date('2020-10-30T00:00:00.000Z'),
    giaoVienPhuTrach: 'Hoàng Văn R',
    mieuTa: 'Câu lạc bộ Thể thao là nơi dành cho các bạn yêu thích vận động và các hoạt động thể thao. Tại đây, thành viên có thể tham gia vào các môn thể thao như bóng đá, bóng rổ, cầu lông, và nhiều bộ môn khác. Câu lạc bộ thường tổ chức các giải đấu và hoạt động rèn luyện sức khỏe, giúp các bạn nâng cao thể lực, tăng cường sự đoàn kết và tinh thần thi đấu.',
    quyDinh: 'Tham gia vào thứ 2 và thứ 5 hàng tuần',
    truongBanCLB: 'HS037932',
    clubId: 30,
    __v: 0,
    logo: '/uploads/5331afc99bc78ace377df826d791cdbd',
    tinhTrang: 'Còn hoạt động'
  },
  {
    _id: new ObjectId('673c5b8f7f6aae48b37a83c5'),
    ten: 'CLB Văn hoá Nhật Bản',
    logo: '/uploads/adf0e1744e88ed5f49b653ff1b9b10b8',
    linhVucHoatDong: 'Văn hoá Nhật Bản',
    thanhVien: [],
    ngayThanhLap: new Date('2024-11-18T00:00:00.000Z'),
    giaoVienPhuTrach: 'Nguyễn Trần A',
    mieuTa: 'Câu lạc bộ Nhật Bản là nơi dành cho các bạn yêu thích văn hóa, ngôn ngữ và con người đất nước Nhật Bản. Tại đây, thành viên có cơ hội học tiếng Nhật, tìm hiểu về các phong tục, lễ hội, ẩm thực và nghệ thuật truyền thống như trà đạo, origami, hay cắm hoa ikebana. Ngoài ra, câu lạc bộ còn tổ chức các buổi giao lưu văn hóa, hội thảo và hoạt động ngoại khóa giúp rèn luyện kỹ năng ngôn ngữ, làm quen với bạn bè mới và hiểu sâu hơn về đất nước mặt trời mọc.',
    quyDinh: 'Phải tham gia vào thứ 2 hàng tuần',
    truongBanCLB: 'HS001122',
    budget: 0,
    tinhTrang: 'Còn hoạt động',
    clubId: 34,
    __v: 0
  }
];

const members = [
  {
    _id: new ObjectId('67219e26f99a38a0a023c352'),
    maSoHocSinh: 'HS551476',
    hoTen: 'Lê Nguyễn Hoàng Thanh',
    gioiTinh: 'Nam',
    lop: '12A9a9',
    toHopHocTap: 'KHTNa',
    thongTinLienLac: 'lnht@gmail.com',
    ngayThamGia: new Date('2025-07-23T00:00:00.000Z'),
    vaiTro: 'Thành viên',
    tinhTrang: 'Đang hoạt động',
    suKienDaThamGia: [],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  },
  {
    _id: new ObjectId('67270de0affce867afb816d8'),
    maSoHocSinh: '22dh110211',
    hoTen: 'Lê Nguyễn Hoàng Thanh',
    gioiTinh: 'Nam',
    lop: 'PM05',
    toHopHocTap: 'CNTT',
    thongTinLienLac: '093715324',
    ngayThamGia: new Date('2024-11-03T05:45:04.619Z'),
    vaiTro: 'Thành viên',
    tinhTrang: 'Đang hoạt động',
    suKienDaThamGia: [],
    club: new ObjectId('67161b6676f6c57d6dcbabcd'),
    __v: 0
  },
  {
    _id: new ObjectId('673c5ce77f6aae48b37a8561'),
    maSoHocSinh: 'HS114457',
    hoTen: 'Nguyễn Phi Quốc Bảo',
    gioiTinh: 'Nam',
    lop: '12A9',
    toHopHocTap: 'KHTN',
    thongTinLienLac: 'tranhongphat1@gmail.com',
    ngayThamGia: new Date('2024-11-10T00:00:00.000Z'),
    vaiTro: 'Phó câu lạc bộ',
    tinhTrang: 'Đang hoạt động',
    suKienDaThamGia: [],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  },
  {
    _id: new ObjectId('685505fabd7d3fedefc63dc3'),
    maSoHocSinh: 'HS230104',
    hoTen: 'The Pink Cat',
    gioiTinh: 'Nam',
    lop: '12A9',
    toHopHocTap: 'K9',
    thongTinLienLac: 'asdsaphat@gmail.com',
    ngayThamGia: new Date('2025-06-20T00:00:00.000Z'),
    vaiTro: 'Trưởng câu lạc bộ',
    tinhTrang: 'Đang hoạt động',
    suKienDaThamGia: [],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  },
  {
    _id: new ObjectId('68857aa35ff6acacfac7f4a2'),
    maSoHocSinh: 'HS000004',
    hoTen: 'Lê Nguyễn Hoàng Tuần',
    gioiTinh: 'Nam',
    lop: '12A5',
    toHopHocTap: 'KHTN',
    thongTinLienLac: 'tuan@gmail.com',
    ngayThamGia: new Date('2025-07-27T00:00:00.000Z'),
    vaiTro: 'Thành viên',
    tinhTrang: 'Đang hoạt động',
    suKienDaThamGia: [],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  }
];

const events = [
  {
    _id: new ObjectId('673cacb14215ab8ad9bc441c'),
    ten: 'Giao lưu cùng doanh nghiệp',
    ngayToChuc: new Date('2024-11-25T00:00:00.000Z'),
    thoiGianBatDau: '09:00',
    thoiGianKetThuc: '12:00',
    diaDiem: 'Hội trường lầu 8',
    noiDung: 'Giao lưu cùng các bạn học sinh, truyền tải kinh nghiệm học tập giúp các bạn phát triển',
    nguoiPhuTrach: 'Trần Hồng Phát',
    khachMoi: ['Anh A ( HR công ty X )', 'Chị H ( HR công ty Y )'],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    trangThai: 'daDuyet',
    __v: 0,
    lyDoTuChoi: 'Địa điểm không hợp lệ'
  },
  {
    _id: new ObjectId('673d3c9bfa6e5fe1d78f474c'),
    ten: 'Ngày thi vấn đáp chúc mừng 21/11',
    ngayToChuc: new Date('2025-06-15T00:00:00.000Z'),
    thoiGianBatDau: '07:00',
    thoiGianKetThuc: '12:00',
    diaDiem: 'Hội trường lầu 5 SVH',
    noiDung: 'Ngày thi vấn đáp chúc mừng 21/11 nhằm tổ chức chúc mừng ngày giáo viên Việt Nam (20/11)',
    nguoiPhuTrach: 'Trần Hồng Phát',
    khachMoi: [],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    trangThai: 'daDuyet',
    __v: 0
  },
  {
    _id: new ObjectId('673d3f03fa6e5fe1d78f4897'),
    ten: 'Lễ hội mùa đông 2024',
    ngayToChuc: new Date('2024-12-24T00:00:00.000Z'),
    thoiGianBatDau: '06:00',
    thoiGianKetThuc: '12:00',
    diaDiem: 'Sảnh SVH',
    noiDung: 'Lễ hội mùa đông 2024 nhân dịp giáng sinh tổ chức 1 sự kiện mang tính gắn bó đoàn kết',
    nguoiPhuTrach: 'Trần Hồng Phát',
    khachMoi: ['Ca sĩ Thanh'],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    trangThai: 'tuChoi',
    __v: 0,
    lyDoTuChoi: 'Tôi muốn huỷ sự kiện này'
  },
  {
    _id: new ObjectId('686e2ba1a28a3f94c0148276'),
    ten: 'IT Day',
    ngayToChuc: new Date('2025-07-10T00:00:00.000Z'),
    thoiGianBatDau: '08:00',
    thoiGianKetThuc: '15:00',
    diaDiem: 'su van hanh',
    noiDung: 'estdgdsgdsgs',
    nguoiPhuTrach: 'Trần Hồng Phátt',
    khachMoi: ['fa'],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    trangThai: 'daDuyet',
    __v: 0
  },
  {
    _id: new ObjectId('686e9377a4498cb7086f1645'),
    ten: 'Ngày hội việc làm',
    ngayToChuc: new Date('2025-07-18T00:00:00.000Z'),
    thoiGianBatDau: '08:00',
    thoiGianKetThuc: '16:00',
    diaDiem: 'co so su van hanh va hoc mon',
    noiDung: 'su kien intern cho IT',
    nguoiPhuTrach: 'Nguyễn Phi Quốc Bảo',
    khachMoi: ['FSoft', 'Zalo', 'Gearvn'],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    trangThai: 'daDuyet',
    __v: 0
  },
  {
    _id: new ObjectId('688594a95ff6acacfac7f5de'),
    ten: 'Festival 2025',
    ngayToChuc: new Date('2025-07-28T00:00:00.000Z'),
    thoiGianBatDau: '08:00',
    thoiGianKetThuc: '22:00',
    diaDiem: 'Hội trường A',
    noiDung: 'Festivity',
    nguoiPhuTrach: 'Lê Nguyễn Hoàng Thanh',
    khachMoi: [],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    trangThai: 'choDuyet',
    __v: 0
  },
  {
    _id: new ObjectId('688abfcec41071621fce91fd'),
    ten: 'Khoi nghiep cung Huflit',
    ngayToChuc: new Date('2025-08-31T00:00:00.000Z'),
    thoiGianBatDau: '08:00',
    thoiGianKetThuc: '16:00',
    diaDiem: 'Co so hoc mon',
    noiDung: 'Su kien khoi nghiep huflit',
    nguoiPhuTrach: 'Nguyễn Phi Quốc Bảo',
    khachMoi: ['Doanh nghiep SXT'],
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    trangThai: 'daDuyet',
    __v: 0
  }
];

const budgets = [
  {
    _id: 63,
    ten: 'Trip to Japan',
    khoanChiTieu: 400000,
    nguonThu: 250000,
    ngay: new Date('2025-07-27T00:00:00.000Z'),
    thanhVienChiuTrachNhiem: 'HS551476',
    noiDung: 'Learning new technologies over at Japan.',
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  },
  {
    _id: 65,
    ten: 'Exhibition 2025',
    khoanChiTieu: 5000000,
    nguonThu: 10000000,
    ngay: new Date('2025-07-01T00:00:00.000Z'),
    thanhVienChiuTrachNhiem: 'HS114457',
    noiDung: 'Show off the technologies we know.',
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  },
  {
    _id: 67,
    ten: 'Exhibition 2025',
    khoanChiTieu: 5000000,
    nguonThu: 10000000,
    ngay: new Date('2025-07-01T00:00:00.000Z'),
    thanhVienChiuTrachNhiem: 'HS114457',
    noiDung: 'Show off the technologies we know.',
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  }
];

const budgetAllocations = [
  {
    _id: 25,
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    amount: 2500000,
    purpose: 'Tiền dành cho sự kiện\n',
    allocationDate: new Date('2025-07-27T00:00:00.000Z'),
    __v: 0
  },
  {
    _id: 26,
    club: new ObjectId('67161b6676f6c57d6dcbabcd'),
    amount: 2500000,
    purpose: 'Tiền dành cho charity.',
    allocationDate: new Date('2025-07-10T00:00:00.000Z'),
    __v: 0
  }
];

const prizes = [
  {
    _id: 40,
    tenGiaiThuong: 'Giải thưởng E-Sports',
    ngayDatGiai: new Date('2025-07-27T00:00:00.000Z'),
    loaiGiai: 'Giải nhất',
    thanhVienDatGiai: '67219e26f99a38a0a023c352',
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    ghiChu: 'Best gamer of the month',
    anhDatGiai: null,
    createdAt: new Date('2025-07-27T01:07:56.803Z'),
    updatedAt: new Date('2025-07-27T01:07:56.803Z'),
    __v: 0
  },
  {
    _id: 41,
    tenGiaiThuong: 'Giải thưởng 2025',
    ngayDatGiai: new Date('2025-07-27T00:00:00.000Z'),
    loaiGiai: 'Giải khuyến khích',
    thanhVienDatGiai: '685505fabd7d3fedefc63dc3',
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    ghiChu: '',
    anhDatGiai: null,
    createdAt: new Date('2025-07-27T01:08:33.243Z'),
    updatedAt: new Date('2025-07-27T01:08:33.243Z'),
    __v: 0
  }
];

const reports = [
  {
    _id: new ObjectId('68857d0d5ff6acacfac7f51d'),
    tenBaoCao: 'Báo cáo tháng 6',
    ngayBaoCao: new Date('2025-07-27T08:12:43.557Z'),
    nhanSuPhuTrach: 'Lê Nguyễn Hoàng Thanh',
    danhSachSuKien: [
      {
        tenSuKien: 'Ngay hoi nghi viec',
        nguoiPhuTrach: 'Nguyễn Phi Quốc Bảo',
        ngayToChuc: new Date('2025-07-18T00:00:00.000Z'),
        _id: new ObjectId('68857d0d5ff6acacfac7f51e')
      },
      {
        tenSuKien: 'Ngày thi vấn đáp chúc mừng 21/11',
        nguoiPhuTrach: 'Trần Hồng Phát',
        ngayToChuc: new Date('2025-06-15T00:00:00.000Z'),
        _id: new ObjectId('68857d0d5ff6acacfac7f51f')
      }
    ],
    danhSachGiai: [
      {
        tenGiai: 'Giải thưởng E-Sports',
        nguoiNhanGiai: '67219e26f99a38a0a023c352',
        ngayNhanGiai: new Date('2025-07-27T00:00:00.000Z'),
        _id: new ObjectId('68857d0d5ff6acacfac7f520')
      },
      {
        tenGiai: 'Giải thưởng 2025',
        nguoiNhanGiai: '685505fabd7d3fedefc63dc3',
        ngayNhanGiai: new Date('2025-07-27T00:00:00.000Z'),
        _id: new ObjectId('68857d0d5ff6acacfac7f521')
      }
    ],
    tongNganSachChiTieu: 500000,
    tongThu: 20000000,
    ketQuaDatDuoc: 'Đã tiết kiệm được tiền và trải nghiệm được nhiều thứ.',
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  },
  {
    _id: new ObjectId('68857d3d5ff6acacfac7f52d'),
    tenBaoCao: 'Báo cáo tháng 7',
    ngayBaoCao: new Date('2025-07-27T08:13:32.243Z'),
    nhanSuPhuTrach: 'Nguyễn Phi Quốc Bảo',
    danhSachSuKien: [],
    danhSachGiai: [],
    tongNganSachChiTieu: 1500000,
    tongThu: 500000,
    ketQuaDatDuoc: 'Một tháng rất lỗ.',
    club: new ObjectId('67160c5ad55fc5f816de7644'),
    __v: 0
  }
];

const accounts = [
  {
    _id: new ObjectId('673c5b0f7f6aae48b37a839c'),
    userId: 'HS001122',
    name: 'Trần Cam Sành',
    email: 'HS001122@thpt.edu.vn',
    password: '$2b$10$itZtUyUU5qmDQe5/RL7t4.Iw2cnkaTzPFqB.CB1DlufpPCUbGCBNq',
    role: 'student',
    __v: 0
  },
  {
    _id: new ObjectId('673ca94b4215ab8ad9bc42ed'),
    userId: 'HS654321',
    name: 'Nguyễn Văn T',
    email: 'HS654321@thpt.edu.vn',
    password: '$2b$10$/IFspS/XKd4a9gU3BM3v1.TYrlWDtfSgCMJ0XvDY0T6ZpY.M4fdgG',
    role: 'student',
    __v: 0
  },
  {
    _id: new ObjectId('673ca9bb4215ab8ad9bc42fc'),
    userId: 'HS846182',
    name: 'Trần Lê A',
    email: 'HS846182@thpt.edu.vn',
    password: '$2b$10$NjyxUNMSqd14dW7thl512ugFL4ICf1nQXTtg/dh9JmTov.7TBfYXq',
    role: 'student',
    __v: 0
  },
  {
    _id: new ObjectId('673cb24acbe8009db752b2c5'),
    userId: 'HS037932',
    name: 'Trần C',
    email: 'HS037932@thpt.edu.vn',
    password: '$2b$10$IO6KNXfKddAp6QwajfAy4ubdtnRDp58wMi4hz2oiTBH9je4jpK11u',
    role: 'student',
    __v: 0
  },
  {
    _id: new ObjectId('684c43838fc127eb64538004'),
    userId: 'PS123456',
    name: 'Nguyễn Trần Văn A',
    email: 'PS123456@thpt.edu.vn',
    password: '$2b$10$fuENRCyu0crEqIRsLrd/K.hDl6xxxxnRxfs/mJBy/954abZ69pZKa',
    role: 'manager',
    __v: 0
  },
  {
    _id: new ObjectId('686e0f567c3eeb77cdf8e664'),
    userId: 'HS123456',
    name: 'Nguyễn Văn A',
    email: 'HS123456@thpt.edu.vn',
    password: '$2b$10$ICuKmXlmW/ipOf5rYw4sS.HlbuZMVKBtLRHDrTQ145nstuaQPRJwi',
    role: 'student',
    __v: 0
  },
  {
    _id: new ObjectId('686f4c814f2f836c669b5ccd'),
    userId: 'HS123463',
    name: 'Nguyễn Văn B',
    email: 'HS123463@thpt.edu.vn',
    password: '$2b$10$klPe505CXJDRvb7si/Cmze312iTmoema6f4Zh4qezQnSGcJ.0nLQC',
    role: 'student',
    __v: 0
  },
  {
    _id: new ObjectId('68708bd65610a1563c8550f6'),
    userId: 'asdsaphat',
    name: 'The Pink Cat',
    email: 'asdsaphat@edu.vn',
    password: '$2b$10$qQBaUnQWzhPDtwVIIIUAueZdcHIqYGakEU2dYo/oVkmVt88PlHUNi',
    role: 'manager',
    __v: 0
  }
];

const counters = [
  { _id: 'eventId', __v: 0, seq: 3 },
  { _id: 'budgetId', __v: 0, seq: 67 },
  { _id: 'prizeId', seq: 41 },
  { _id: 'reportId', seq: 6 },
  { _id: 'clubId', __v: 0, seq: 42 },
  { _id: 'budgetAllocationId', __v: 0, seq: 26 }
];

async function seed() {
  await client.connect();
  const db = client.db(dbName);

  console.log('Connected to', uri);

  const collections = [
    'clubs',
    'members',
    'events',
    'budgets',
    'budgetallocations',
    'prizes',
    'reports',
    'accounts',
    'counters'
  ];

  for (const name of collections) {
    const exists = await db.listCollections({ name }).hasNext();
    if (exists) {
      console.log(`Dropping existing collection: ${name}`);
      await db.collection(name).drop();
    }
  }

  await db.collection('clubs').insertMany(clubs);
  await db.collection('members').insertMany(members);
  await db.collection('events').insertMany(events);
  await db.collection('budgets').insertMany(budgets);
  await db.collection('budgetallocations').insertMany(budgetAllocations);
  await db.collection('prizes').insertMany(prizes);
  await db.collection('reports').insertMany(reports);
  await db.collection('accounts').insertMany(accounts);
  await db.collection('counters').insertMany(counters);

  console.log('Seed data inserted successfully.');
}

seed()
  .catch((error) => {
    console.error('Seed error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await client.close();
  });
