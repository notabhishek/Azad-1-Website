// grid dummy data
var dummyData = {
	"IV-OBDH":"<h1>OBDH</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IVOBDH_ArijitMishra_CSE.jpeg\" id=\"picmem\" title=\"member\"><p>Arijit Mishra<p><br>CSE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IVOBDH_SanchayKanade_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Sanchay Kanade<p><br>ECE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/yashi.JPG\" id=\"picmem\" title=\"member\"><p>Yashasvini Rathore<p><br>CSE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/chandan.jpeg\" id=\"picmem\" title=\"member\"><p>Chandan Agrawal<p><br>ECE</div></li>",
	
	"IV-TTC":"<h1>TTC</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IVTanmay_Bhat.jpeg\" id=\"picmem\" title=\"member\"><p>Tanmay Bhat<p><br>ECE</div></li>",

	"IV-Payload":"<h1>Payload</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IVPayload_SparshSingh_Mech.jpg\" id=\"picmem\" title=\"member\"><p>Sparsh Singh<p><br>Mech.</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IVPayload_AnupamAgrawal_CSE.jpeg\" id=\"picmem\" title=\"member\"><p>Anupam Agrawal</p><br>CSE</div></li>",
	
	"IV-STM":"<h1>STM</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IVPayload_SparshSingh_Mech.jpg\" id=\"picmem\" title=\"member\"><p>Sparsh Singh<p><br>Mech.</div></li>",
	
	"IV-EPS":"<h1>EPS</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IVEPS_TanayPaltanwale_ECE.jpg\" id=\"picmem\" title=\"member\"><p>Tanay Paltanwale<p><br>ECE</div></li>",
	
	"IV-ADCS":"<h1>ADCS</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IVADCS_BhavyaMishra_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Bhavya Mishra<p><br>ECE</div></li>",

	"III-OBDH":"<h1>OBDH</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIOBDH_AtikAgrawal_CSE.jpeg\" id=\"picmem\" title=\"member\"><p>Atik Agarwal<p><br>CSE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIOBDH_ThelukuntlaPhaneendra_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Thelukuntla Phaneendra<p><br>ECE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIOBDH_AkshayKumarMishra_CSE.jpeg\" id=\"picmem\" title=\"member\"><p>Ayush Kumar Mishra<p><br>CSE</div></li>",
	
	"III-TTC":"<h1>TTC</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIPratyush.jpeg\" id=\"picmem\" title=\"member\"><p>Pratyush Singhania<p><br>ECE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIITTC_ArunimaSaxena_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Arunima Saxena<p><br>ECE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIITTC_TalibAshraf_ECE.jpg\" id=\"picmem\" title=\"member\"><p>Talib Ashraf<p><br>ECE</div></li>",

	"III-Payload":"<h1>Payload</h1><li class=\"product\"><div class=\"member member--picture\"><div class=\"member member--picture\"><img src=\"members/IIIPayload_HimaniJain_Electrical.jpeg\" id=\"picmem\" title=\"member\"><p>Himani Jain<p><br>Electrical</div></li>",
	
	"III-STM":"<h1>STM</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIISTM_AbhishekSinghParihaar_Mech.jpeg\" id=\"picmem\" title=\"member\"><p>Abhishek Singh Parihaar<p><br>Mech.</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIISTM_AhanaBajpai_Mech.jpeg\" id=\"picmem\" title=\"member\"><p>Ahana Bajpai<p><br>Mech.</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIISTM_PriyanshuKumar_MECH.jpeg\" id=\"picmem\" title=\"member\"><p>Priyanshu Kumar<p><br>Mech.</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIOBDH_SuryanshSingh_CSE.jpeg\" id=\"picmem\" title=\"member\"><p>Suryansh Singh<p><br>Mech.</div></li>",
	
	"III-EPS":"<h1>EPS</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIEPS_ShreyasMaitreya_Electrical.jpeg\" id=\"picmem\" title=\"member\"><p>Shreyas Maitreya<p><br>Electrical</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIEPS_Lahari_Electrical.jpeg\" id=\"picmem\" title=\"member\"><p>P.V. Santosh Lahari<p><br>ECE</div></li>",
	
	"III-ADCS":"<h1>ADCS</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIADCS_ShishankSharma_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Shishank Sharma<p><br>ECE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIIADCS_ShubhamMandloi_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Shubham Mandloi<p><br>ECE</div></li>",

	"II-OBDH":"<h1>OBDH</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIOBDH_AbhishekTiwari_CSE.jpg\" id=\"picmem\" title=\"member\"><p>Abhishek Tiwari<p><br>CSE</div></li>",
	
	"II-TTC":"<h1>TTC</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IITTC_ArchitChibbar_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Archit Chibbar<p><br>ECE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IITTC_AdityaAgrawal_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Aditya Agrawal<p><br>ECE</div></li>",

	"II-Payload":"<h1>Payload</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIPayload_PranshKhubchandani_MSME.jpeg\" id=\"picmem\" title=\"member\"><p>Pransh Khubchandani<p><br>MSME</div></li>",
	
	"II-STM":"<h1>STM</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IISTM_SouravGulia_Mech.jpeg\" id=\"picmem\" title=\"member\"><p>Sourav Gulia<p><br>Mech.</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IISTM_LekhanshRanka_Mech.jpeg\" id=\"picmem\" title=\"member\"><p>Lekhansh Ranka<p><br>Mech.</div></li>",
	
	"II-EPS":"<h1>EPS</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIEPS_GundrevulaNavyaSree_Electrical.jpeg\" id=\"picmem\" title=\"member\"><p>Gundrevula Navya Sree<p><br>Electrical</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIEPS_Niket_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Niket<p><br>ECE</div></li>",
	
	"II-ADCS":"<h1>ADCS</h1><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIADCS_AnushkaMishra_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Anushka Mishra<p><br>ECE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIADCS_MananDubey_ECE.jpeg\" id=\"picmem\" title=\"member\"><p>Manan Dubey<p><br>ECE</div></li><li class=\"product\"><div class=\"member member--picture\"><img src=\"members/IIADCS_ShivamSingh_Electrical.jpeg\" id=\"picmem\" title=\"member\"><p>Shivam Singh<p><br>Electrical</div></li>",
}