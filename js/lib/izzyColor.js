/*Copyright(c)2009,www.izzy2.com/tools*/

;

	
var copyHTML='<a href="http://www.izzywebsite.com/tools" target="_blank" style="background:#000;text-align:center;margin-top:1px;display:block;color:#ccc;font:10px Arial, Helvetica, sans-serif;text-decoration:none"></a>';

function iColorShow(i,i2){

	var eIC=jQuery("#"+i2).position();
	var oldPos=jQuery("#"+i).css('position');
	
	jQuery("#"+i).css({'z-index':'9999','position':'relative'});
	jQuery("#izzyColor").css({'top':eIC.top+(jQuery("#"+i).outerHeight())+"px",'left':(eIC.left)+"px",'position':'absolute'}).fadeIn("fast");
	jQuery("#izzyColorBg").css({'opacity':'0.6','filter':'alpha(opacity=60)','z-index':'9997','background':'#000','position':'fixed','top':0,'left':0,'width':'100%','height':'100%'}).fadeIn("fast");

	var iC=jQuery(i).val();

	jQuery('#colorPreview span').text(iC);
	jQuery('#colorPreview').css('background',iC);
	jQuery('#color').val(iC);
	jQuery(".izzyColors a, #colorPreview").unbind().mouseover(function(){
		var izzyColorText=jQuery(this).attr("rel");
		var izzyColor=jQuery(this).attr("data-clr");
		jQuery(".colortext").html(izzyColorText);
		jQuery(".rallabel").css('background','#'+izzyColor);
		jQuery("#colorPreview").css('background','#'+izzyColor).attr("data-clr",izzyColor);
		jQuery("#"+i).val('#'+izzyColor).css("background",'#'+izzyColor);
	}).click(function(){
		jQuery(".izzyColors a, #colorPreview").unbind();
		var izzyColor="#"+jQuery(this).attr("rel");
		jQuery("#"+i).val(izzyColor).css({'position':'static',"background":izzyColor});
		jQuery("#izzyColorBg").hide();
		jQuery("#izzyColor").fadeOut();
		return false;							
	})

}
	
