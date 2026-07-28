require('dotenv').config();

const { MongoClient, ObjectId } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/club-management';
const dbName = process.env.MONGODB_DB || new URL(uri).pathname.replace(/^\//, '') || 'club-management';
const client = new MongoClient(uri);

const clubId = new ObjectId();
const member1Id = new ObjectId();
const member2Id = new ObjectId();
const eventId = new ObjectId();

const club = {
  _id: clubId,
  clubId: 1,
  ten: 'Câu lạc bộ Tin học',
  logo: 'uploads/sample-club-logo.png',
  linhVucHoatDong: 'Công nghệ thông tin',
  thanhVien: [member1Id, member2Id],
  ngayThanhLap: new Date('2021-09-01'),
  giaoVienPhuTrach: 'Nguyễn Văn A',
  mieuTa: 'Câu lạc bộ dành cho học sinh yêu thích lập trình và công nghệ.',
  quyDinh: 'Tham gia đầy đủ các hoạt động và giữ gìn nề nếp.',
  truongBanCLB: 'Trần Thị B',
  budget: 1500000,
  tinhTrang: 'Còn hoạt động'
};

const members = [
  {
    _id: member1Id,
    maSoHocSinh: 'HS001',
    hoTen: 'Lê Minh Tuấn',
    gioiTinh: 'Nam',
    lop: '12A1',
    toHopHocTap: 'Toán - Lý - Tin',
    thongTinLienLac: '0123456789',
    ngayThamGia: new Date('2022-01-10'),
    vaiTro: 'Thành viên',
    tinhTrang: 'Đang hoạt động',
    suKienDaThamGia: [eventId],
    club: clubId
  },
  {
    _id: member2Id,
    maSoHocSinh: 'HS002',
    hoTen: 'Phạm Thị Lan',
    gioiTinh: 'Nữ',
    lop: '11B3',
    toHopHocTap: 'Toán - Hóa - Sinh',
    thongTinLienLac: '0987654321',
    ngayThamGia: new Date('2022-03-15'),
    vaiTro: 'Phó Ban',
    tinhTrang: 'Đang hoạt động',
    suKienDaThamGia: [eventId],
    club: clubId
  }
];

const event = {
  _id: eventId,
  ten: 'Hội thảo STEM',
  ngayToChuc: new Date('2024-05-20'),
  thoiGianBatDau: '08:30',
  thoiGianKetThuc: '11:30',
  diaDiem: 'Phòng Hội thảo 1',
  noiDung: 'Chia sẻ kiến thức về lập trình và robot.',
  nguoiPhuTrach: 'Nguyễn Văn A',
  khachMoi: ['Trần Văn C', 'Nguyễn Thị D'],
  club: clubId,
  trangThai: 'daDuyet',
  lyDoTuChoi: ''
};

const budget = {
  _id: 1,
  ten: 'Ngân sách tháng 5',
  khoanChiTieu: 500000,
  nguonThu: 2000000,
  ngay: new Date('2024-05-01'),
  thanhVienChiuTrachNhiem: 'Trần Thị B',
  noiDung: 'Mua vật tư tổ chức sự kiện',
  club: clubId
};

const budgetAllocation = {
  _id: 1,
  club: clubId,
  amount: 500000,
  purpose: 'Mua quà và trang thiết bị',
  allocationDate: new Date('2024-05-02')
};

const prize = {
  _id: 1,
  tenGiaiThuong: 'Giải Nhất Hackathon',
  ngayDatGiai: new Date('2024-04-10'),
  loaiGiai: 'Cuộc thi lập trình',
  thanhVienDatGiai: member1Id,
  club: clubId,
  ghiChu: 'Đạt giải nhờ ý tưởng xuất sắc.',
  anhDatGiai: 'uploads/sample-prize.png'
};

const report = {
  tenBaoCao: 'Báo cáo hoạt động tháng 5',
  ngayBaoCao: new Date('2024-05-31'),
  nhanSuPhuTrach: 'Nguyễn Văn A',
  danhSachSuKien: [
    {
      tenSuKien: 'Hội thảo STEM',
      nguoiPhuTrach: 'Nguyễn Văn A',
      ngayToChuc: new Date('2024-05-20')
    }
  ],
  danhSachGiai: [
    {
      tenGiai: 'Giải Nhất Hackathon',
      nguoiNhanGiai: 'Lê Minh Tuấn',
      ngayNhanGiai: new Date('2024-04-10')
    }
  ],
  tongNganSachChiTieu: 500000,
  tongThu: 2000000,
  ketQuaDatDuoc: 'Tổ chức thành công hội thảo và đạt giải Hackathon.',
  club: clubId
};

const account = {
  userId: 'admin001',
  name: 'Quản trị viên',
  email: 'admin@example.com',
  password: '$2b$10$Vb9buF7eK5DZNa4YJZdtUuJd2X7I3FzPu0G1fqFh6hoFhUeoY2hCW',
  role: 'manager'
};

const counters = [
  { _id: 'clubId', seq: 1 },
  { _id: 'budgetId', seq: 1 },
  { _id: 'budgetAllocationId', seq: 1 },
  { _id: 'prizeId', seq: 1 }
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

  await db.collection('clubs').insertOne(club);
  await db.collection('members').insertMany(members);
  await db.collection('events').insertOne(event);
  await db.collection('budgets').insertOne(budget);
  await db.collection('budgetallocations').insertOne(budgetAllocation);
  await db.collection('prizes').insertOne(prize);
  await db.collection('reports').insertOne(report);
  await db.collection('accounts').insertOne(account);
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
