// ProductData.js
const productAll = [
    {
        id: 1,
        title: 'Seiko',
        name: 'Đồng hồ Seiko 5 Sports',
        description: 'Seiko 5 Sports 55th Anniversary Limited Edition SRPK17K1 – Nam – Kính Cứng – Automatic (Cơ Tự Động) – Mặt Số 39.5mm, Trữ Cót 41 Giờ',
        url: '#',
        price: '13.170.000',
        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/SRPK17K1.jpg'
    },
    {
        id: 2,
        title: 'Seiko',
        name: 'Đồng hồ Seiko 5 Field Sports',
        description: 'Seiko 5 Field Sports Style SRPH29K1 – Nam – Automatic – Mặt số 39.4mm, chống nước 10ATM, bộ máy In-House',
        url: '#',
        price: '9.000.000',
        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/SRPH29K1.jpg'
    },
    {
        id: 3,
        title: 'Seiko',
        name: 'Seiko SRPD57K1',
        description: 'Seiko SRPD57K1 – Nam – Automatic (Tự Động) – Dây Kim Loại',
        url: '#',

        price: '9.330.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/35_SRPD57K1.jpg'
    },{
        id: 4,
        title: 'Seiko',
        name: 'Seiko Presage Cocktail Grasshopper SSA441J1 ',
        description: 'Seiko Presage Cocktail Grasshopper SSA441J1 – Nam – Automatic (Tự Động) – Mặt Số 40.5mm, Trữ Cót 41 Giờ, Kính Hardlex',
        url: '#',

        price: '13.750.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/SSA441J1.jpg'
    },{
        id: 5,
        title: 'Seiko',
        name: 'Seiko Presage Cocktail Blue Moon SSA405J1',
        description: 'Seiko Presage Cocktail Blue Moon SSA405J1 – Nam – Automatic (Tự Động) – Mặt Số 40.5mm, Trữ cót đến 40 giờ, Kính Cứng',
        url: '#',

        price: '13.750.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2020/08/SSA405J1-SEIKO.jpg'
    },{
        id: 6,
        title: 'Seiko',
        name: 'Seiko Prospex SSC911P1',
        description: 'Seiko Prospex SSC911P1 – Nam – Kính Sapphire – Solar (Năng Lượng Ánh Sáng) – Power Reserve, Chronograph',
        url: '#',

        price: '20.500.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/SSC911P1.jpg'
    },
    {
        id: 7,
        title: 'KOI',
        name: 'KOI Noble K002.103.641.50.03.04',
        description: 'KOI Noble K002.103.641.50.03.04 – Nữ – Kính Sapphire – Quartz (Pin) – Viền khía – Dây demi mạ vàng – Đính kim cương nhân tạo – Mặt số tráng men',
        url: '#',

        price: '5.140.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/KOI-nu-vien-khia.jpg'
    },
    {
        id: 8,
        title: 'KOI',
        name: 'KOI Noble K002.103.641.03.13.04',
        description: 'KOI Noble K002.103.641.03.13.04 – Nữ – Kính Sapphire – Quartz (Pin) – Nền số xà cừ lấp lánh – Đính kim cương nhân tạo – Dây kim loại bạc',
        url: '#',

        price: '5.480.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/2-1.jpg'
    },
    {
        id: 9,
        title: 'KOI',
        name: 'KOI Noble K002.103.641.51.11.04',
        description: 'KOI Noble K002.103.641.51.11.04 – Nữ – Kính Sapphire – Quartz (Pin) – Nền số xà cừ – Đính kim cương nhân tạo – Dây demi mạ vàng hồng',
        url: '#',

        price: '6.240.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/KOI.jpg'
    },{
        id: 10,
        title: 'KOI',
        name: 'Koi K001.136.642.29.36.01',
        description: 'Koi K001.136.642.29.36.01 – Nữ – Kính Sapphire – Quartz (Pin) – Mặt Số 28mm, Kính Sapphire, Chống Nước 5ATM',
        url: '#',

        price: '2.410.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/K001.136.642.29.36-1.jpg'
    },{
        id: 11,
        title: 'KOI',
        name: 'KOI Noble K002.103.641.03.03.04',
        description: 'KOI Noble K002.103.641.03.03.04 – Nữ – Kính Sapphire – Quartz (Pin) – Viền khía – Đính kim cương nhân tạo – Mặt số chải tia tinh xảo',
        url: '#',

        price: '4.720.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/Chai-tia.jpg'
    },{
        id: 12,
        title: 'KOI',
        name: 'Koi K001.150.641.50.03.01',
        description: 'Koi K001.150.641.50.03.01 – Nữ – Kính Sapphire – Quartz (Pin) – Mặt Số 28mm, Kính Sapphire, Chống Nước 5ATM',
        url: '#',

        price: '3.520.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/K001.150.641.50.03-1.jpg'
    },
    {
        id: 13,
        title: 'Candino',
        name: 'Candino C4492/2 ',
        description: 'Candino C4492/2 – Nữ – Quartz (Pin) – Mặt Số 32mm, Kính Sapphire, Chống Nước 5ATM',
        url: '#',

        price: '5.370.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/C4492-2.jpg'
    },{
        id: 14,
        title: 'Candino',
        name: 'Candino C4616/2',
        description: 'Candino C4616/2 – Nam – Kính Sapphire – Quartz (Pin) – Dây Kim Loại',
        url: '#',

        price: '9.790.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/C4616-2.jpg'
    },{
        id: 15,
        title: 'Candino',
        name: 'Candino C4559/2',
        description: 'Candino C4559/2 – Nam – Quartz (Pin) – Kính Sapphire – Dây Da',
        url: '#',

        price: '6.330.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/C4559-2.jpg'
    },{
        id: 16,
        title: 'Candino',
        name: 'Candino C4492/2',
        description: 'Candino C4492/2 – Nữ – Quartz (Pin) – Mặt Số 32mm, Kính Sapphire, Chống Nước 5ATM',
        url: '#',

        price: '5.370.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/C4492-2.jpg'
    },{
        id: 17,
        title: 'Candino',
        name: 'Candino C4622/1',
        description: 'Candino C4622/1 – Nam – Kính Cứng – Quartz (Pin) – Mặt Số 41mm, Dạ Quang, Chống Nước 5ATM',
        url: '#',

        price: '7.080.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/C4622-1.jpg'
    },{
        id: 18,
        title: 'Candino',
        name: 'Candino C4575/2',
        description: 'Candino C4575/2 – Nữ – Quartz (Pin) – Kính Sapphire – Dây Kim Loại',
        url: '#',

        price: '7.670.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/C4575-2.jpg'
    },
    {
        id: 19,
        title: 'Orient',
        name: 'Orient SK VietNam Special Edition RA-AA0B04R19B',
        description: 'Orient SK VietNam Special Edition RA-AA0B04R19B – Nam – Automatic – Mạ Vàng PVD, Trữ Cót 40 Giờ, Hacking Second',
        url: '#',

        price: '8.800.000 ',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/RA-AA0B04R19B.jpg'
    },{
        id: 20,
        title: 'Orient',
        name: 'Orient Star Contemporary RE-AT0002E00B',
        description: 'Orient Star Contemporary RE-AT0002E00B – Nam – Kính Sapphire – Automatic – Mặt Số 39.3 mm, trữ cót 50 giờ, có Power Reserve',
        url: '#',

        price: '20.290.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/RE-AT0002E00B.jpg'
    },{
        id: 21,
        title: 'Orient',
        name: 'Orient Star RE-AU0306L00B',
        description: 'Orient Star RE-AU0306L00B – Nam – Kính Sapphire – Automatic (Tự Động) – Máy Nhật, Power Reserve, Mặt Số 43mm',
        url: '#',

        price: '25.500.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/RE-AU0306L00B.jpg'
    },{
        id: 22,
        title: 'Orient',
        name: 'Orient Sun And Moon Open Heart RA-AS0101S10B',
        description: 'Orient Sun And Moon Open Heart RA-AS0101S10B – Nam – Automatic (Tự Động) – Mặt Số 41mm, Trữ cót 40 Giờ, Hacking Second',
        url: '#',

        price: '13.560.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/RA-AS0101S10B.jpg'
    },{
        id: 23,
        title: 'Orient',
        name: 'Orient Star Layered Skeleton RE-AV0B03B00B',
        description: 'Orient Star Layered Skeleton RE-AV0B03B00B – Bộ máy In-House F6F44 với khả năng trữ cót lên đến 50 giờ, thiết kế mặt số xếp lớp và lộ cơ Open Heart',
        url: '#',

        price: '26.840.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/RE-AV0B03B00B.jpg'
    },{
        id: 24,
        title: 'Orient',
        name: 'Orient Caballero FAG00003W0',
        description: 'Orient Caballero FAG00003W0 – Nam – Automatic In-House – Mặt Số 43mm, Kính Cứng Cong, Trữ Cót 40 Giờ',
        url: '#',

        price: '8.500.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/FAG00003W0.jpg'
    },{
        id: 25,
        title: 'Tissot',
        name: 'Tissot Everytime T109.410.11.032.00',
        description: 'Tissot Everytime T109.410.11.032.00 – Nam – Kính Sapphire – Quartz (Pin) – Mặt Số 38mm, Swiss Made, Chống Nước 3ATM',
        url: '#',

        price: '8.580.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2017/09/T109.410.11.032.00.jpg'
    },{
        id: 26,
        title: 'Tissot',
        name: 'Tissot Le Locle Powermatic 80 T006.407.36.033.00',
        description: 'Tissot Le Locle Powermatic 80 T006.407.36.033.00 – Nam – Mạ Vàng Hồng PVD – Mặt Số 39.3mm, Trữ Cót 80 Giờ',
        url: '#',

        price: '21.000.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.36.033.00.jpg'
    },{
        id: 27,
        title: 'Tissot',
        name: 'Tissot PRX T137.407.21.031.00',
        description: 'Tissot PRX T137.407.21.031.00 – Nam – Kính Sapphire – Automatic – Trữ Cót 80 Giờ, Guilloche, Mạ Vàng PVD',
        url: '#',

        price: '21.880.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T137.407.21.031.00.jpg'
    },{
        id: 28,
        title: 'Tissot',
        name: 'Tissot Chemin Des Tourelles T099.407.11.037.00',
        description: 'Tissot Chemin Des Tourelles T099.407.11.037.00 – Nam – Automatic – Trữ Cót 80 Giờ, Kính Sapphire, Mặt Số 42mm',
        url: '#',

        price: '25.200.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T099.407.11.037.00.jpg'
    },{
        id: 29,
        title: 'Tissot',
        name: 'Tissot Le Locle T006.407.11.043.00',
        description: 'Tissot Le Locle T006.407.11.043.00 – Nam – Automatic (Tự Động) – Mặt Số 39.3mm, Trữ Cót 80 Giờ, Họa Tiết Guilloche',
        url: '#',

        price: '19.250.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.11.043.00.jpg'
    },{
        id: 30,
        title: 'Tissot',
        name: 'Tissot Le Locle Powermatic 80 T006.407.16.053.00',
        description: 'Tissot Le Locle Powermatic 80 T006.407.16.053.00 – Nam – Automatic – Mặt Số 39.3mm, Trữ Cót 80 Giờ, Họa Tiết Guilloche',
        url: '#',

        price: '17.500.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.16.053.00.jpg'
    },{
        id: 31,
        title: 'Tissot',
        name: 'Tissot PRX Powermatic 80 T137.407.11.351.00',
        description: 'Tissot PRX Powermatic 80 T137.407.11.351.00 – Nam – Automatic – Mặt Số Ice Blue 40mm, Trữ Cót 80 Giờ, Họa Tiết Guilloche',
        url: '#',

        price: '21.000.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/T137.407.11.351.00.jpg'
    },{
        id: 32,
        title: 'Citizen',
        name: 'Citizen C7 NH8390-71L',
        description: 'Citizen C7 NH8390-71L – Nam – Kính Cứng – Automatic (Tự Động)– Mặt số 40mm, trữ cót 40 giờ, chống nước 5ATM',
        url: '#',

        price: '8.177.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/NH8390-71L.jpg'
    },{
        id: 33,
        title: 'Citizen',
        name: 'Citizen AN8200-50A',
        description: 'Citizen AN8200-50A – Nam – Kính Cứng – Quartz (Máy Pin) – Mặt Số 44mm, Chronograph, Chống Nước 10ATM',
        url: '#',

        price: '6.885.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AN8200-50A.jpg'
    },{
        id: 34,
        title: 'Citizen',
        name: 'Citizen NH8354-58A',
        description: 'Citizen NH8354-58A – Nam – Kính Cứng – Automatic (Tự Động) – Mặt Số 40mm, Trữ Cót 40 Giờ, Chống Nước 5ATM',
        url: '#',

        price: '7.085.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/NH8354-58A.jpg'
    },{
        id: 35,
        title: 'Citizen',
        name: 'Citizen C7 NH8395-00E',
        description: 'Citizen C7 NH8395-00E – Nam – Automatic (Tự Động) – Mặt Số 40.2mm, Kính Cứng, Trữ Cót 40 Giờ',
        url: '#',

        price: '9.785.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/NH8395-00E.jpg'
    },{
        id: 36,
        title: 'Citizen',
        name: 'Citizen AN8190-51L',
        description: 'Citizen AN8190-51L – Nam – Quartz (Pin) – Mặt Số 42mm, Chronograph, Chống Nước 10ATM',
        url: '#',

        price: '5.585.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AN8190-51L.jpg'
    },{
        id: 37,
        title: 'Citizen',
        name: 'Citizen Tsuyosa NJ0154-80H',
        description: 'Citizen Tsuyosa NJ0154-80H – Nam – Kính Sapphire – Automatic – Mặt Số 40mm, Trữ Cót 40 Giờ, Chống Nước 5ATM',
        url: '#',

        price: '13.685.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/NJ0154-80H.jpg'
    },{
        id: 38,
        title: 'Citizen',
        name: 'Citizen C7 NH8391-51X',
        description: 'Citizen C7 NH8391-51X – Nam – Automatic (Tự Động) – Mặt Số 40.2 Mm, Kính Cứng Cong, Trữ Cót 40 Giờ',
        url: '#',

        price: '9.285.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/NH8391-51X.jpg'
    },{
        id: 39,
        title: 'Saga',
        name: 'Saga Stella 53555-SVMWSV-2',
        description: 'Saga Stella 53555-SVMWSV-2 – Nữ – Kính Cứng – Quartz (Pin) – Mặt Số 22.5mm, Đính Đá Swarovski, Máy Thụy Sỹ',
        url: '#',

        price: '6.380.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2020/01/Saga-53555-SVMWSV-2.jpg'
    },{
        id: 40,
        title: 'Saga',
        name: 'Saga Long Xing Da Da 53111-SVGERD-2LH',
        description: 'Saga Long Xing Da Da 53111-SVGERD-2LH – Nữ – Phiên Bản Giới Hạn 999 Chiếc Toàn Cầu – Đính 73 Viên Đá Quý – Khảm Xà Cừ Thiên Nhiên',
        url: '#',

        price: '8.180.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/2-11.jpg'
    },{
        id: 41,
        title: 'Saga',
        name: 'Saga 53458-SVMWBK-2',
        description: 'Saga 53458-SVMWBK-2 – Nữ – Kính Cứng – Quartz (Pin) – Mặt Số 35mm, Xà cừ, Đính Đá Pha Lê',
        url: '#',

        price: '8.080.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/53458-SVMWBK-2.jpg'
    },{
        id: 42,
        title: 'Saga',
        name: 'Saga 53229-SVMWSV-1',
        description: 'Saga 53229-SVMWSV-1 – Nữ – Kính Cứng – Quartz – Mặt Số 20mm, Đá Swarovski, Swiss Movt',
        url: '#',

        price: '7.770.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2021/11/53229-SVMWSV-1-1.jpg'
    },{
        id: 43,
        title: 'Saga',
        name: 'Saga 71931-SVBNBN-2',
        description: 'Saga 71931-SVBNBN-2 – Nữ – Kính cứng (Mineral Crystal) – Nền xà cừ ánh hồng quyến rũ – Dây da bò dập nổi vân cá sấu',
        url: '#',

        price: '5.920.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2024/03/Saga-71931-SVBNBN-2.jpg'
    },{
        id: 44,
        title: 'Saga',
        name: 'Saga Charm 53229-SVMWSV-8',
        description: 'Saga Charm 53229-SVMWSV-8 – Nữ – Đính đá Swarovski lấp lánh – Mặt số khảm xà cừ cùng hiệu ứng chuyển sắc – Dây charm màu bạc đan xen sắc xanh dương',
        url: '#',

        price: '8.220.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/53229-SVMWSV-8.jpg'
    },{
        id: 45,
        title: 'Saga',
        name: 'Saga 53766-GPZMGGE',
        description: 'Saga 53766-GPZMGGE-2 – Nữ – Kính cứng – Quartz (Pin) – Đá Swarovski lấp lánh – Mặt số pha lê lộng lẫy – Dây da quyền quý',
        url: '#',

        price: '7.770.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/53766-RGMGGE-2-1.jpg'
    },{
        id: 46,
        title: 'Saga',
        name: 'Saga Stella Chance 53578-SVVTSV-2',
        description: 'Saga Stella Chance 53578-SVVTSV-2 – Nữ – Quartz (Pin) – Mặt Số 36mm, Kính Cứng, Chống Nước 3ATM',
        url: '#',

        price: '5.340.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/53578-SVVTSV-2.jpg'
    },{
        id: 47,
        title: 'Fossil',
        name: 'Fossil Year Of The Dragon Special Edition Everett FS6037',
        description: 'Fossil Year Of The Dragon Special Edition Everett FS6037 – Nam – Quartz (Pin) – Japan Movt, mạ vàng PVD',
        url: '#',

        price: '5.250.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/Fossil-FS6037-4.jpg'
    },{
        id: 48,
        title: 'Fossil',
        name: 'Fossil ME3061',
        description: 'Fossil ME3061 – Nam – Automatic (Tự Động) – Mặt Số 44mm, Kính Cứng, Chống Nước 5ATM',
        url: '#',

        price: '7.370.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/25_ME3061.jpg'
    },{
        id: 49,
        title: 'Fossil',
        name: 'Fossil FS5305',
        description: 'Fossil FS5305 – Nam – Quartz (Pin) – Mặt Số 44mm, Japan Movt, Chống Nước 5ATM',
        url: '#',

        price: '4.350.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/5_FS5305.jpg'
    },{
        id: 50,
        title: 'Fossil',
        name: 'Fossil Jacqueline ES5274',
        description: 'Fossil Jacqueline ES5274 – Nữ – Quartz (Pin) – Mặt Số 36mm, Kính Cứng, Chống Nước 5ATM',
        url: '#',

        price: '3.800.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/ES5274.jpg'
    },{
        id: 51,
        title: 'Fossil',
        name: 'Fossil Neutra FS5905',
        description: 'Fossil Neutra FS5905 – Nam – Kính Cứng – Quartz (Pin) – Mặt Số 42mm, Moonphase, Chống Nước 5ATM',
        url: '#',

        price: '5.250.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/FS5905.jpg'
    },{
        id: 52,
        title: 'Fossil',
        name: 'Fossil FS5839',
        description: 'Fossil FS5839 – Nam – Quartz (Pin) – Mặt Số 44mm, Chống Nước 5ATM, Kính Cứng',
        url: '#',

        price: '4.040.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/FS5839.jpg'
    },{
        id: 53,
        title: 'Rado',
        name: 'Rado Captain Cook R32505318',
        description: 'Rado Captain Cook R32505318 – Automatic (Tự Động) – Trữ Cót 80 Giờ – Chống Nước 20 ATM – High-tech Ceramic – Đi Kèm Túi Da Và 3 Dây Đeo',
        url: '#',

        price: '71.625.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/R32505318.jpg'
    },{
        id: 54,
        title: 'Rado',
        name: 'Rado Captain Cook R32505315',
        description: 'Rado Captain Cook R32505315 – Automatic (Tự Động) – Trữ Cót 80 Giờ – Chống Nước 20 ATM – Sapphire Con',
        url: '#',

        price: '62.000.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/R32505315.jpg'
    },{
        id: 55,
        title: 'Rado',
        name: 'Rado Centrix Open Heart R30246712',
        description: 'Rado Centrix Open Heart R30246712 – Nữ – Kính Sapphire – Automatic (Tự Động) – Kim Cương Tự Nhiên – Gốm Công Nghệ Cao',
        url: '#',

        price: '71.250.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/R30246712.jpg'
    },{
        id: 56,
        title: 'Rado',
        name: 'Rado Captain Cook Bronze',
        description: 'Rado Captain Cook Bronze – R32504205 – Trữ Cót 80 Giờ – Vỏ Đồng – Viền High-tech Ceramic – Nắp Lưng Titan – Chống Nước 30 ATM',
        url: '#',

        price: '85.000.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/R32504205.jpg'
    },


];
const productHot = [
    {
        id: 56,
        title: 'Rado',
        name: 'Rado Captain Cook Bronze',
        description: 'Rado Captain Cook Bronze – R32504205 – Trữ Cót 80 Giờ – Vỏ Đồng – Viền High-tech Ceramic – Nắp Lưng Titan – Chống Nước 30 ATM',
        url: '#',

        price: '85.000.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/R32504205.jpg'
    },{
        id: 23,
        title: 'Orient',
        name: 'Orient Star Layered Skeleton RE-AV0B03B00B',
        description: 'Orient Star Layered Skeleton RE-AV0B03B00B – Bộ máy In-House F6F44 với khả năng trữ cót lên đến 50 giờ, thiết kế mặt số xếp lớp và lộ cơ Open Heart',
        url: '#',

        price: '26.840.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/RE-AV0B03B00B.jpg'
    },{
        id: 24,
        title: 'Orient',
        name: 'Orient Caballero FAG00003W0',
        description: 'Orient Caballero FAG00003W0 – Nam – Automatic In-House – Mặt Số 43mm, Kính Cứng Cong, Trữ Cót 40 Giờ',
        url: '#',

        price: '8.500.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/FAG00003W0.jpg'
    },{
        id: 25,
        title: 'Tissot',
        name: 'Tissot Everytime T109.410.11.032.00',
        description: 'Tissot Everytime T109.410.11.032.00 – Nam – Kính Sapphire – Quartz (Pin) – Mặt Số 38mm, Swiss Made, Chống Nước 3ATM',
        url: '#',

        price: '8.580.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2017/09/T109.410.11.032.00.jpg'
    },{
        id: 26,
        title: 'Tissot',
        name: 'Tissot Le Locle Powermatic 80 T006.407.36.033.00',
        description: 'Tissot Le Locle Powermatic 80 T006.407.36.033.00 – Nam – Mạ Vàng Hồng PVD – Mặt Số 39.3mm, Trữ Cót 80 Giờ',
        url: '#',

        price: '21.000.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.36.033.00.jpg'
    },{
        id: 27,
        title: 'Tissot',
        name: 'Tissot PRX T137.407.21.031.00',
        description: 'Tissot PRX T137.407.21.031.00 – Nam – Kính Sapphire – Automatic – Trữ Cót 80 Giờ, Guilloche, Mạ Vàng PVD',
        url: '#',

        price: '21.880.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T137.407.21.031.00.jpg'
    },{
        id: 28,
        title: 'Tissot',
        name: 'Tissot Chemin Des Tourelles T099.407.11.037.00',
        description: 'Tissot Chemin Des Tourelles T099.407.11.037.00 – Nam – Automatic – Trữ Cót 80 Giờ, Kính Sapphire, Mặt Số 42mm',
        url: '#',

        price: '25.200.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T099.407.11.037.00.jpg'
    },{
        id: 29,
        title: 'Tissot',
        name: 'Tissot Le Locle T006.407.11.043.00',
        description: 'Tissot Le Locle T006.407.11.043.00 – Nam – Automatic (Tự Động) – Mặt Số 39.3mm, Trữ Cót 80 Giờ, Họa Tiết Guilloche',
        url: '#',

        price: '19.250.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.11.043.00.jpg'
    },{
        id: 30,
        title: 'Tissot',
        name: 'Tissot Le Locle Powermatic 80 T006.407.16.053.00',
        description: 'Tissot Le Locle Powermatic 80 T006.407.16.053.00 – Nam – Automatic – Mặt Số 39.3mm, Trữ Cót 80 Giờ, Họa Tiết Guilloche',
        url: '#',

        price: '17.500.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.16.053.00.jpg'
    }


];
const productSale = [
    {
        id: 2,
        title: 'Seiko',
        name: 'Đồng hồ Seiko 5 Field Sports',
        description: 'Seiko 5 Field Sports Style SRPH29K1 – Nam – Automatic – Mặt số 39.4mm, chống nước 10ATM, bộ máy In-House',
        url: '#',
        price: '9.000.000',
        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/SRPH29K1.jpg'
    },
    {
        id: 3,
        title: 'Seiko',
        name: 'Seiko SRPD57K1',
        description: 'Seiko SRPD57K1 – Nam – Automatic (Tự Động) – Dây Kim Loại',
        url: '#',

        price: '9.330.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/35_SRPD57K1.jpg'
    },{
        id: 4,
        title: 'Seiko',
        name: 'Seiko Presage Cocktail Grasshopper SSA441J1 ',
        description: 'Seiko Presage Cocktail Grasshopper SSA441J1 – Nam – Automatic (Tự Động) – Mặt Số 40.5mm, Trữ Cót 41 Giờ, Kính Hardlex',
        url: '#',

        price: '13.750.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/SSA441J1.jpg'
    },{
        id: 5,
        title: 'Seiko',
        name: 'Seiko Presage Cocktail Blue Moon SSA405J1',
        description: 'Seiko Presage Cocktail Blue Moon SSA405J1 – Nam – Automatic (Tự Động) – Mặt Số 40.5mm, Trữ cót đến 40 giờ, Kính Cứng',
        url: '#',

        price: '13.750.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2020/08/SSA405J1-SEIKO.jpg'
    },{
        id: 6,
        title: 'Seiko',
        name: 'Seiko Prospex SSC911P1',
        description: 'Seiko Prospex SSC911P1 – Nam – Kính Sapphire – Solar (Năng Lượng Ánh Sáng) – Power Reserve, Chronograph',
        url: '#',

        price: '20.500.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/SSC911P1.jpg'
    },
    {
        id: 7,
        title: 'KOI',
        name: 'KOI Noble K002.103.641.50.03.04',
        description: 'KOI Noble K002.103.641.50.03.04 – Nữ – Kính Sapphire – Quartz (Pin) – Viền khía – Dây demi mạ vàng – Đính kim cương nhân tạo – Mặt số tráng men',
        url: '#',

        price: '5.140.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/KOI-nu-vien-khia.jpg'
    },{
        id: 49,
        title: 'Fossil',
        name: 'Fossil FS5305',
        description: 'Fossil FS5305 – Nam – Quartz (Pin) – Mặt Số 44mm, Japan Movt, Chống Nước 5ATM',
        url: '#',

        price: '4.350.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/5_FS5305.jpg'
    },{
        id: 17,
        title: 'Candino',
        name: 'Candino C4622/1',
        description: 'Candino C4622/1 – Nam – Kính Cứng – Quartz (Pin) – Mặt Số 41mm, Dạ Quang, Chống Nước 5ATM',
        url: '#',

        price: '7.080.000',

        productImageUrl: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/C4622-1.jpg'
    },


];


export default productAll;