this.izzyColor=function(){

	var colors=[['CCC58F','1000'], ['D1BC8A','1001'], ['D2B773','1002'], ['F7BA0B','1003'], ['E2B007', '1004'], ['C89F04','1005'], ['E1A100','1006'], ['E79C00','1007'], ['AF8A54','1011'], ['D9C022','1012'], ['E9E5CE','1013'], ['DFCEA1','1014'], ['EADEBD','1015'], ['EAF044','1016'], ['F4B752','1017'], ['F3E03B','1018'], ['A4957D','1019'], ['9A9464','1020'], ['EEC900','1021'],  ['F0CA00','1023'],  ['B89C50','1024'],  ['F5FF00','1026'],  ['A38C15','1027'],  ['FFAB00','1028'], ['DDB20F','1032'], ['FAAB21','1033'], ['EDAB56','1034'], ['A29985','1035'], ['927549','1036'], ['EEA205','1037'], ['DD7907','2000'], ['BE4E20','2001'], ['C63927','2002'], ['FA842B','2003'], ['E75B12','2004'], ['FF2300','2005'], ['FFA421','2007'], ['F3752C','2008'], ['E15501','2009'], ['D4652F','2010'], ['EC7C25','2011'], ['DB6A50','2012'], ['954527','2013'], ['AB2524','3000'], ['A02128','3001'], ['A1232B','3002'], ['8D1D2C','3003'], ['701F29','3004'], ['5E2028','3005'], ['402225','3007'], ['703731','3009'], ['7E292C','3011'], ['CB8D73','3012'], ['9C322E','3013'], ['D47479','3014'], ['E1A6AD','3015'], ['AC4034','3016'], ['D3545F','3017'], ['D14152','3018'], ['C1121C','3020'], ['D56D56','3022'], ['F70000','3024'], ['FF0000','3026'], ['B42041','3027'], ['E72512','3028'], ['AC323B','3031'], ['711521','3032'], ['B24C43','3033'], ['8A5A83','4001'], ['933D50','4002'], ['D15B8F','4003'], ['691639','4004'], ['83639D','4005'], ['992572','4006'], ['4A203B','4007'], ['904684','4008'], ['A38995','4009'], ['C63678','4010'], ['8773A1','4011'], ['6B6880','4012'], ['384C70','5000'], ['1F4764','5001'], ['2B2C7C','5002'], ['2A3756','5003'], ['1D1F2A','5004'], ['154889','5005'], ['41678D','5007'], ['313C48','5008'], ['2E5978','5009'], ['13447C','5010'], ['232C3F','5011'], ['3481B8','5012'], ['232D53','5013'], ['6C7C98','5014'], ['2874B2','5015'], ['0E518D','5017'], ['21888F','5018'], ['1A5784','5019'], ['0B4151','5020'], ['07737A','5021'], ['2F2A5A','5022'], ['4D668E','5023'], ['6A93B0','5024'], ['296478','5025'], ['102C54','5026'], ['327662','6000'], ['28713E','6001'], ['276235','6002'], ['4B573E','6003'], ['0E4243','6004'], ['0F4336','6005'], ['40433B','6006'], ['283424','6007'], ['35382E','6008'], ['26392F','6009'], ['3E753B','6010'], ['68825B','6011'], ['31403D','6012'], ['797C5A','6013'], ['444337','6014'], ['3D403A','6015'], ['026A52','6016'], ['468641','6017'], ['48A43F','6018'], ['B7D9B1','6019'], ['354733','6020'], ['86A47C','6021'], ['3E3C32','6022'], ['008754','6024'], ['53753C','6025'], ['005D52','6026'], ['81C0BB','6027'], ['2D5546','6028'], ['007243','6029'], ['0F8558','6032'], ['478A84','6033'], ['7FB0B2','6034'], ['1B542C','6035'], ['005D4C','6036'], ['25E712','6037'], ['00F700','6038'], ['7E8B92','7000'], ['8F999F','7001'], ['817F68','7002'], ['7A7B6D','7003'], ['9EA0A1','7004'], ['6B716F','7005'], ['756F61','7006'], ['746643','7008'], ['5B6259','7009'], ['575D57','7010'], ['555D61','7011'], ['596163','7012'], ['555548','7013'], ['51565C','7015'], ['373F43','7016'], ['2E3234','7021'], ['4B4D46','7022'], ['818479','7023'], ['474A50','7024'], ['374447','7026'], ['939388','7030'], ['5D6970','7031'], ['B9B9A8','7032'], ['818979','7033'], ['939176','7034'], ['CBD0CC','7035'], ['9A9697','7036'], ['7C7F7E','7037'], ['B4B8B0','7038'], ['6B695F','7039'], ['9DA3A6','7040'], ['8F9695','7042'], ['4E5451','7043'], ['BDBDB2','7044'], ['91969A','7045'], ['82898E','7046'], ['CFD0CF','7047'], ['888175','7048'], ['887142','8000'], ['9C6B30','8001'], ['7B5141','8002'], ['80542F','8003'], ['8F4E35','8004'], ['6F4A2F','8007'], ['6F4F28','8008'], ['5A3A29','8011'], ['673831','8012'], ['49392D','8014'], ['633A34','8015'], ['4C2F26','8016'], ['44322D','8017'], ['3F3A3A','8019'], ['211F20','8022'], ['A65E2F','8023'], ['79553C','8024'], ['755C49','8025'], ['4E3B31','8028'], ['763C28','8029'], ['FDF4E3','9001'], ['E7EBDA','9002'], ['F4F4F4','9003'], ['282828','9004'], ['0A0A0A','9005'], ['A5A5A5','9006'], ['8F8F8F','9007'], ['FFFFFF','9010'], ['1C1C1C','9011'], ['F6F6F6','9016'], ['1E1E1E','9017'], ['D7D7D7','9018'], ['9C9C9C','9022'], ['828282','9023'] ];
	
	var output='<div class="izzyColors" style="width:266px;overflow:auto; border:1px solid black; background:#607d8b;padding:1px 0 0 0px">';
	for (i=0;i<colors.length;i++){
		output+='<a href="#" rel="'+colors[i][1]+'" data-clr="'+ colors[i][0] +'" style="height:10px;width:10px;display:block;text-indent:-9999px;float:left;background:#'+colors[i][0]+';margin:0 1px 1px 0"></a>';
	}
	output+='</div>';
	output+='<div style="background:#fff;cursor:pointer;height:35px;text-align:center;padding-top:20px" id="colorPreview"></div>';

	if(typeof copyHTML !== 'undefined')
	output+=copyHTML;

	jQuery("input.izzyColor").each(function(i){

		if(i==0){

			jQuery(document.createElement("div")).attr("id","izzyColor").css('display','none').html(output).appendTo("body");
			jQuery(document.createElement("div")).attr("id","izzyColorBg").click(
					function(){
						jQuery("#izzyColorBg").hide();
						jQuery("#izzyColor").fadeOut();
						jQuery("input.izzyColor").css({'position':'static'});
					}
				).appendTo("body");

			jQuery('#izzyColor').css({'border':'1px solid #000','background':'#fff','padding':'1px','z-index':9999});

		}

		jQuery(this).css("backgroundColor",jQuery(this).val())
		.before('<label class="rallabel" for="color" id="icp_'+this.id+'" onclick="iColorShow(\''+this.id+'\',\'icp_'+this.id+'\')"></label>');

	});
};
jQuery(function(){izzyColor()});