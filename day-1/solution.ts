const leftList = [
  58692, 45806, 61519, 77848, 98705, 40109, 26355, 68715, 56304, 37264, 43236,
  43577, 77477, 53092, 37180, 20616, 97334, 73040, 21873, 84281, 42579, 58950,
  41645, 94750, 32915, 44562, 93775, 19512, 99696, 21597, 56743, 78901, 41593,
  32215, 44764, 18670, 96152, 25871, 51869, 18158, 58119, 56369, 18076, 39036,
  10418, 45943, 97617, 58295, 85585, 52619, 90697, 74290, 75290, 20096, 95350,
  38951, 75164, 91540, 15233, 85251, 68167, 50113, 71427, 24444, 36612, 45913,
  61899, 17009, 36447, 29939, 98955, 86307, 79546, 20043, 89734, 22532, 38775,
  51623, 23458, 20971, 28114, 98781, 55269, 15215, 25994, 18371, 57542, 49611,
  86439, 28659, 40997, 69645, 54066, 77771, 68166, 60960, 70063, 23460, 15248,
  71980, 93745, 69012, 32127, 37912, 44522, 46780, 17757, 22296, 21860, 13293,
  65101, 80705, 89050, 88161, 74340, 31839, 25311, 94912, 19900, 38669, 42958,
  43606, 82677, 98077, 30924, 25598, 28564, 11879, 27531, 39113, 53147, 12762,
  89612, 83701, 73067, 24957, 77222, 17744, 62306, 14025, 59643, 67152, 58835,
  61882, 28174, 84094, 84099, 42783, 45148, 55374, 53134, 38007, 26794, 56567,
  10209, 13233, 18053, 69340, 32061, 58293, 46514, 74862, 66080, 95079, 26186,
  16839, 55841, 92678, 49885, 56779, 35136, 35115, 70253, 28435, 34410, 39335,
  60832, 61949, 16487, 43545, 39289, 64581, 13200, 58996, 21766, 33174, 96545,
  13820, 75200, 63979, 54711, 34633, 49784, 34461, 65491, 48702, 93477, 50646,
  98874, 83312, 87924, 24928, 33803, 34995, 31695, 96781, 52443, 31068, 45835,
  39749, 52812, 84499, 76703, 15788, 46869, 35929, 31093, 13592, 47704, 17713,
  71888, 35166, 32725, 92648, 86060, 18301, 57155, 76362, 99510, 27789, 84634,
  57886, 65729, 62285, 32091, 75565, 90388, 47465, 98181, 85368, 47978, 14979,
  61630, 56645, 23400, 23871, 33383, 57650, 79961, 30980, 65936, 98177, 74251,
  19586, 82672, 97885, 16375, 13960, 48331, 71851, 39544, 26162, 96196, 56644,
  44642, 75978, 23507, 10164, 80471, 23262, 50169, 82553, 37359, 66822, 77157,
  89279, 70625, 96127, 57483, 84704, 95805, 10526, 41396, 27982, 67459, 47751,
  96622, 75606, 48009, 71026, 85116, 51669, 41048, 25788, 55740, 84391, 62303,
  61747, 54119, 95965, 37749, 34224, 63046, 55216, 78168, 57385, 36927, 64442,
  81693, 28110, 88272, 14111, 44817, 81556, 44458, 12018, 96305, 37402, 18732,
  42170, 46401, 87100, 39844, 57423, 26562, 54418, 58705, 82922, 87067, 47312,
  38548, 53190, 29917, 42325, 95590, 54561, 97439, 11411, 58773, 70943, 60775,
  28063, 47400, 10825, 72110, 24815, 78705, 99101, 12807, 54179, 68659, 33138,
  49947, 80334, 34081, 52339, 76399, 93419, 41305, 70393, 97638, 83001, 72802,
  52036, 35576, 11887, 35348, 45853, 53651, 63422, 39390, 50050, 86437, 89370,
  24909, 98791, 87645, 83210, 96021, 53148, 30332, 94829, 31815, 19040, 85522,
  71721, 55365, 90383, 77502, 91232, 82187, 89204, 20858, 69477, 81598, 64333,
  14077, 29326, 24726, 54422, 30688, 20341, 50601, 86836, 44594, 86152, 63247,
  82498, 79108, 91871, 99872, 41068, 96159, 62645, 45646, 26163, 90008, 87334,
  87822, 70745, 21762, 41620, 70907, 26244, 79411, 55868, 11278, 37673, 25055,
  54935, 43886, 37309, 55015, 63352, 58698, 81387, 29046, 58613, 82324, 13403,
  10892, 77123, 33575, 48171, 90435, 89406, 27722, 80176, 93218, 41958, 56360,
  90404, 39556, 84518, 25734, 34464, 67395, 99197, 62886, 66314, 64470, 91704,
  49126, 44922, 61975, 60682, 64266, 76536, 16857, 52642, 54675, 45270, 25750,
  81197, 61256, 18231, 36067, 26043, 29852, 96277, 91064, 63914, 69764, 24111,
  57354, 91631, 97132, 74955, 12873, 75267, 53133, 20645, 98238, 12241, 67045,
  73351, 10571, 18983, 61188, 53415, 11950, 19189, 49639, 50651, 79184, 93111,
  48125, 32705, 91611, 56231, 61384, 50882, 68311, 18609, 31210, 97836, 30406,
  21526, 29914, 82010, 25775, 29688, 90860, 95867, 31388, 65300, 25536, 40121,
  77593, 67527, 12937, 49194, 27889, 48768, 39163, 64135, 29431, 20473, 11519,
  83666, 71962, 12936, 67251, 25749, 16970, 79021, 24436, 40505, 48317, 99381,
  62487, 19335, 87856, 85590, 39618, 61562, 45199, 80448, 17187, 79089, 32058,
  82841, 40798, 86367, 13554, 68467, 35298, 35159, 85923, 72185, 56088, 63172,
  58775, 43947, 27276, 76238, 93662, 86221, 56440, 47639, 85362, 26154, 13811,
  35004, 61936, 77417, 51617, 71330, 72744, 42786, 62415, 33067, 28905, 50640,
  14207, 30760, 33767, 21522, 37979, 98095, 78924, 23863, 11062, 14585, 59032,
  65746, 37228, 96930, 91199, 23174, 74662, 84769, 95632, 98388, 19101, 74624,
  41636, 50603, 73759, 62222, 36385, 94441, 66544, 29419, 37882, 76573, 41137,
  72153, 40280, 89800, 20352, 97382, 48401, 95481, 34830, 52340, 72473, 23027,
  84626, 55465, 90755, 36665, 28837, 88173, 48651, 29605, 61275, 21002, 40255,
  34659, 30246, 70325, 83974, 61241, 11883, 12479, 17092, 39998, 71318, 49438,
  34597, 64278, 80596, 91844, 74971, 25101, 22587, 31853, 23921, 61611, 23577,
  62744, 85808, 79657, 62155, 15585, 99894, 41130, 19404, 25031, 68371, 46354,
  68726, 84826, 76273, 64743, 51903, 36136, 40047, 95606, 53944, 94698, 25217,
  86650, 92979, 10190, 86815, 96308, 40065, 92522, 70854, 80130, 80869, 63911,
  78393, 37699, 54669, 88420, 97511, 93370, 87004, 88067, 91248, 26912, 62212,
  35359, 43743, 23402, 52733, 38801, 69148, 23150, 11522, 87909, 74157, 87552,
  97642, 58377, 36872, 28786, 10838, 51754, 49366, 62108, 46490, 92381, 14655,
  94136, 52958, 35680, 99274, 95898, 80049, 78216, 34169, 37503, 91663, 44335,
  18185, 81878, 43387, 90977, 72660, 39634, 47748, 79572, 61317, 99452, 59165,
  28988, 10186, 97072, 23437, 25136, 70817, 81489, 16210, 79565, 16125, 18390,
  22543, 90995, 88960, 34710, 20426, 30472, 81984, 71958, 70163, 33936, 96019,
  15737, 47900, 45203, 73885, 41883, 19816, 23620, 93874, 37065, 13841, 20247,
  23142, 31341, 83096, 26139, 32514, 88888, 83754, 66106, 38199, 57295, 46102,
  79413, 13550, 67201, 11907, 70044, 33542, 11273, 85143, 90698, 66336, 52763,
  21923, 12300, 64921, 49612, 42092, 81081, 85411, 88743, 67110, 66344, 13510,
  10766, 59257, 39333, 41611, 89131, 79910, 79833, 70201, 45298, 93528, 67472,
  28083, 99427, 57426, 70197, 41146, 32235, 83437, 19107, 62376, 37000, 38143,
  97780, 54008, 62441, 95123, 71651, 43911, 77678, 40843, 81957, 97799, 34839,
  79794, 41598, 75305, 47771, 38976, 36023, 35570, 48804, 23497, 21745, 35898,
  68244, 49831, 70988, 19797, 50561, 58577, 94592, 57724, 54847, 72690, 47137,
  23898, 87598, 13646, 53861, 83822, 21224, 16557, 28394, 15982, 20661, 98506,
  16242, 32971, 33113, 87344, 14803, 34931, 38451, 67646, 80436, 81838, 95361,
  65978, 76587, 70892, 23734, 89248, 17066, 52504, 98114, 30619, 91557, 88382,
  95976, 72241, 58496, 93790, 30945, 54482, 96412, 10313, 32604, 31806, 18912,
  32018, 38922, 82021, 90291, 62722, 37494, 33523, 23069, 84349, 26251, 42012,
  77929, 39926, 98975, 33771, 22832, 75620, 35406, 70752, 88399, 51534, 85961,
  14123, 85125, 34896, 82440, 99451, 44034, 11876, 47516, 75926, 35222, 99941,
  34909, 24255, 11814, 98257, 95143, 50403, 71325, 82711, 11959, 88390, 52422,
  39874, 72503, 13223, 53459, 51579, 31830, 51189, 10980, 94234, 34098, 83669,
  22936, 26105, 51805, 35479, 10006, 82269, 77241, 86928, 18518, 86000, 41196,
  81975, 24972, 45484, 20171, 59569, 85735, 30874, 15369, 25998, 37079,
];

const rightList = [
  56129, 95015, 31093, 16487, 66749, 81197, 75702, 92381, 23460, 12036, 27331,
  28168, 20638, 44012, 48396, 32705, 49126, 28694, 15026, 40798, 91319, 66300,
  92178, 65101, 60179, 71858, 59687, 81598, 83818, 11382, 16557, 99638, 96712,
  53944, 53944, 40607, 17765, 16487, 24957, 54482, 77417, 81197, 27795, 31093,
  62892, 78393, 54482, 64971, 93419, 23460, 71454, 30929, 86123, 74997, 26162,
  98705, 16487, 63048, 92381, 96622, 89320, 11239, 10418, 98705, 65035, 72508,
  97524, 90579, 80725, 31093, 78393, 90907, 17968, 68154, 10418, 98705, 82700,
  71276, 36867, 78684, 21873, 31388, 46378, 31093, 40798, 21873, 68652, 69512,
  21873, 11473, 92284, 63538, 10418, 40798, 82468, 27531, 90621, 89404, 83526,
  93951, 81047, 40798, 49126, 78393, 66779, 91790, 52357, 12692, 37749, 91094,
  16557, 49126, 25994, 26162, 20670, 21873, 32705, 29820, 43167, 44521, 29495,
  36746, 77417, 78921, 81591, 95296, 74437, 15403, 77593, 56398, 47022, 16557,
  83096, 56880, 57030, 50324, 67603, 99063, 38370, 96622, 75583, 79005, 89612,
  53944, 81598, 81598, 51482, 49701, 59184, 91670, 62411, 25421, 54482, 24607,
  92381, 16352, 54482, 31093, 21873, 78513, 85839, 83096, 54482, 17822, 40798,
  86836, 77124, 26808, 65391, 10020, 67136, 81598, 13483, 67494, 96622, 72612,
  98705, 77417, 89612, 85993, 94417, 79338, 17235, 89612, 12440, 53944, 96622,
  89612, 63765, 91806, 14141, 79885, 77593, 81007, 17490, 16557, 40798, 43959,
  44341, 31512, 81173, 32705, 77593, 27808, 16557, 25994, 10418, 16557, 65101,
  23460, 49126, 61472, 74413, 77417, 65101, 47384, 25736, 99027, 54696, 64743,
  87351, 80828, 80342, 37749, 37749, 75483, 96622, 69037, 98552, 93066, 82443,
  55692, 16557, 48939, 56805, 21873, 64049, 92381, 75353, 23460, 54621, 67106,
  92381, 23460, 43430, 92381, 32705, 70467, 76721, 98667, 42768, 37749, 50601,
  65101, 89612, 69420, 40976, 42919, 68948, 61884, 81598, 37143, 37749, 24957,
  49170, 34663, 86221, 38813, 52851, 47386, 22415, 20839, 21873, 94258, 95081,
  83096, 95877, 85802, 49126, 21873, 99427, 31093, 79445, 92381, 23460, 22401,
  51524, 34459, 26647, 84513, 78393, 19783, 16165, 53944, 44351, 55762, 32778,
  17977, 57740, 25994, 77593, 49126, 53944, 40138, 10418, 22620, 10294, 40798,
  22002, 19900, 92381, 31683, 51880, 23477, 21970, 77420, 68195, 92381, 44095,
  62400, 27531, 64743, 40798, 83184, 50029, 84284, 61925, 11177, 32705, 27531,
  81197, 80348, 93023, 81197, 27531, 23126, 64743, 54482, 53944, 85056, 53944,
  54482, 74202, 64490, 27531, 83532, 16487, 75491, 78725, 64498, 67308, 77593,
  98705, 66710, 89511, 59338, 16557, 33219, 12246, 37749, 44272, 16688, 10380,
  81598, 24957, 37223, 37749, 49126, 81197, 84087, 32627, 32718, 54268, 65101,
  31388, 31888, 98705, 77417, 19900, 37749, 31148, 22219, 77593, 93953, 32812,
  65101, 64743, 27531, 54482, 78231, 21873, 89612, 37749, 93247, 61349, 10118,
  21873, 93949, 61981, 24957, 54482, 21202, 65101, 49126, 42246, 45889, 93419,
  40798, 54192, 53390, 77417, 49126, 11626, 31093, 31093, 31093, 13269, 66094,
  85292, 31847, 81395, 89001, 89612, 27854, 58099, 87368, 77417, 95517, 29383,
  12762, 21873, 61228, 84361, 92381, 85675, 40798, 66504, 10418, 41647, 41567,
  29289, 24957, 89612, 43026, 26525, 53944, 31362, 45398, 25976, 25454, 52645,
  50800, 89612, 12762, 19900, 67008, 90719, 81598, 64743, 31575, 81598, 92381,
  31093, 16557, 24788, 60858, 24957, 16557, 80320, 30266, 23460, 97669, 32914,
  50551, 16557, 30651, 37882, 21873, 80234, 16557, 50601, 58965, 75318, 83096,
  34874, 84294, 84499, 32953, 81598, 99914, 65101, 30462, 93419, 91866, 26186,
  78393, 70926, 77417, 53944, 12892, 46304, 90035, 50601, 70751, 51245, 31691,
  32705, 48623, 54121, 74893, 16557, 19816, 24056, 75970, 12762, 81598, 48671,
  77493, 58274, 68984, 83096, 18265, 19900, 24957, 50389, 66889, 40549, 38677,
  13569, 24957, 32705, 42027, 11799, 15747, 88157, 76645, 78317, 98689, 81598,
  50089, 53944, 47345, 89135, 67545, 76986, 12762, 25522, 89612, 29070, 37882,
  52063, 45479, 76582, 44438, 27531, 77417, 17823, 12762, 10418, 81197, 26701,
  92787, 53461, 63332, 89592, 40417, 10360, 93419, 27309, 24957, 49126, 59362,
  21873, 67792, 16735, 35704, 42478, 31093, 96803, 64743, 31093, 92381, 57981,
  92381, 83096, 77593, 83096, 11566, 31861, 23188, 23827, 31786, 93419, 50601,
  77593, 50601, 42776, 77417, 31093, 80409, 50601, 10376, 81598, 42821, 29344,
  23569, 77972, 26603, 77417, 66423, 13386, 52236, 86168, 53284, 29813, 84414,
  40798, 43055, 16557, 67636, 81598, 53944, 37749, 54482, 83066, 49126, 59092,
  88283, 10418, 21942, 53944, 26162, 38866, 83096, 94495, 74883, 67919, 77417,
  12031, 69547, 54548, 97629, 45543, 18396, 54898, 10707, 49126, 64743, 40798,
  64743, 20886, 45581, 67963, 54482, 45819, 76035, 93759, 26162, 13849, 58801,
  16487, 40798, 55825, 59420, 49148, 86221, 77104, 92381, 50601, 21873, 50601,
  84499, 10418, 16487, 12847, 26162, 80428, 96622, 49517, 21873, 92381, 93419,
  71530, 69572, 21873, 65807, 16557, 23751, 90769, 66439, 21993, 25710, 63275,
  37749, 70928, 92381, 24957, 65101, 89612, 23460, 69671, 95318, 41574, 12762,
  99596, 89007, 91261, 40064, 43961, 81197, 78393, 60647, 54482, 77449, 16557,
  40798, 96327, 40435, 72898, 31859, 42844, 31093, 40798, 23460, 13421, 89035,
  87767, 81990, 60818, 83096, 19340, 54482, 24110, 63081, 97762, 81598, 95778,
  64743, 15704, 75439, 49126, 32705, 24323, 64743, 27636, 37749, 89612, 40798,
  28044, 37656, 81598, 21873, 64743, 63703, 48934, 19518, 94748, 80662, 26162,
  24957, 73375, 43422, 72900, 23835, 16557, 19816, 84879, 88447, 68082, 64667,
  23460, 58285, 33239, 90430, 84502, 16487, 25342, 40798, 63310, 65348, 83283,
  95669, 20364, 37749, 64544, 27531, 77681, 89095, 89612, 45856, 64743, 53944,
  38721, 47276, 54494, 27531, 89612, 19816, 10418, 88915, 45336, 61535, 89612,
  46077, 71765, 71450, 28021, 37250, 24957, 16557, 49126, 98705, 63745, 23460,
  85051, 76577, 38328, 15170, 62194, 29744, 26540, 24957, 57072, 23460, 83821,
  40798, 35914, 79820, 89612, 16487, 74195, 10972, 43597, 40798, 39040, 83096,
  73486, 83096, 44711, 26162, 77870, 39025, 52047, 80128, 65101, 41525, 39047,
  98705, 14030, 89612, 29967, 49358, 83096, 24957, 92381, 88406, 65543, 88608,
  40798, 40240, 68392, 46860, 17664, 78321, 49374, 16006, 39006, 21216, 78381,
  50448, 56014, 54482, 77193, 54482, 64145, 86756, 55135, 14131, 23460, 76125,
  89612, 81598, 31388, 50601, 31668, 87493, 32745, 43896, 92381, 35634, 42840,
  91366, 35609, 67658, 31857, 75667, 47173, 17170, 27531, 53944, 22536, 20123,
  90413, 26162, 85750, 27189, 92064, 57813, 38134, 50508, 10418, 75651, 77897,
  50494, 41135, 21873, 68603, 50899, 66005, 33777, 84492, 65384, 31093, 21152,
  60171, 21106, 81197, 12302, 32705, 21470, 64743, 98705, 92381, 81638, 82734,
  32705, 81197, 97049, 82816, 96615, 86221, 47499, 83096, 70473, 98705, 89612,
  27531, 14573, 21065, 83096, 77759, 52525, 53944, 92381, 18104, 26162, 56786,
  65101, 54482, 98705, 83096, 21873, 31093, 44054, 16487, 89612, 21612, 83096,
  53944, 29230, 54482, 85940, 81598, 67725, 62613, 27338, 13514, 20372, 96622,
  49126, 35302, 81598, 61032, 64579, 85007, 81197, 83096, 19816, 12762, 25803,
  64197, 10418, 91706, 53178, 19816, 35587, 14008, 52468, 79528, 53944,
];

function calculateTotalDistance(leftList: number[], rightList: number[]): number {
  // Sort both lists in ascending order
  const sortedLeftList = leftList.sort((a, b) => a - b);
  const sortedRightList = rightList.sort((a, b) => a - b);

  // Calculate the sum of distances
  let totalDistance = 0;

  for (let i = 0; i < sortedLeftList.length; i++) {
    totalDistance += Math.abs(sortedLeftList[i] - sortedRightList[i]);
  }

  return totalDistance;
}

// Calculate and display the total distance
const totalDistance = calculateTotalDistance(leftList, rightList);
console.log(`Total Distance: ${totalDistance}`);
