function RunStarterJs(){
    wibiyaToolbar.framework.ReadProfile();
wibiyaToolbar.framework.fun_MinMaxCookie("check");

// minimize toolbar button handlers
jQuery(".wibiyaToolbar_right_normal").mouseover(function(){
    jQuery(this).hand().removeClass("wibiyaToolbar_right_normal").addClass("wibiyaToolbar_right_over");
}).mouseout(function(){
    jQuery(this).removeClass("wibiyaToolbar_right_over").addClass("wibiyaToolbar_right_normal");
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(21,0,1,0,"");
    wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
});

//maximize button handler
jQuery(".wibiyaToolbar_minimized_right_normal").mouseover(function() {
    jQuery(this).hand().removeClass("wibiyaToolbar_minimized_right_normal").addClass("wibiyaToolbar_minimized_right_over");
}).mouseout(function(){
    jQuery(this).removeClass("wibiyaToolbar_minimized_right_over").addClass("wibiyaToolbar_minimized_right_normal");
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(22,0,1,0,"");
    wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
});

jQuery("#wibiyaToolbar_minimized_center").mouseover(function() {
    jQuery(this).hand();
    jQuery(".wibiyaToolbar_minimized_right_normal").removeClass("wibiyaToolbar_minimized_right_normal").addClass("wibiyaToolbar_minimized_right_over");
}).mouseout(function(){
    jQuery(".wibiyaToolbar_minimized_right_over").removeClass("wibiyaToolbar_minimized_right_over").addClass("wibiyaToolbar_minimized_right_normal");
}).click(function(){
    jQuery(".wibiyaToolbar_minimized_right_over").removeClass("wibiyaToolbar_minimized_right_over").addClass("wibiyaToolbar_minimized_right_normal");
    wibiyaToolbar.framework.fun_RegisterAction_extended(22,0,1,0,"");
    wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
});

jQuery('#wibiyaToolbar_search_providers_back_1').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_search_providers_normal').addClass('wibiyaToolbar_search_providers_over');
    if (jQuery('#wibiyaToolbar_SearchProviders_1').attr('menu_opened')=='no'){
	jQuery(this).parent().find('.wibiyaToolbar_tooltip').vshow();
    }
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_search_providers_over').addClass('wibiyaToolbar_search_providers_normal').parent().find('.wibiyaToolbar_tooltip').vhide();
}).click(function(){
    _fun_wibiya_openSearchProviders_1(jQuery(this));
});

jQuery('.wibiyaToolbar_search_providers_menu .wibiyaToolbar_search_menuItem_normal').click(function(){
    jQuery('#wibiyaToolbar_SearchProviders_1').slideUp(300).attr('menu_opened','no');
    var _sp = jQuery('#wibiyaToolbar_SearchProviders_1').attr('selected_provider');
    var _item_index = jQuery(this).attr('index');
    if (_sp!=_item_index) {
	jQuery('#wibiyaToolbar_SearchProviders_1').attr('selected_provider',_item_index);
	var _bi = jQuery(this).find('.wibiyaToolbar_menuImg').attr('src');
	jQuery('#wibiyaToolbar_search_providers_1').find('#wibiyaToolbar_search_provider_icon_1').attr('src',_bi);
    }
});

jQuery('#wibiyaToolbar_search_textbox_input_1').keydown(function(event){
    if(event.keyCode==13) {
	var _actionType = 'search';
	var _appId = jQuery(this).parent().parent().attr('appId');
	var _index = jQuery('#wibiyaToolbar_SearchProviders_1').attr('selected_provider');
	var _searchQuery = jQuery(this).val();
	if (_searchQuery!='Search..'){
	    wibiyaToolbar.framework.fun_RegisterAction_extended(4,217158,1,0,'{"provider":"'+searchProviders[_index].searchProviderName+'","term":"'+_searchQuery+'"}');
	    fun_wibiya_Search_1(_index,_searchQuery);
	}
    }
});

jQuery('#wibiyaToolbar_search_textbox_button_1').mouseover(function () {
    jQuery(this).hand();
}).click(function(){
    var _actionType = 'search';
    var _appId = jQuery(this).parent().parent().attr('appId');
    var _index = jQuery('#wibiyaToolbar_SearchProviders_1').attr('selected_provider');
    var _searchQuery = jQuery(this).parent().find('#wibiyaToolbar_search_textbox_input_1').val();
    if (_searchQuery!='Search..'){
	wibiyaToolbar.framework.fun_RegisterAction_extended(4,217158,1,0,'{"provider":"'+searchProviders[_index].searchProviderName+'","term":"'+_searchQuery+'"}');
	fun_wibiya_Search_1(_index,_searchQuery);
    }
});

jQuery('#wibiyaToolbar_search_textbox_input_1').focus(function(){
    if (jQuery(this).val()==jQuery(this).attr('defaultValue')){
	jQuery(this).removeClass().addClass('wibiyaToolbar_searchbox_on').addClass('wibiyaToolbar_search_textbox_input').val('');
    }
}).blur(function(){
    if (jQuery(this).val()==''){
	jQuery(this).removeClass().addClass('wibiyaToolbar_searchbox_default').addClass('wibiyaToolbar_search_textbox_input').val(jQuery(this).attr('defaultValue'));
    }
});

jQuery('.wibiyaToolbar_SearchmenuItem_normal').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_SearchmenuItem_normal').addClass('wibiyaToolbar_SearchmenuItem_over');
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_SearchmenuItem_over').addClass('wibiyaToolbar_SearchmenuItem_normal');
}).click(function(){
    var menuItem = jQuery(this);
    index = menuItem.attr('index');
    jQuery('#wibiyaToolbar_SearchProviders_1').slideUp(300).attr('menu_opened','no');
    var _sp = jQuery('#wibiyaToolbar_SearchProviders_1').attr('selected_provider');
    var _item_index = index;
    if (_sp!=_item_index){
	jQuery('#wibiyaToolbar_SearchProviders_1').attr('selected_provider',_item_index);
	var _bi = menuItem.find('.wibiyaToolbar_menuImg').attr('src');
	jQuery('#wibiyaToolbar_search_providers_1').find('#wibiyaToolbar_search_provider_icon_1').attr('src',_bi);
    }
});jQuery('#wibiyaToolbar_item_normal_2').mouseover(function(){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')=='no'){
	jQuery(this).hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').parent().find('.wibiyaToolbar_tooltip').vshow();
    }
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').parent().find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(e){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')=='no'){
	wibiyaToolbar.framework.fun_RegisterAction_extended(45,217157,1,0,'');
	openMenu_2(jQuery(this).find('.wibiyaToolbar_menu'));
    }
});

jQuery('#wibiyaToolbar_item_normal_2').find('.wibiyaToolbar_menuItem_normal').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_menuItem_normal').addClass('wibiyaToolbar_menuItem_over');
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_menuItem_over').addClass('wibiyaToolbar_menuItem_normal');
}).click(function(e){
    jQuery('.itranslate_loader').remove();
    jQuery('div[applicationname="iTranslate"]').find('.TBcontainerDiv').prepend('<img src="http://cdn.wibiya.com/Graphics_Toolbar/UI/fbloader.gif" class="wibiyaToolbar_itemImg itranslate_loader" />');
    var _appId = jQuery(this).parent().attr('appId');
    _itemIndex = jQuery(this).attr('index');
    var _action_options = {
	itemIndex: _itemIndex,
	object: jQuery(this)
    };
    wibiyaToolbar.framework.fun_RegisterAction_extended(45,217157,2,0,'{"itemName" :"'+itemsNodes_2[_action_options.itemIndex].name+'"}');
    translateTo(itemsNodes_2[_action_options.itemIndex].lnCode);
});jQuery('#wibiyaToolbar_item_normal_3').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').find('.wibiyaToolbar_tooltip').vshow();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(7,217161,1,0,'');
    wibiyaToolbar.framework.fun_OpenResentPostMenu_3();
});

jQuery('#wibiyaToolbar_navigator_rand_3').mouseover(function(){
    jQuery(this).hand().find('.wibiyaToolbar_tooltip').vshow();
}).mouseout(function(){
    jQuery(this).find('.wibiyaToolbar_tooltip').vhide();
}).click(function(){
    wibiyaToolbar.framework.fun_GoToRandomPost_3();
});jQuery('.wibiyaToolbar_item_normal_4').mouseover(function(){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')!='yes'){
	jQuery(this).hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').find('.wibiyaToolbar_tooltip').vshow();
    }
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(31,217162,2,0,'');
    var _action_options =
        {
        sender : jQuery(this).attr('id')
    };
    wibiyaToolbar.framework.fun_GeneralApp_4(_action_options);
});jQuery('#wibiyaToolbar_item_normal_5').mouseover(function(){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')=='no'){
	jQuery(this).hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').parent().find('.wibiyaToolbar_tooltip').vshow();
    }
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').parent().find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(e){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')=='no'){
	wibiyaToolbar.framework.fun_RegisterAction_extended(5,217211,1,0,'');
	OpenLinkMenu_5(jQuery(this).find('.wibiyaToolbar_menu'));
    }
});

jQuery('#wibiyaToolbar_item_normal_5').find('.wibiyaToolbar_menuItem_normal').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_menuItem_normal').addClass('wibiyaToolbar_menuItem_over');
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_menuItem_over').addClass('wibiyaToolbar_menuItem_normal');
}).click(function(e){
    var _appId = jQuery(this).parent().attr('appId');
    _itemIndex = jQuery(this).attr('index');
    var _action_options = {
	itemIndex: _itemIndex,
	object: jQuery(this)
    };
    wibiyaToolbar.framework.fun_RegisterAction_extended(5,217211,2,0,'{"linkName":"'+LinkNodes_5[_action_options.itemIndex].name+'"}');
    LinkClicked_5(_action_options);
});jQuery('.wibiyaToolbar_item_normal_6').linkBehavior().click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(28,217216,1,0,'');
    wibiyaToolbar.framework.fun_functionBtn_6();
});jQuery('.wibiyaToolbar_item_normal_7').mouseover(function(){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')!='yes'){
	jQuery(this).hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').find('.wibiyaToolbar_tooltip').vshow();
    }
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(38,217160,2,0,'');
    var _action_options =
        {
        sender : jQuery(this).attr('id')
    };
    wibiyaToolbar.framework.fun_GeneralApp_7(_action_options);
});jQuery('.wibiyaToolbar_item_normal_8').mouseover(function(){ 
    jQuery(this).hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').find('.wibiyaToolbar_tooltip').vshow();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(27,217159,1,0,'');
    wibiyaToolbar.framework.fun_CodeApp_8();
});jQuery('#wibiyaToolbar_item_normal_9').mouseover(function(){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')=='no'){
	jQuery(this).hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').parent().find('.wibiyaToolbar_tooltip').vshow();
    }
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').parent().find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(e){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')=='no'){
	wibiyaToolbar.framework.fun_RegisterAction_extended(14,217164,1,0,'');
	OpenLinkMenu_9(jQuery(this).find('.wibiyaToolbar_menu'));
    }
});

jQuery('#wibiyaToolbar_item_normal_9').find('.wibiyaToolbar_menuItem_normal').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_menuItem_normal').addClass('wibiyaToolbar_menuItem_over');
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_menuItem_over').addClass('wibiyaToolbar_menuItem_normal');
}).click(function(e){
    var _appId = jQuery(this).parent().attr('appId');
    _itemIndex = jQuery(this).attr('index');
    var _action_options = {
	itemIndex: _itemIndex,
	object: jQuery(this)
    };
    wibiyaToolbar.framework.fun_RegisterAction_extended(14,217164,2,0,'{"linkName":"'+LinkNodes_9[_action_options.itemIndex].name+'"}');
    LinkClicked_9(_action_options);
});jQuery('.wibiyaToolbar_item_normal_10').mouseover(function(){
    if (jQuery(this).find('.wibiyaToolbar_menu').attr('menu_opened')!='yes'){
	jQuery(this).hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').find('.wibiyaToolbar_tooltip').vshow();
    }
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(13,217163,2,0,'');
    var _action_options =
        {
        sender : jQuery(this).attr('id')
    };
    wibiyaToolbar.framework.fun_GeneralApp_10(_action_options);
});
    jQuery("#wibiyaToolbar").trigger("toolbarLoaded");
	//jQuery("body").trigger("toolbarLoaded");
}





            wibiyaToolbar.Data = {"SiteName":"Gabriele Guizzardi","SiteUrl":"http:\/\/www.guizzardi.net","ThemeId":"19","LangId":"6","Favicon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Favicons\/Defaultfavicon26528_28017.png","IconType":"2","Framework":"jQuery"};
            wibiyaToolbar.ToolbarHTML = "<table id=\"wibiyaToolbar_tbl\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">    <tbody><tr>    <td id=\"wibiyaToolbar_left_main\" width=\"15\" align=\"left\" valign=\"top\" class=\"wibiyaToolbar_td\"><div id=\"wibiyaToolbar_left\" class=\"wibiyaToolbar_td\"></div>    </td>    <td id=\"wibiyaToolbar_center\" class=\"wibiyaToolbar_td\" valign=\"bottom\" style=\"padding-top: 4px\">                <div class=\"itemLeft\">        <div id=\"wibiyaToolbar_search_container_1\" class=\"wibiyaToolbar_search_container\" appId=\"4\" toolbarAppId=\"217158\" Appindex=\"1\" applicationName=\"Search\"><div id=\"wibiyaToolbar_search_providers_back_1\" class=\"wibiyaToolbar_search_providers_normal wibiyaToolbar_search_providers_back\">    <div id=\"wibiyaToolbar_search_providers_1\" class=\"wibiyaToolbar_search_providers\" style=\"overflow: hidden\"><div id=\"wibiyaToolbar_search_providers_icon_1\" class=\"wibiyaToolbar_search_providers_icon\">    <img width=\"16\" height=\"16\" id=\"wibiyaToolbar_search_provider_icon_1\" class=\"wibiyaToolbar_search_provider_icon\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Favicons/Defaultfavicon26528_28017.png\" /></div><div id=\"wibiyaToolbar_search_providers_arrow_1\" class=\"wibiyaToolbar_search_providers_arrow\">&nbsp;</div>    </div></div><div id=\"wibiyaToolbar_search_textbox_back_1\" class=\"wibiyaToolbar_search_textbox_on wibiyaToolbar_search_textbox_back\">    <input type=\"text\" name=\"wibiyaSearchQuery\" id=\"wibiyaToolbar_search_textbox_input_1\" defaultValue=\"Cerca...\" class=\"wibiyaToolbar_search_textbox_input wibiyaToolbar_searchbox_default\" value=\"Cerca...\" />    <div id=\"wibiyaToolbar_search_textbox_button_1\" class=\"wibiyaToolbar_search_textbox_button\"></div></div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_left\" style=\"visibility: hidden\">    <span class=\"wibiyaToolbar_tooltip_text\">Cambia ricerca</span></div><div selected_provider=\"0\" menu_opened=\"no\" id=\"wibiyaToolbar_SearchProviders_1\" class=\"wibiyaToolbar_search_menu\" style=\"display: none\">    <ul id=\"wibiyaToolbar_search_providers_menu_1\" class=\"wibiyaToolbar_Menu_UL\" appId=\"4\"><li class=\"wibiyaToolbar_SearchmenuItem_normal\" index=\"0\">    <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Favicons/Defaultfavicon26528_28017.png\" class=\"wibiyaToolbar_menuImg\"/>    <span class=\"wibiyaToolbar_menuText\">Site Search</span></li><li class=\"wibiyaToolbar_SearchmenuItem_normal\" index=\"1\">    <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/google.png\" class=\"wibiyaToolbar_menuImg\"/>    <span class=\"wibiyaToolbar_menuText\">Google Search</span></li>    </ul></div>    </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemLeft\">        <div class=\"wibiyaToolbar_item_normal_2 wibiyaToolbar_item_normal\" Appindex=\"2\" id=\"wibiyaToolbar_item_normal_2\" appId=\"45\" toolbarAppId=\"217157\" appType=\"\" windowMethod=\"3\" applicationName=\"iTranslate\">        <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/globe.png\" class=\"wibiyaToolbar_itemImg WibiyaMinRepresentation\" style=\"display:none;\" show=\"no\"/>        <div class=\"TBcontainerDiv \" show=\"yes\">            <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/globe.png\" class=\"wibiyaToolbar_itemImg\" /><span class=\"wibiyaToolbar_itemText\">Traduci</span>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_left\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Traduci questa pagina</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:180px;display:none;\">            <div id=\"wibiyaToolbar_menu_top\" style=\"width:180px;\">                <div id=\"wibiyaToolbar_menu_top_left\"><div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div></div>                <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:160px;\"><div class=\"wibiya_toolbar_middle_gradian\"></div><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                    <div class=\"wibiyaToolbar_menu_title\"><table style=\"height:28px;margin-top:5px;\"><tr valign=\"middle\" align=\"center\"><td valign=\"middle\" align=\"center\">                           <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/globe.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/></td><td class=\"wibiyaToolbar_menu_caption\" valign=\"middle\" align=\"left\" width=\"220\">Traduci</td></tr></table></div><div class=\"wibiyaToolbar_wiwi_close_a\" style=\"display: inline; float: right; margin-top: 8px;\"></div>                </div>                <div id=\"wibiyaToolbar_menu_top_right\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">               <div class=\"wibiya_toolbar_side_70per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div><div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div>            </div>            <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">                <tr>                    <td id=\"wibiyaToolbar_menu_left\">                    </td>                    <td class=\"wibiyaToolbar_menu_body\" style=\"width:170px;\">                        <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"45\">                            <li class=\"wibiyaToolbar_menuItem_normal\" index=\"0\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_china.png\" />    <span class=\"wibiyaToolbar_menuText\">Chinese</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"1\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_netherlands.png\" />    <span class=\"wibiyaToolbar_menuText\">Dutch</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"2\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_usa.png\" />    <span class=\"wibiyaToolbar_menuText\">English</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"3\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_france.png\" />    <span class=\"wibiyaToolbar_menuText\">French</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"4\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_germany.png\" />    <span class=\"wibiyaToolbar_menuText\">German</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"5\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_italy.png\" />    <span class=\"wibiyaToolbar_menuText\">Italian</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"6\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_japan.png\" />    <span class=\"wibiyaToolbar_menuText\">Japanese</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"7\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_korea.png\" />    <span class=\"wibiyaToolbar_menuText\">Korean</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"8\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_portugal.png\" />    <span class=\"wibiyaToolbar_menuText\">Portuguese</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"9\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_russia.png\" />    <span class=\"wibiyaToolbar_menuText\">Russian</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"10\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_spain.png\" />    <span class=\"wibiyaToolbar_menuText\">Spanish</span></li>                        </ul>                    </td>                    <td id=\"wibiyaToolbar_menu_right\">                    </td>                </tr>            </table>        </div>    </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemLeft \">            <div class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_3 wibiyaToolbar_BtnHover\" Appindex=\"3\" id=\"wibiyaToolbar_item_normal_3\" appId=\"7\" toolbarAppId=\"217161\" appType=\"\" windowMethod=\"0\" applicationName=\"Navigator\">            <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/recent_dark.png\" class=\"wibiyaToolbar_itemImg WibiyaMinRepresentation\" style=\"display:none;\" show=\"no\"/>            <div class=\"TBcontainerDiv wibiyaToolbar_GeneralBtn wibiyaToolbar_button\" show=\"yes\">            <div class=\'wibiyaToolbar_button_left\'></div><div class=\'wibiyaToolbar_button_center\'><img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/recent_dark.png\" class=\"wibiyaToolbar_itemImg\" /><span class=\"wibiyaToolbar_itemText\">Post recenti</span></div><div class=\'wibiyaToolbar_button_right\'></div>            </div>    <div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_left\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Post recenti</span></div>                </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemLeft\">        <div class=\"wibiyaToolbar_item_normal_4\" Appindex=\"4\" id=\"wibiyaToolbar_item_normal_4\" appId=\"31\" toolbarAppId=\"217162\" appType=\"\" windowMethod=\"0\" applicationName=\"WhosAmungUs\">        <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/wau_dark.png\" class=\"wibiyaToolbar_itemImg WibiyaMinRepresentation\" style=\"display:none;\" show=\"no\"/>        <div class=\"TBcontainerDiv \" show=\"yes\">            <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/wau_dark.png\" class=\"wibiyaToolbar_itemImg\" /><span class=\"wibiyaToolbar_itemText\">Online</span>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_left\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">View real time stats (popular posts, dynamic map)</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:180px;display:none;\">            <div id=\"wibiyaToolbar_menu_top\" style=\"width:180px;\">                <div id=\"wibiyaToolbar_menu_top_left\"><div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div></div>                <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:160px;\"><div class=\"wibiya_toolbar_middle_gradian\"></div><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                    <div class=\"wibiyaToolbar_menu_title\"><table style=\"height:28px;margin-top:5px;\"><tr valign=\"middle\" align=\"center\"><td valign=\"middle\" align=\"center\">                           <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/wau_dark.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/></td><td class=\"wibiyaToolbar_menu_caption\" valign=\"middle\" align=\"left\" width=\"220\">Online</td></tr></table></div><div class=\"wibiyaToolbar_wiwi_close_a\" style=\"display: inline; float: right; margin-top: 8px;\"></div>                </div>                <div id=\"wibiyaToolbar_menu_top_right\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">               <div class=\"wibiya_toolbar_side_70per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div><div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div>            </div>            <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">                <tr>                    <td id=\"wibiyaToolbar_menu_left\">                    </td>                    <td class=\"wibiyaToolbar_menu_body\" style=\"width:170px;\">                        <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"31\">                                                    </ul>                    </td>                    <td id=\"wibiyaToolbar_menu_right\">                    </td>                </tr>            </table>        </div>    </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemLeft\">        <div class=\"wibiyaToolbar_item_normal_5\" Appindex=\"5\" id=\"wibiyaToolbar_item_normal_5\" appId=\"5\" toolbarAppId=\"217211\" appType=\"\" windowMethod=\"3\" applicationName=\"Translate\">        <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/globe_dark.png\" class=\"wibiyaToolbar_itemImg WibiyaMinRepresentation\" style=\"display:none;\" show=\"no\"/>        <div class=\"TBcontainerDiv \" show=\"yes\">            <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/globe_dark.png\" class=\"wibiyaToolbar_itemImg\" /><span class=\"wibiyaToolbar_itemText\">Traduci</span>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_left\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Traduci questa pagina</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:180px;display:none;\">            <div id=\"wibiyaToolbar_menu_top\" style=\"width:180px;\">                <div id=\"wibiyaToolbar_menu_top_left\"><div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div></div>                <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:160px;\"><div class=\"wibiya_toolbar_middle_gradian\"></div><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                    <div class=\"wibiyaToolbar_menu_title\"><table style=\"height:28px;margin-top:5px;\"><tr valign=\"middle\" align=\"center\"><td valign=\"middle\" align=\"center\">                           <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/globe_dark.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/></td><td class=\"wibiyaToolbar_menu_caption\" valign=\"middle\" align=\"left\" width=\"220\">Traduci</td></tr></table></div><div class=\"wibiyaToolbar_wiwi_close_a\" style=\"display: inline; float: right; margin-top: 8px;\"></div>                </div>                <div id=\"wibiyaToolbar_menu_top_right\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">               <div class=\"wibiya_toolbar_side_70per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div><div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div>            </div>            <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">                <tr>                    <td id=\"wibiyaToolbar_menu_left\">                    </td>                    <td class=\"wibiyaToolbar_menu_body\" style=\"width:170px;\">                        <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"5\">                            <li class=\"wibiyaToolbar_menuItem_normal\" index=\"0\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_china.png\" />    <span class=\"wibiyaToolbar_menuText\">Chinese</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"1\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_netherlands.png\" />    <span class=\"wibiyaToolbar_menuText\">Dutch</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"2\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_usa.png\" />    <span class=\"wibiyaToolbar_menuText\">English</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"3\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_france.png\" />    <span class=\"wibiyaToolbar_menuText\">French</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"4\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_germany.png\" />    <span class=\"wibiyaToolbar_menuText\">German</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"5\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_italy.png\" />    <span class=\"wibiyaToolbar_menuText\">Italian</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"6\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_japan.png\" />    <span class=\"wibiyaToolbar_menuText\">Japanese</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"7\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_korea.png\" />    <span class=\"wibiyaToolbar_menuText\">Korean</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"8\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_portugal.png\" />    <span class=\"wibiyaToolbar_menuText\">Portuguese</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"9\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_russia.png\" />    <span class=\"wibiyaToolbar_menuText\">Russian</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"10\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/flag_spain.png\" />    <span class=\"wibiyaToolbar_menuText\">Spanish</span></li>                        </ul>                    </td>                    <td id=\"wibiyaToolbar_menu_right\">                    </td>                </tr>            </table>        </div>    </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemLeft\">        <div class=\"wibiyaToolbar_item_normal_6 wibiyaToolbar_item_normal\" Appindex=\"6\" id=\"wibiyaToolbar_item_normal_6\" appId=\"28\" toolbarAppId=\"217216\" appType=\"\" windowMethod=\"1\" applicationName=\"ScrollToTop\">        <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/top_dark.png\" class=\"wibiyaToolbar_itemImg WibiyaMinRepresentation\" style=\"display:none;\" show=\"no\"/>        <div class=\"TBcontainerDiv \" show=\"yes\">            <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/top_dark.png\" class=\"wibiyaToolbar_itemImg\" />        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_left\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Scroll to the top of the page</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:***WIDTH***px;display:none;\">            <div id=\"wibiyaToolbar_menu_top\" style=\"width:***WIDTH***px;\">                <div id=\"wibiyaToolbar_menu_top_left\"><div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div></div>                <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:***WIDTHTOP***px;\"><div class=\"wibiya_toolbar_middle_gradian\"></div><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                    <div class=\"wibiyaToolbar_menu_title\"><table style=\"height:28px;margin-top:5px;\"><tr valign=\"middle\" align=\"center\"><td valign=\"middle\" align=\"center\">                           <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/top_dark.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/></td><td class=\"wibiyaToolbar_menu_caption\" valign=\"middle\" align=\"left\" width=\"220\">***ITEMTEXT***</td></tr></table></div><div class=\"wibiyaToolbar_wiwi_close_a\" style=\"display: inline; float: right; margin-top: 8px;\"></div>                </div>                <div id=\"wibiyaToolbar_menu_top_right\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">               <div class=\"wibiya_toolbar_side_70per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div><div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div>            </div>            <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">                <tr>                    <td id=\"wibiyaToolbar_menu_left\">                    </td>                    <td class=\"wibiyaToolbar_menu_body\" style=\"width:***WIDTHBODY***px;\">                        <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"28\">                            ***LINK_ITEMS***                        </ul>                    </td>                    <td id=\"wibiyaToolbar_menu_right\">                    </td>                </tr>            </table>        </div>    </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemRight\">        <div class=\"wibiyaToolbar_item_normal_7 wibiyaToolbar_BtnHover\" Appindex=\"7\" id=\"wibiyaToolbar_item_normal_7\" appId=\"38\" toolbarAppId=\"217160\" appType=\"\" windowMethod=\"0\" applicationName=\"TinyChatSite\">        <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/chat_dark_light.png\" class=\"wibiyaToolbar_itemImg WibiyaMinRepresentation\" style=\"display:none;\" show=\"no\"/>        <div class=\"TBcontainerDiv wibiyaToolbar_button\" show=\"yes\">            <div class=\'wibiyaToolbar_button_left\'></div><div class=\'wibiyaToolbar_button_center\'><img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/chat_dark_light.png\" class=\"wibiyaToolbar_itemImg\" /><span class=\"wibiyaToolbar_itemText\">Join Chat</span></div><div class=\'wibiyaToolbar_button_right\'></div>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_right\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Join our live chat</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:180px;display:none;\">            <div id=\"wibiyaToolbar_menu_top\" style=\"width:180px;\">                <div id=\"wibiyaToolbar_menu_top_left\"><div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div></div>                <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:160px;\"><div class=\"wibiya_toolbar_middle_gradian\"></div><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                    <div class=\"wibiyaToolbar_menu_title\"><table style=\"height:28px;margin-top:5px;\"><tr valign=\"middle\" align=\"center\"><td valign=\"middle\" align=\"center\">                           <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/chat_dark_light.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/></td><td class=\"wibiyaToolbar_menu_caption\" valign=\"middle\" align=\"left\" width=\"220\">Join Chat</td></tr></table></div><div class=\"wibiyaToolbar_wiwi_close_a\" style=\"display: inline; float: right; margin-top: 8px;\"></div>                </div>                <div id=\"wibiyaToolbar_menu_top_right\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">               <div class=\"wibiya_toolbar_side_70per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div><div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div>            </div>            <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">                <tr>                    <td id=\"wibiyaToolbar_menu_left\">                    </td>                    <td class=\"wibiyaToolbar_menu_body\" style=\"width:170px;\">                        <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"38\">                                                    </ul>                    </td>                    <td id=\"wibiyaToolbar_menu_right\">                    </td>                </tr>            </table>        </div>    </div></div><div class=\"itemRight\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemRight \">    <div class=\"wibiyaToolbar_item_normal_8 wibiyaToolbar_BtnHover\" Appindex=\"8\" id=\"wibiyaToolbar_item_normal_8\" appId=\"27\" toolbarAppId=\"217159\" appType=\"\" windowMethod=\"0\" applicationName=\"FanPage\"><div class=\"wibiyaToolbar_button wibiyaToolbar_GeneralBtn\" appId=\"27\" appType=\"\" windowMethod=\"0\"><div class=\'wibiyaToolbar_button_left\'></div><div class=\'wibiyaToolbar_button_center\'><img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/fanpage_dark_light.png\" class=\"wibiyaToolbar_itemImg\" /><span class=\"wibiyaToolbar_itemText\">Diventare un fan</span></div><div class=\'wibiyaToolbar_button_right\'></div>    <div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_right\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Vai alla nostra Fan page</span></div></div>    </div></div><div class=\"itemRight\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemRight\">        <div class=\"wibiyaToolbar_item_normal_9\" Appindex=\"9\" id=\"wibiyaToolbar_item_normal_9\" appId=\"14\" toolbarAppId=\"217164\" appType=\"\" windowMethod=\"99\" applicationName=\"Share\">        <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_dark.png\" class=\"wibiyaToolbar_itemImg WibiyaMinRepresentation\" style=\"display:none;\" show=\"no\"/>        <div class=\"TBcontainerDiv \" show=\"yes\">            <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_dark.png\" class=\"wibiyaToolbar_itemImg\" /><span class=\"wibiyaToolbar_itemText\">Condividi</span>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_right\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Condividi questo post</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:180px;display:none;\">            <div id=\"wibiyaToolbar_menu_top\" style=\"width:180px;\">                <div id=\"wibiyaToolbar_menu_top_left\"><div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div></div>                <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:160px;\"><div class=\"wibiya_toolbar_middle_gradian\"></div><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                    <div class=\"wibiyaToolbar_menu_title\"><table style=\"height:28px;margin-top:5px;\"><tr valign=\"middle\" align=\"center\"><td valign=\"middle\" align=\"center\">                           <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_dark.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/></td><td class=\"wibiyaToolbar_menu_caption\" valign=\"middle\" align=\"left\" width=\"220\">Condividi</td></tr></table></div><div class=\"wibiyaToolbar_wiwi_close_a\" style=\"display: inline; float: right; margin-top: 8px;\"></div>                </div>                <div id=\"wibiyaToolbar_menu_top_right\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">               <div class=\"wibiya_toolbar_side_70per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div><div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div>            </div>            <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">                <tr>                    <td id=\"wibiyaToolbar_menu_left\">                    </td>                    <td class=\"wibiyaToolbar_menu_body\" style=\"width:170px;\">                        <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"14\">                            <li class=\"wibiyaToolbar_menuItem_normal\" index=\"0\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_email.png\" />    <span class=\"wibiyaToolbar_menuText\">Email This</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"1\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_fb.png\" />    <span class=\"wibiyaToolbar_menuText\">Facebook</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"2\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_twitter.png\" />    <span class=\"wibiyaToolbar_menuText\">Twitter</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"3\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_delicious.png\" />    <span class=\"wibiyaToolbar_menuText\">Delicious</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"4\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_stumble.png\" />    <span class=\"wibiyaToolbar_menuText\">Stumbleupon</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"5\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_digg.png\" />    <span class=\"wibiyaToolbar_menuText\">Digg</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"6\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_buzz.png\" />    <span class=\"wibiyaToolbar_menuText\">Buzz up!</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"7\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_myspace.png\" />    <span class=\"wibiyaToolbar_menuText\">MySpace</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"8\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_ff.png\" />    <span class=\"wibiyaToolbar_menuText\">FriendFeed</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"9\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_technorati.png\" />    <span class=\"wibiyaToolbar_menuText\">Technorati</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"10\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_google.png\" />    <span class=\"wibiyaToolbar_menuText\">G Bookmarks</span></li><li class=\"wibiyaToolbar_menuItem_normal\" index=\"11\">    <img class=\"wibiyaToolbar_menuImg\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_live.png\" />    <span class=\"wibiyaToolbar_menuText\">Live</span></li>                        </ul>                    </td>                    <td id=\"wibiyaToolbar_menu_right\">                    </td>                </tr>            </table>        </div>    </div></div><div class=\"itemRight\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemRight\">        <div class=\"wibiyaToolbar_item_normal_10\" Appindex=\"10\" id=\"wibiyaToolbar_item_normal_10\" appId=\"13\" toolbarAppId=\"217163\" appType=\"\" windowMethod=\"1\" applicationName=\"Rss\">        <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/rss_dark.png\" class=\"wibiyaToolbar_itemImg WibiyaMinRepresentation\" style=\"display:none;\" show=\"no\"/>        <div class=\"TBcontainerDiv \" show=\"yes\">            <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/rss_dark.png\" class=\"wibiyaToolbar_itemImg\" />        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_right\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Iscriviti al nostro Feed RSS</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:180px;display:none;\">            <div id=\"wibiyaToolbar_menu_top\" style=\"width:180px;\">                <div id=\"wibiyaToolbar_menu_top_left\"><div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div></div>                <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:160px;\"><div class=\"wibiya_toolbar_middle_gradian\"></div><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                    <div class=\"wibiyaToolbar_menu_title\"><table style=\"height:28px;margin-top:5px;\"><tr valign=\"middle\" align=\"center\"><td valign=\"middle\" align=\"center\">                           <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/rss_dark.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/></td><td class=\"wibiyaToolbar_menu_caption\" valign=\"middle\" align=\"left\" width=\"220\">Iscriviti al nostro Feed RSS</td></tr></table></div><div class=\"wibiyaToolbar_wiwi_close_a\" style=\"display: inline; float: right; margin-top: 8px;\"></div>                </div>                <div id=\"wibiyaToolbar_menu_top_right\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">               <div class=\"wibiya_toolbar_side_70per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div><div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div>            </div>            <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">                <tr>                    <td id=\"wibiyaToolbar_menu_left\">                    </td>                    <td class=\"wibiyaToolbar_menu_body\" style=\"width:170px;\">                        <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"13\">                                                    </ul>                    </td>                    <td id=\"wibiyaToolbar_menu_right\">                    </td>                </tr>            </table>        </div>    </div></div><div class=\"itemRight\">    <div class=\"wibiyaToolbar_divider\"></div></div>            </td>                 <td id=\"wibiyaToolbar_right\" class=\"wibiyaToolbar_td wibiyaToolbar_right_normal\" style=\"width:35px\"></td></tr>    </tbody></table><div><iframe height=\"1\" width=\"1\" id=\"statFrame\" src=\"\" style=\"border:none ; position: absolute; display: block;\"></iframe></div>";
            wibiyaToolbar.MinimizedHTML = "<table id=\"wibiyaToolbar_min_tbl\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">    <tbody><tr>    <td width=\"30\" align=\"right\" class=\"wibiyaToolbar_td\"><div id=\"wibiyaToolbar_left\"></div>    </td>    <td id=\"wibiyaToolbar_minimized_center\" class=\"wibiyaToolbar_td\" width=\"75\" style=\"width:75px\"><div id=\"wibiyaToolbar_minimized_content\">    <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Favicons/Defaultfavicon26528_28017.png\" id=\"wibiyaToolbar_minimized_favicon\" />    <span class=\"wibiyaToolbar_itemText\">Tools</span></div>    </td>    <td id=\"wibiyaToolbar_minimized_right\" class=\"wibiyaToolbar_minimized_right_normal\" /></tr>    </tbody></table>";
            wibiyaToolbar.TempWiwiHTML = "<div class=\"wibiyaToolbar_wiwi_main\">    <div class=\"wibiyaToolbar_wiwi_header_main\">        <div id=\"wibiyaToolbar_wiwi_hl\"><div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per first left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per second left wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div>        </div>        <div class=\"wibiyaToolbar_wiwi_header\"><div class=\"wibiya_toolbar_middle_gradian\"></div><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            <div class=\"wibiyaToolbar_wiwi_title\">                <table style=\"height:28px;margin-top:5px;\">                    <tr valign=\"middle\" align=\"center\">                        <td valign=\"middle\" align=\"center\">                            <img class=\"wibiyaToolbar_wiwi_icon\" alt=\"Popout\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_email.png\"/>                        </td>                        <td class=\"wibiyaToolbar_wiwi_caption\" valign=\"middle\" align=\"left\" width=\"220\">                            Wiwi Title                        </td>                    </tr>                </table>            </div>            <div class=\"wibiyaToolbar_wiwi_close\">                <div class=\"wibiyaToolbar_wiwi_Mini\">                </div>                <div class=\"wibiyaToolbar_wiwi_Pop\">                </div>                <div class=\"wibiyaToolbar_wiwi_close_a\">                </div>            </div>        </div>        <div id=\"wibiyaToolbar_wiwi_hr\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">               <div class=\"wibiya_toolbar_side_70per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per first right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per second right wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div><div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div>    </div>    <div class=\"wibiyaToolbar_wiwi_body_main\">        <div id=\"wibiyaToolbar_wiwi_bl\"></div>        <div class=\"wibiyaToolbar_wiwi_body\">        </div>        <div id=\"wibiyaToolbar_wiwi_br\"></div>    </div>    <div class=\"wibiyaToolbar_wiwi_placeholder_main\">        <div id=\"wibiyaToolbar_wiwi_pl\"></div>        <div class=\"wibiyaToolbar_wiwi_placeholder\"></div>        <div id=\"wibiyaToolbar_wiwi_pr\"></div>    </div>    <div class=\"wibiyaToolbar_wiwi_footer_main\">        <div id=\"wibiyaToolbar_wiwi_fl\"></div>        <div class=\"wibiyaToolbar_wiwi_footer\">            <a href=\"http://www.wibiya.com?FtrLnk=true\" class=\"wibiyaToolbar_wiwi_footerlink\" target=\"blank\">Powered by</a>            <div>                <a style=\"\" class=\"wibiyaToolbar_wiwi_close_window\" href=\"javascript: void(0)\">Close window</a>            </div>        </div>        <div id=\"wibiyaToolbar_wiwi_fr\"></div>    </div></div>";

if(!this.JSON){
    JSON={};
}(function(){
    function f(n){
        return n<10?'0'+n:n;
    }
    if(typeof Date.prototype.toJSON!=='function'){
        Date.prototype.toJSON=function(key){
            return this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z';
        };

        String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){
            return this.valueOf();
        };
    }
    var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={
        '\b':'\\b',
        '\t':'\\t',
        '\n':'\\n',
        '\f':'\\f',
        '\r':'\\r',
        '"':'\\"',
        '\\':'\\\\'
    },rep;
    function quote(string){
        escapable.lastIndex=0;
        return escapable.test(string)?'"'+string.replace(escapable,function(a){
            var c=meta[a];
            return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);
        })+'"':'"'+string+'"';
    }
    function str(key,holder){
        var i,k,v,length,mind=gap,partial,value=holder[key];
        if(value&&typeof value==='object'&&typeof value.toJSON==='function'){
            value=value.toJSON(key);
        }
        if(typeof rep==='function'){
            value=rep.call(holder,key,value);
        }
        switch(typeof value){
            case'string':
                return quote(value);
            case'number':
                return isFinite(value)?String(value):'null';
            case'boolean':case'null':
                return String(value);
            case'object':
                if(!value){
                    return'null';
                }
                gap+=indent;
                partial=[];
                if(Object.prototype.toString.apply(value)==='[object Array]'){
                    length=value.length;
                    for(i=0;i<length;i+=1){
                        partial[i]=str(i,value)||'null';
                    }
                    v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';
                    gap=mind;
                    return v;
                }
                if(rep&&typeof rep==='object'){
                    length=rep.length;
                    for(i=0;i<length;i+=1){
                        k=rep[i];
                        if(typeof k==='string'){
                            v=str(k,value);
                            if(v){
                                partial.push(quote(k)+(gap?': ':':')+v);
                            }
                        }
                    }
                }else{
                    for(k in value){
                        if(Object.hasOwnProperty.call(value,k)){
                            v=str(k,value);
                            if(v){
                                partial.push(quote(k)+(gap?': ':':')+v);
                            }
                        }
                    }
                }
                v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';
                gap=mind;
                return v;
        }
    }
    if(typeof JSON.stringify!=='function'){
        JSON.stringify=function(value,replacer,space){
            var i;
            gap='';
            indent='';
            if(typeof space==='number'){
                for(i=0;i<space;i+=1){
                    indent+=' ';
                }
            }else if(typeof space==='string'){
                indent=space;
            }
            rep=replacer;
            if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){
                throw new Error('JSON.stringify');
            }
            return str('',{
                '':value
            });
        };
    }
    if(typeof JSON.parse!=='function'){
        JSON.parse=function(text,reviver){
            var j;
            function walk(holder,key){
                var k,v,value=holder[key];
                if(value&&typeof value==='object'){
                    for(k in value){
                        if(Object.hasOwnProperty.call(value,k)){
                            v=walk(value,k);
                            if(v!==undefined){
                                value[k]=v;
                            }else{
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder,key,value);
            }
            cx.lastIndex=0;
            if(cx.test(text)){
                text=text.replace(cx,function(a){
                    return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){
                j=eval('('+text+')');
                return typeof reviver==='function'?walk({
                    '':j
                },''):j;
            }
            throw new SyntaxError('JSON.parse');
        };
    }
})();


wibiyaToolbar.framework.currentZIndex = 8999999;

String.prototype.wiFormat = function() {
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern, function(capture) {
        return args[capture.match(/\d+/)];
    });
};

jQuery.fn.hand = function(){
    return this.css('cursor','pointer');
};

jQuery.fn.vhide = function(){
    return this.css('visibility','hidden');
};

jQuery.fn.vshow = function(){
    return this.css('visibility','visible');
};

jQuery.fn.linkBehavior = function(){
    this.mouseover(function(){
        var _item = jQuery(this);
        if (_item.find('.wibiyaToolbar_menu').attr('menu_opened')!='yes'){
            _item.hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').find('.wibiyaToolbar_tooltip').vshow();
        }
        wibiyaToolbar.framework.linkMouseOver(_item);
    }).mouseout(function(){
        var _item = jQuery(this);
        _item.removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').find('.wibiyaToolbar_tooltip').vhide();
        wibiyaToolbar.framework.linkMouseOut(_item);
    });
    return this;
};

jQuery.fn.multilinkBehavior = function(){
    this.mouseover(function(){
        var _item = jQuery(this);
        if (_item.find('.wibiyaToolbar_menu').attr('menu_opened')=='no'){
            _item.hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').parent().find('.wibiyaToolbar_tooltip').vshow();
        }
        wibiyaToolbar.framework.linkMouseOver(_item);
    }).mouseout(function(){
        var _item = jQuery(this);
        _item.removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').parent().find('.wibiyaToolbar_tooltip').vhide();
        wibiyaToolbar.framework.linkMouseOut(_item);
    });
    return this;
};


wibiyaToolbar.framework.getViewPort=function(dir){
    if (typeof window.innerWidth != "undefined"){
        return dir=='h'?window.innerHeight:window.innerWidth;
    }
    else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth !== 0){
        return dir=='h'?document.documentElement.clientHeight:document.documentElement.clientWidth;
    }
    else{
        return dir=='h'?document.getElementsByTagName("body")[0].clientHeight:document.getElementsByTagName("body")[0].clientWidth;
    }
};

wibiyaToolbar.framework.getHeight = function(height){
    var _height = height.toString();
    var _pres_position = _height.indexOf("%");
    if (_pres_position != -1){
        _height = _height.substring(0,_pres_position);
        _height = wibiyaToolbar.framework.getViewportHeight()*(_height/100);
    }
    else{
        _height = Number(_height);
    }
    return _height;
};

wibiyaToolbar.framework.openWiwi = function(options) {
    var _height = wibiyaToolbar.framework.getHeight(options.dimentions.height);

    wibiyaToolbar.framework.remove_lightbox();
    var _wiwi;
    var _numberOfOpenWindows;
    var _link_content;
    var _iframe = '<iframe frameborder="0" SCROLLING="{0}" allowtransparency="true" src="{1}" width="{2}" height="{3}" style="{4}"></iframe>';
    var _style1 = 'overflow-y: auto;overflow-x: hidden;';
    var _style2 = 'overflow: hidden;';
    switch (options.actionType){
        case "Link":
            switch (options.windowType){
                case 0:
                    if (jQuery("#"+options.name).size()===0){
                        _wiwi = wibiyaToolbar.framework.createWiwi("body", options);
                        _link_content = (options.scroll=="YES") ?
                        _iframe.wiFormat(options.scroll,options.link,options.dimentions.width,_height,_style1) :
                        _iframe.wiFormat(options.scroll,options.link,'100%','100%',_style2);
			
                        _wiwi.fadeIn(500,function(){
                            wibiyaToolbar.framework.WriteProfile('OpenWiwi', _wiwi.attr('toolbarappid'));
                            _wiwi.find(".wibiyaToolbar_wiwi_body").html(_link_content);
                        });
                    }
                    break;
                case 1:
                    _numberOfOpenWindows = jQuery("#"+options.name).size();
                    if (_numberOfOpenWindows>0){
                        wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name), "slide_down");
                        wibiyaToolbar.framework.remove_lightbox();
                    }
                    else{
                        _wiwi = wibiyaToolbar.framework.createWiwi("body", options);
                        _link_content = (options.scroll=="YES") ?
                        _iframe.wiFormat(options.scroll,options.link,options.dimentions.width,_height,_style1) :
                        _iframe.wiFormat(options.scroll,options.link,'100%','100%',_style2);

                        wibiyaToolbar.framework.appendLightbox("#"+options.name);
                        _wiwi.fadeIn(500,function(){
                            wibiyaToolbar.framework.WriteProfile('OpenWiwi',_wiwi.attr('toolbarappid'));
                            _wiwi.find(".wibiyaToolbar_wiwi_body").html(_link_content);
                        });
                    }
                    break;
                case 2:
                    var _attr = 'status=1,toolbar=1,scrollbars=1,location=1,resizable=1,height={0},width={1}';
                    window.open(options.link, "WibiyaToolbarNewWindow", _attr.wiFormat(_height,options.dimentions.width));
                    break;
                case 3:
                    wibiyaToolbar.LinkToBeOpened = options.link;
                    setTimeout("window.location=wibiyaToolbar.LinkToBeOpened;",500);
                    break;
            }
            break;
        case "Code":
            _numberOfOpenWindows = jQuery("#"+options.name).size();
            if (_numberOfOpenWindows>0){
                wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name), "slide_down");
                wibiyaToolbar.framework.remove_lightbox();
            }
            else{
                _wiwi = wibiyaToolbar.framework.createWiwi("body", options);
                var _code_content =  options.code;
                if(options.windowType==1){
                    wibiyaToolbar.framework.appendLightbox("#"+options.name);
                }
                _wiwi.fadeIn(500,function(){
                    wibiyaToolbar.framework.WriteProfile('OpenWiwi', _wiwi.attr('toolbarappid'));
                    _wiwi.find(".wibiyaToolbar_wiwi_body").html(_code_content);
                });
            }
            break;
    }
};

wibiyaToolbar.framework.createWiwi =  function(container, options){
    //    if (typeof(wibiyaToolbar.OpenWiwis) == "undefined") {
    //        wibiyaToolbar.OpenWiwis = [];
    //    }
    //    wibiyaToolbar.OpenWiwis.push(options.toolbarAppId.toString());
    var _height = wibiyaToolbar.framework.getHeight(options.dimentions.height);

    wibiyaToolbar.framework.close_all_wiwis();
    var _newWiwi = jQuery("#wibiyaToolbar_window_template").clone();
    if (typeof(options.appId) != "undefined"){
        _newWiwi.attr("appId", options.appId);
    }
    if (typeof(options.toolbarAppId) != "undefined"){
        _newWiwi.attr("toolbarAppId", options.toolbarAppId);
    }
    _newWiwi.attr("id", options.name);
    _newWiwi.css("z-index",wibiyaToolbar.framework.currentZIndex++);
    _newWiwi.css("width",(options.dimentions.width+10)+"px");
    _newWiwi.css("height",(_height+55)+"px");
    _newWiwi.find(".wibiyaToolbar_wiwi_body, .wibiyaToolbar_wiwi_body_main").css("height",_height);
    _newWiwi.find(" .wibiyaToolbar_wiwi_placeholder, .wibiyaToolbar_wiwi_body").css("width",options.dimentions.width+"px");
    _newWiwi.find(".wibiyaToolbar_wiwi_footer, .wibiyaToolbar_wiwi_header").css("width",(options.dimentions.width-10)+"px");

    _newWiwi.find(".wibiyaToolbar_wiwi_caption").html(options.title);
    _newWiwi.find(".wibiyaToolbar_wiwi_icon").attr("src",options.icon);
    _newWiwi = wibiyaToolbar.framework.positionWiwi(_newWiwi,options);
    _newWiwi.find(".wibiyaToolbar_wiwi_close_a").click(function(){
        if (typeof(options.appId) != "undefined" && typeof(options.toolbarAppId) != "undefined"){
            wibiyaToolbar.framework.fun_RegisterAction_extended(options.appId,options.toolbarAppId,4,0,"");
        }
        wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name),"fade_out");
        wibiyaToolbar.framework.remove_lightbox();
    });
    _newWiwi.find(".wibiyaToolbar_wiwi_close_window").click(function(){
        if (typeof(options.toolbarAppId) != "undefined" && typeof(options.appId) != "undefined")
        {
            wibiyaToolbar.framework.fun_RegisterAction_extended(options.appId,options.toolbarAppId,4,0,"");
        }
        wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name),"fade_out");
        wibiyaToolbar.framework.remove_lightbox();
    });
    _newWiwi.find(".wibiyaToolbar_wiwi_Pop").click(function(){
        if (typeof(options.toolbarAppId) != "undefined" && typeof(options.appId) != "undefined"){
            wibiyaToolbar.framework.fun_RegisterAction_extended(options.appId,options.toolbarAppId,10,0,"");
        }
        wibiyaToolbar.framework.fun_PopOut();
    });
    _newWiwi.find(".wibiyaToolbar_wiwi_Mini").click(function(){
        if (typeof(options.toolbarAppId) != "undefined" && typeof(options.appId) != "undefined")
        {
            wibiyaToolbar.framework.fun_RegisterAction_extended(options.appId,options.toolbarAppId,4,0,"");
        }
        wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name),"minimize");
        wibiyaToolbar.framework.remove_lightbox();
    });
    _newWiwi = wibiyaToolbar.framework.createWiwiFooter(_newWiwi,options);
    if (typeof( _newWiwi.draggable)== 'function')
    {
        _newWiwi.draggable({
            containment : 'body',
            cursor      : 'move',
            handle      : '.wibiyaToolbar_wiwi_header',
            scroll      : true
        });

        _newWiwi.find('.wibiyaToolbar_wiwi_header').css('cursor','move');
    }
    jQuery(container).append(_newWiwi);
    return _newWiwi;
};

wibiyaToolbar.framework.appendLightbox = function(name){
    jQuery("body").append('<div id="wibiya_TB_overlay" class="wibiya_TB_overlayBG"></div>');
    if (typeof document.body.style.maxHeight === "undefined"){
        jQuery("body","html").css({
            height: "100%",
            width: "100%"
        });
        jQuery("html").css("overflow","hidden");
    }
    if(wibiyaToolbar.framework.tb_detectMacXFF()){
        jQuery("#wibiya_TB_overlay").addClass("wibiya_TB_overlayMacFFBGHack");
    }else{
        jQuery("#wibiya_TB_overlay").addClass("wibiya_TB_overlayBG");
    }
    jQuery("#wibiya_TB_overlay").click(function(){
        jQuery(name).remove();
        wibiyaToolbar.framework.remove_lightbox();
    });
};

wibiyaToolbar.framework.getViewportHeight = function()
{
    return wibiyaToolbar.framework.getViewPort('h');
};

wibiyaToolbar.framework.getViewportWidth = function()
{
    return wibiyaToolbar.framework.getViewPort('w');
};

wibiyaToolbar.framework.remove_lightbox = function()
{
    jQuery("#wibiya_TB_overlay").fadeOut(100,function(){
        jQuery("#wibiya_TB_overlay").remove();
    });
};

wibiyaToolbar.framework.close_all_wiwis = function()
{
    jQuery(".wibiyaToolbar_window[id!=wibiyaToolbar_window_template]").each(function(){
        var item = jQuery(this);
        if(item.css("visibility") != "hidden"){
            wibiyaToolbar.framework.close_wiwi(item,"fade_out");
        }
    });
    if (typeof(wiApp_share) != 'undefined') {
        wiApp_share.hideShareDialog();
    }
};

wibiyaToolbar.framework.close_wiwi = function(wiwi, type){
    switch (type) {
        case "slide_down":
            wiwi.find("#wibiyaToolbar_window_content").html("&nbsp;");
            wiwi.animate({
                "bottom":"-1000px"
            },500,"linear",function(){
                wiwi.vhide();
            });
            break;
        case "fade_out":
            wiwi.find("#wibiyaToolbar_window_content").html("&nbsp;");
            if(wiwi.hasClass("PersistOpen")){
                //wibiyaToolbar.framework.minimize_wiwi(wiwi);
            }
            else{
                wiwi.fadeOut(400,function(){
                    wiwi.remove();
                });
            }
            break;
        case "minimize":
            wiwi.find("#wibiyaToolbar_window_content").html("&nbsp;");
            wibiyaToolbar.framework.minimize_wiwi(wiwi);
            break;
        default:
            wiwi.remove();
            break;
    }

    
    wibiyaToolbar.framework.WriteProfile('CloseWiwi',jQuery(wiwi).attr('toolbarappid'));
};

wibiyaToolbar.framework.minimize_wiwi = function(wiwi){
    wiwi.fadeTo(400,0,function(){
        wiwi.vhide();
    });
}

wibiyaToolbar.framework.show_wiwi = function(wiwi)
{
    wibiyaToolbar.framework.close_all_wiwis();
    wiwi.css("visibility","visible").fadeTo(400,1);
};

wibiyaToolbar.framework.tb_detectMacXFF = function(){
    var userAgent = navigator.userAgent.toLowerCase();
    return (userAgent.indexOf("mac") != -1 && userAgent.indexOf("firefox")!=-1);
};

wibiyaToolbar.framework.CloseMenu = function(menuObject){
    menuObject.attr("menu_opened","no");
    menuObject.find(".wibiyaToolbar_panel_body").hide(1);
    menuObject.find(".wibiyaToolbar_panel_header").hide(1);
    menuObject.slideUp(200);
};

wibiyaToolbar.framework.OpenMenu = function(menuObject){
    menuObject.parent().find(".wibiyaToolbar_tooltip").vhide();

    menuObject.attr("menu_opened","yes").slideDown(300, function() {
        menuObject.find(".wibiyaToolbar_panel_body").show(1);
        menuObject.find(".wibiyaToolbar_panel_header").show(1);
        fun_AddClickHandlerForBodyForMenu(jQuery(this));
    });
    var LeftOffset = menuObject.offset().left+ Number(menuObject.css('width').split('px')[0]);
    LeftOffset  = wibiyaToolbar.framework.getViewportWidth() -LeftOffset;
    if (LeftOffset  < 0)
    {
        LeftOffset -=30;
        menuObject.css('left',LeftOffset+'px');
    }
};

fun_AddClickHandlerForBody = function(Wiwi){
    jQuery("body").click(function() {
        Wiwi.slideUp(300, function(){
            Wiwi.attr("menu_opened","no");
            if (Wiwi.attr("id")=="wibiyaToolbar_share_menu"){
                Wiwi.remove();
            }
        });
        jQuery("body").unbind("click");
    });
};

fun_AddClickHandlerForBodyForMenu = function(_Menu){
    jQuery("body").click(function(){
        wibiyaToolbar.framework.CloseMenu(_Menu);
        jQuery("body").unbind("click");
    });
};

wibiyaToolbar.framework.positionWiwi = function(_wiwi,options){
    var _b = null;
    if (typeof(options.side) != "undefined" && typeof(options.starterOptions) != "undefined") {
        var wiwiWidth = Number(_wiwi.css('width').split('px')[0]);
        if (typeof (options.position.bottom) != "undefined"){
            _b = options.position.bottom ;
        }
        else
        {
            _b = '30px';
        }

        if (typeof (wibiyaToolbar.Data.TBStyleXml) != 'undefined') {
            if ( _b < Number(wibiyaToolbar.Data.TBStyleXml.size.height)) {
                _b = wibiyaToolbar.Data.TBStyleXml.size.height+"px";
            }
        }
        var IsCenter = false;
        if (typeof (options.position.IsCenter) != "undefined" && options.position.IsCenter === true){
            IsCenter = true;
        }
        var btnClicked = jQuery("#"+options.starterOptions.sender);
        var position_app = null;
        if (!IsCenter) {
            if (options.side == 'left')
            {
                position_app = btnClicked.offset().left;
                if (position_app+wiwiWidth > wibiyaToolbar.framework.getViewportWidth()) {
                    _wiwi.css({
                        "bottom":_b,
                        "right":"0px",
                        "display":"none"
                    });
                }
                else
                {
                    _wiwi.css({
                        "bottom":_b,
                        "left":position_app+"px",
                        "display":"none"
                    });
                }
            }
            else
            {
                var window_w = wibiyaToolbar.framework.getViewportWidth();
                position_app = btnClicked.offset().left + btnClicked.width();
                wiwi_right = window_w - position_app;
                _wiwi.css({
                    "bottom":_b,
                    "right":wiwi_right+"px",
                    "display":"none"
                });
            }
        }
        else
        {
            var positionFromside = 0;
            if (typeof (options.position.left) != "undefined"){
                positionFromside = options.position.left;
            }
            else if (typeof (options.position.right) != "undefined"){
                positionFromside = options.position.right;
            }

            _wiwi.css({
                "bottom":_b,
                "right":positionFromside,
                "display":"none"
            });
        }
    }
    else
    {
        var _l = null;
        var _r = null;
        if (typeof (options.position) != "undefined"){
            if (typeof (options.position.left) != "undefined"){
                _l = options.position.left;
            }
            else if (typeof (options.position.right) != "undefined"){
                _r = options.position.right;
            }

            if (typeof (options.position.bottom) != "undefined"){
                _b = options.position.bottom ;
            }

            if (typeof (wibiyaToolbar.Data.TBStyleXml) != 'undefined') {
                if ( _b < Number(wibiyaToolbar.Data.TBStyleXml.size.height)) {
                    _b = wibiyaToolbar.Data.TBStyleXml.size.height+"px";
                }
            }

        }
        if (_l === null && _r === null){
            _l =((wibiyaToolbar.framework.getViewportWidth() - options.dimentions.width)/2)+"px";
        }

        if (_b === null){
            _b = ((wibiyaToolbar.framework.getViewportHeight() - options.dimentions.height)/2)+"px";
        }

        if (_r === null){
            _wiwi.css({
                "bottom":_b,
                "left":_l,
                "display":"none"
            });
        }
        else{
            if (_r == "middle"){
                _wiwi.css({
                    "bottom":_b,
                    "right":((wibiyaToolbar.framework.getViewportWidth() - options.dimentions.width)/2)+"px", 
                    "display":"none"
                });
            }
            else{
                _wiwi.css({
                    "bottom":_b,
                    "right":_r,
                    "display":"none"
                });
            }
        }
    }

    //check edge of screen
    var rightPos = _wiwi.css('right');
    var leftPos = _wiwi.css('left');
    if (rightPos !="0px")
    {
        rightPos = Number(rightPos.split('px')[0]);
        var WidthofWiwi = Number(_wiwi.css('width').split('px')[0]);
        if ((rightPos+WidthofWiwi)>wibiyaToolbar.framework.getViewportWidth())
        {
            _wiwi.css('right','0px');
        }
    }
    return _wiwi;
};

wibiyaToolbar.framework.fun_MinMaxCookie = function(_action){
    var _tbs = jQuery("#wibiyaToolbar").attr("state");
    var _COOKIE_MinMax = "WibiyaMinMax";
    var _OPTIONS = {
        path: "/",
        expires: 30
    };
    if (_action == "check"){
        if (typeof(wibiyaToolbar.profile) == "undefined"){
            wibiyaToolbar.framework.WriteProfile("MaxToolbar",0);
            wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
        }
        else if (wibiyaToolbar.profile.toolbar.stat == "Max"){
            if(_tbs=="off"){
                wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
            }
        }
        else if (wibiyaToolbar.profile.toolbar.stat == "Min"){
            if (_tbs=="on"){
                wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
            }
            else{
                jQuery("#wibiyaToolbar").animate({
                    bottom:"-65px"
                },300,function(){
                    jQuery(this).hide();
                });
                jQuery("#wibiyaToolbar").attr("state","off");
                //maximizing toolbar_minimized
                jQuery(".wibiyaToolbarMin").slideDown(300);
                wibiyaToolbar.framework.fun_MinMaxCookie("Min");
            }
        }
    }
    else if (_action == "Min"){
        wibiyaToolbar.framework.WriteProfile("MinToolbar",0);
    }
    else if (_action == "Max"){
        wibiyaToolbar.framework.WriteProfile("MaxToolbar",0);
    }
};

wibiyaToolbar.framework.fun_wibiyaToolbar_toggle = function(){
    var _tbs = jQuery("#wibiyaToolbar").attr("state");
	var wibiya_toolbar_wrapper = jQuery('#wibiya_toolbar_wrapper');
	var wibiya_toolbar_wrapper_mini = jQuery('#wibiya_toolbar_wrapper_mini');
	var wibiyaToolbarWrap = jQuery("#wibiyaToolbar");
	var wibiyaToolbarMinWrap = jQuery("#wibiyaToolbarNewMinimized");
	
    //maximizing toolbar
    if (_tbs=="off"){
		if(wibiya_toolbar_wrapper_mini.length==0){
			jQuery("#wibiyaToolbar").animate({
				bottom:"-65px"
			},100,function(){
				jQuery(this).show(100,function(){
					jQuery(this).animate({
						bottom:"0px"
					},300);
				});
			});
		 jQuery("#wibiyaToolbar").attr("state","on");
			//minimizing toolbar_minimized
			jQuery(".wibiyaToolbarMin").slideUp(300);
			wibiyaToolbar.framework.fun_MinMaxCookie("Max");
		}else{
			jQuery("#wibiyaToolbar").attr("state","on");
			wibiyaToolbar.framework.fun_MinMaxCookie("Max");
			wibiya_toolbar_wrapper.css('bottom',"-55px");
			wibiyaToolbarWrap.show();
			wibiya_toolbar_wrapper_mini.animate({
				bottom: "-55px"
				}, 500,
			function() {
				wibiyaToolbarMinWrap.hide();					
				wibiya_toolbar_wrapper_mini.hide();
				wibiya_toolbar_wrapper.show();
				wibiya_toolbar_wrapper.animate({
					bottom: (wibiyaToolbar.Data.TBStyleXml.size.height - 55)+"px"
				}, 500);
			// Animation complete.
			});
		}
		
         //wibiyaToolbar.framework.centerApps(); //align toolbar apps
    }
    else{
        //minimizing toolbar
		if(wibiya_toolbar_wrapper_mini.length==0){
			jQuery("#wibiyaToolbar").animate({
				bottom:"-65px"
			},300,function(){
				jQuery(this).hide();
			});		
		jQuery("#wibiyaToolbar").attr("state","off");
			//maximizing toolbar_minimized
			jQuery(".wibiyaToolbarMin").slideDown(300);
			wibiyaToolbar.framework.fun_MinMaxCookie("Min");
		}else{
			jQuery("#wibiyaToolbar").attr("state","off");
			wibiyaToolbar.framework.fun_MinMaxCookie("Min");
			wibiya_toolbar_wrapper_mini.css('bottom',"-55px");			
			wibiyaToolbarMinWrap.show();
			 wibiya_toolbar_wrapper.animate({
				bottom: "-55px"
				}, 500,
			function() {
				wibiyaToolbarWrap.hide();								
				wibiya_toolbar_wrapper.hide();
				wibiya_toolbar_wrapper_mini.show();
				wibiya_toolbar_wrapper_mini.animate({
					bottom: (wibiyaToolbar.Data.TBStyleXml.size.height - 55)+"px"
				}, 500);
			// Animation complete.
			});
		}
      				
    }
};

wibiyaToolbar.framework.fun_RegisterAction_extended = function(_AppId,_ToolbarAppId,_ActionId,_Sender,_MetaData){
    jQuery.get("http://Actions.wibiya.com/SetToolbarAction.php", {
        AppId: _AppId,
        ToolbarId: wibiyaToolbar.id,
        ToolbarAppId : _ToolbarAppId,
        ActionId : _ActionId,
        Sender : _Sender,
        MetaData : _MetaData
    },null,"jsonp");
};

wibiyaToolbar.framework.AddHttp = function(str){
    var http="http://";
    return (str.indexOf(http) !== 0)?"http://"+str:str;
};

wibiyaToolbar.framework.LinkDataReplace = function(link, withData){
    link = link.replace(/Wibiya_TBID/g, wibiyaToolbar.id);
    link = link.replace(/Wibiya_PAGETITLE/g, document.title);
    link = link.replace(/Wibiya_URLesc/g, escape(window.location.href));
    link = link.replace(/Wibiya_URL/g, window.location.href);

    if(withData){
        link = link.replace(/Wibiya_SITENAME/g, wibiyaToolbar.Data.SiteName);
        link = link.replace(/Wibiya_SITEURL/g, wibiyaToolbar.Data.SiteUrl);
    }

    return link;
};

wibiyaToolbar.framework.LinkDataReplacor = function(link){
    return wibiyaToolbar.framework.LinkDataReplace(link, true);
};

wibiyaToolbar.framework.LinkDataReplacorNoData = function(link){
    return wibiyaToolbar.framework.LinkDataReplace(link, false);
};

wibiyaToolbar.framework.BDGClick =function(appName,AppIndex){
    var ObjToClickId;
    var _obj = jQuery("div[applicationName="+appName+"]");
    if (AppIndex === 0) {
        ObjToClickId = _obj[0].id;
    }
    else{
        ObjToClickId = (typeof(_obj[AppIndex]) == "undefined") ? _obj[0].id : _obj[AppIndex].id;
    }

    jQuery("#"+ObjToClickId).trigger("click");
};


wibiyaToolbar.framework.BDGClickV2 =function(appId,appTypeId,Index){
    wibiyaToolbar.framework.fun_RegisterAction_extended(appTypeId,appId,55,0,"");
    fname = "";
    //register stats
    switch (appTypeId){
        case 5:
        case 14:
        case 18:
        case 26:        
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 35:
        case 36:
        case 13:
            fname = "wibiyaToolbar.framework.fun_GeneralApp_"+Index+"()";
            break;
        case 4:
            break;
        case 7:
            break;
        case 15:
            break;
        case 17:
	 case 27:
	 case 20:
            fname = "wibiyaToolbar.framework.fun_CodeApp_"+Index+"()";
            break;
        case 28:
            fname = "wibiyaToolbar.framework.fun_functionBtn_"+Index+"()";
            break;
        case 34:
            break;
        default:
            break;
    }
    eval (fname);
};

wibiyaToolbar.framework.badgeHandler = function(appTypeId){
    BadgeClicked = jQuery("div[appid="+appTypeId+"]:first");
    BadgeToolbarAppId = BadgeClicked.attr("toolbarappid");
    BadgeAppIndex = BadgeClicked.attr("Appindex");
    wibiyaToolbar.framework.BDGClickV2(Number(BadgeToolbarAppId),Number(appTypeId),BadgeAppIndex);
};

wibiyaToolbar.framework.fun_PopOut = function(){
    //wiwis = jQuery(".wibiyaToolbar_window");
    //if (wiwis.length>1)
    if (jQuery(".wibiyaToolbar_window").is(":visible"))
    {
        //var wiwi = wiwis[1];
        var wiwi = jQuery(".wibiyaToolbar_window[id!=wibiyaToolbar_window_template]");
        var height = Number(jQuery(wiwi).css("height").split('px')[0])-55;
        var width = Number(jQuery(wiwi).css("width").split('px')[0])-10;
        var winName = jQuery(wiwi).attr('id');
        var iframeSrc = jQuery(wiwi).find("iframe").attr("src");
        jQuery(wiwi).remove();
        wibiyaToolbar.framework.remove_lightbox();
        wibiyaToolbar.framework.WriteProfile('CloseWiwi',wiwi.attr('toolbarappid'));
        if (typeof(iframeSrc) != 'undefined')
        {
            PopOutWindow = window.open( iframeSrc,'Popout_'+winName , 'height='+height+',width='+width+',location=no');
        }
        else
        {
            PopOutWindow = window.open( '','Popout_'+winName , 'height='+height+',width='+width+',location=no');
            PopOutWindow.document.write(jQuery(wiwi).find(".wibiyaToolbar_wiwi_body").html());
        }

    }
    
};

wibiyaToolbar.framework.delayAction = function(CodeToRun,Time)
{
    jQuery("#wibiyaToolbar").bind('toolbarLoaded',function(){
        setTimeout(CodeToRun,Time);
    });
    
};

wibiyaToolbar.framework.registerProfileCookie = function ()
{
    var cookieContent = JSON.stringify(wibiyaToolbar.profile);
    var _OPTIONS = {
        path: "/",
        expires: 30
    };
    jQuery.cookie("WibiyaProfile",cookieContent,_OPTIONS);
};

wibiyaToolbar.framework.WriteProfile = function (actionType,id)
{
    if (typeof (wibiyaToolbar.profile)== "undefined")
    {
        wibiyaToolbar.profile = {
            'toolbar':{
                'stat':{}
            },
            'apps':{
                'openApps':{}
            }

        };
    }
    switch (actionType) {
        case 'MinToolbar':
            wibiyaToolbar.profile.toolbar.stat = 'Min';
            break;
        case 'MaxToolbar':
            wibiyaToolbar.profile.toolbar.stat = 'Max';
            break;
        case 'OpenWiwi':
            //wibiyaToolbar.profile.apps.openApps[id] = '';
            break;
        case 'CloseWiwi':
            //delete (wibiyaToolbar.profile.apps.openApps[id]);
            break;
        default:
            break;
    }
        
    wibiyaToolbar.framework.registerProfileCookie();
};

wibiyaToolbar.framework.ReadProfile = function ()
{
    var profileCookie = jQuery.cookie("WibiyaProfile");
    if (profileCookie !== null) {
        wibiyaToolbar.profile = JSON.parse(profileCookie);
    }
};

wibiyaToolbar.framework.RunProfile = function (){};

wibiyaToolbar.framework.createWiwiFooter =  function(_newWiwi,options){
    var _url_clean = escape(location.href.replace(/http:\/\//g, ""));
    _url_clean = _url_clean.replace(/\//g,"%25252f");

    if (typeof(wibiyaToolbar.Data.customFooter)== 'undefined') {
        var _footer_link = "";
        if(options.appId === 20){
            _footer_link = 'http://www.backtype.com/connect/'+_url_clean;
            _footer_link = '<a href="'+_footer_link+'" target="_blank" style="background: none; width:400px;display:inline" class="wibiyaToolbar_wiwi_footerlink_poweredby">Twitter Buzz <img src="http://cdn.wibiya.com/Graphics_Toolbar/UI/backtype-badge-white.gif" border="0" style="display:inline; vertical-align:middle;"/></a>';
        }

        if (typeof(options.appId) == "undefined") {
            _newWiwi.find(".wibiyaToolbar_wiwi_footer").append(_footer_link);
        }
        else {
            if (options.footer == "html") {
                _newWiwi.find(".wibiyaToolbar_wiwi_footer").html(_footer_link);
            }
            else {
                _newWiwi.find(".wibiyaToolbar_wiwi_footer").append(_footer_link);
            }
        }
    }
    else
    {
        var footerHtml = '';
        switch (wibiyaToolbar.Data.customFooter) {
            case "noPowered":
                footerHtml = '<a target="blank" class="" href="javascript:void(0);"></a>';
                break;
            case "JPost":
                footerHtml = '<iframe height="1px" width="1px" style="border:medium none;float:left;" src="http://www.jpost.com/wibiyaframe.htm"/><a target="blank" class="wibiyaToolbar_wiwi_footerlink" href="http://www.wibiya.com?FtrLnk=true">Powered by</a>';
                break;
            default:
                footerHtml ='<a target="blank" class="wibiyaToolbar_wiwi_footerlink" href="http://www.wibiya.com?FtrLnk=true">Powered by</a>';
                break;
        }
        _newWiwi.find(".wibiyaToolbar_wiwi_footerlink").remove();
        _newWiwi.find(".wibiyaToolbar_wiwi_footer").prepend(footerHtml);
    }

    return _newWiwi;
};

wibiyaToolbar.framework.prepare_width = function () {
    //set_wibiya_text_width();
    var leftOffset;
    if (jQuery(".itemLeft:last").offset() === null){
        leftOffset = 0;
    }
    else{
        leftOffset = jQuery(".itemLeft:last").offset().left;
    }

    var isleft = (leftOffset > 0) ? true : false;
    var isright = (jQuery(".itemRight:last").offset().left > 0) ? true : false;
    var window_w = jQuery(window).width();
    var tot_w_l = wibiyaToolbar.framework.prepare_width_l();
    var tot_w_r = wibiyaToolbar.framework.prepare_width_r();
    var w_sum = tot_w_r + tot_w_l + 100;
    var lasLeftOntheRightTop = 0;
    if ( jQuery(".itemRight:last").length >0) {
        lasLeftOntheRightTop =  jQuery(".itemRight:last").position().top;
    }
    if (isleft && isright) {
        if(w_sum > window_w || lasLeftOntheRightTop>20) {
            jQuery(".itemLeft").find(".WibiyaMinRepresentation").show().attr('show','yes');
            jQuery(".itemLeft").find(".TBcontainerDiv").hide().attr('show','no');
            tot_w_l = wibiyaToolbar.framework.prepare_width_l();
            tot_w_r = wibiyaToolbar.framework.prepare_width_r();
            var w_calc = tot_w_r + tot_w_l + 100;

            while( w_calc < window_w && jQuery(".itemRight:last").position().top < 20)
            {
                jQuery(".itemLeft").find(".WibiyaMinRepresentation[show='yes']").filter(":first").hide().attr('show','no');
                jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").filter(":first").show().attr('show','yes');
                tot_w_l = wibiyaToolbar.framework.prepare_width_l();
                tot_w_r = wibiyaToolbar.framework.prepare_width_r();
                w_calc = tot_w_r + tot_w_l + 100;
            }
            // icon mode support
            jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").parent().filter(".wibiyaToolbar_BtnHover").removeClass("wibiyaToolbar_BtnHover").addClass("wibiyaToolbar_BtnHoverOff");
        }
        else
        {
            // resize mode
            wibiyaToolbar.framework.hide_show_text();
        }
    }
};

wibiyaToolbar.framework.hide_show_text = function () {
    var leftOffset;
    if (jQuery(".itemLeft:last").offset() === null){
        leftOffset = 0;
    }
    else{
        leftOffset = jQuery(".itemLeft:last").offset().left;
    }
    
    var l = leftOffset + jQuery(".itemLeft:last").width();
    var r = jQuery(".itemRight:last").offset().left;
    var rl_diff = r - l;
    var isleft = (leftOffset > 0) ? true : false;
    var isright = (jQuery(".itemRight:last").offset().left > 0) ? true : false;
    if (rl_diff > 0 && isleft && isright) {

        if (rl_diff < 40) {
            jQuery(".itemLeft").find(".WibiyaMinRepresentation[show='no']").filter(":last").show().attr('show','yes');
            jQuery(".itemLeft").find(".TBcontainerDiv[show='yes']").filter(":last").hide().attr('show','no');
            //turn on hover for button
            jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").parent().filter(".wibiyaToolbar_BtnHover").removeClass("wibiyaToolbar_BtnHover").addClass("wibiyaToolbar_BtnHoverOff");

        }
        else
        {
            var items_1 = jQuery(".itemLeft").find(".TBcontainerDiv[show='no']");
            var cnt = items_1.length;
            while( rl_diff > 100 & cnt > 0)
            {
                items_1 = jQuery(".itemLeft").find(".TBcontainerDiv[show='no']");
                items_2 = jQuery(".itemLeft").find(".WibiyaMinRepresentation[show='yes']");
                cnt = items_1.length;
                items_1.filter(":first").show().attr('show','yes');
                //turn on hover for button
                jQuery(".itemLeft").find(".TBcontainerDiv[show='yes']").parent().filter(".wibiyaToolbar_BtnHoverOff").removeClass("wibiyaToolbar_BtnHoverOff").addClass("wibiyaToolbar_BtnHover");
                items_2.filter(":first").hide().attr('show','no');
                l = leftOffset + jQuery(".itemLeft:last").width();
                r = jQuery(".itemRight:last").offset().left;
                rl_diff = r - l;
            }
            if (rl_diff < 40) {
                jQuery(".itemLeft").find(".WibiyaMinRepresentation[show='no']").filter(":last").show().attr('show','yes');
                jQuery(".itemLeft").find(".TBcontainerDiv[show='yes']").filter(":last").hide().attr('show','no');
                //turn on hover for button
                jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").parent().filter(".wibiyaToolbar_BtnHover").removeClass("wibiyaToolbar_BtnHover").addClass("wibiyaToolbar_BtnHoverOff");
            }
        }
    }
};

wibiyaToolbar.framework.prepare_width_l = function ()
{
    var tot_w_l = 9;
    jQuery(".itemLeft").each(function() {
        tot_w_l = tot_w_l + jQuery(this).width();
    });
    return tot_w_l;
};

wibiyaToolbar.framework.prepare_width_r = function () {
    var tot_w_r = 35;
    jQuery(".itemRight").each(function() {
        tot_w_r = tot_w_r + jQuery(this).width();
    });
    return tot_w_r;
};

wibiyaToolbar.framework.hide_devider = function() {
    // go over deviders
    jQuery(".itemLeft  .wibiyaToolbar_divider").each(function()
    {
        current = jQuery(this).parent();
        isbtn_next=jQuery(current).next().find(".wibiyaToolbar_BtnHover").size();
        isbtn_prev=jQuery(current).prev().find(".wibiyaToolbar_BtnHover").size();
        if(isbtn_prev || isbtn_next)
        {
            jQuery(current).css({
                visibility: 'hidden',
                width: '0px'
            });
        }
    });

    // go over deviders
    jQuery(".itemRight  .wibiyaToolbar_divider").each(function()
    {
        current = jQuery(this).parent();
        isbtn_next=jQuery(current).next().find(".wibiyaToolbar_BtnHover").size();
        isbtn_prev=jQuery(current).prev().find(".wibiyaToolbar_BtnHover").size();
        if(isbtn_prev || isbtn_next)
        {
            //jQuery(current).remove();
            jQuery(current).css({
                visibility: 'hidden',
                width: '0px'
            });
        }
    });
};

wibiyaToolbar.framework.linkMouseOver = function(link){
    var btnhover = link.filter(".wibiyaToolbar_BtnHover");
    var _btnItem;
    jQuery.each(btnhover, function() {
        _btnItem = jQuery(this);
        _btnItem.find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        _btnItem.find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        _btnItem.find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        _btnItem.find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
};

wibiyaToolbar.framework.linkMouseOut = function(link){
    var btnhover = link.filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        var _btnItem = jQuery(this);
        _btnItem.find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        _btnItem.find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        _btnItem.find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        _btnItem.find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
};

wibiyaToolbar.framework.centerApps = function(){
	jQuery('.wibiyaToolbar_itemImg').each(function(){
                var item = jQuery(this);
		var marg = Math.ceil(20 - item.height());
		if(marg>0) jQuery(this).css('padding-top',marg+'px');
    
	});
}

//Define connect object
wibiyaToolbar.framework.connect = {};

//WIBIYA ENDPOINT
wibiyaToolbar.framework.connect.handlerUrl = 'http://conn.wibiya.com/connectivity/framework/connect_handler.php';
wibiyaToolbar.framework.connect.updateHandlerUrl = 'http://conn.wibiya.com/connectivity/framework/connect_handler_update.php';
wibiyaToolbar.framework.connect.root = 'http://conn.wibiya.com/connectivity/framework/';
wibiyaToolbar.framework.connect.imagesRoot = 'http://cdn.wibiya.com/Graphics_Toolbar/connect/framework/';


//GVS ENDPOINT
//wibiyaToolbar.framework.connect.handlerUrl = 'http://www.gvs.ro/connectivity-jumi/connect_handler.php';
//wibiyaToolbar.framework.connect.root = 'http://www.gvs.ro/connectivity-jumi/';

wibiyaToolbar.framework.connect.networksEnum = {
	facebook : 0,
	twitter : 1,
	yahoo : 2,
	myspace : 3,
	google : 4
};
wibiyaToolbar.framework.connect.friendStatusEnum = {
	online : "true",
	offline: "false"
};

wibiyaToolbar.framework.connect.networkCount = 5;

wibiyaToolbar.framework.connect.defaultAvatar = wibiyaToolbar.framework.connect.imagesRoot + 'default_avatar.gif';

//Object that holds the data from each network
wibiyaToolbar.framework.connect.networkData = function(networkId) {
	this.isConnected = false;
	this.isUserConnected = false;
	this.id = '';
	this.firstName = '';
	this.lastName = '';
	this.url = '';
	this.pic = '';
	this.location = '';
	this.about = '';
	this.networkSmallLogo 	= wibiyaToolbar.framework.connect.imagesRoot + 'small_logo_' + networkId + '.png';
	this.networkMediumLogo 	= wibiyaToolbar.framework.connect.imagesRoot + 'medium_logo_' + networkId + '.png';
	this.buttonConnected 	= wibiyaToolbar.framework.connect.imagesRoot + 'button_connected_' + networkId + '.png';
	this.buttonNotConnected = wibiyaToolbar.framework.connect.imagesRoot + 'button_not_connected_' + networkId + '.png';
	this.connectButtonUrl 	= function () {
		if (this.isConnected)
			return this.buttonConnected;
		else
			return this.buttonNotConnected;
	};
	//(key,value) => (page => array(json)) 
	this.friends = new Array();
	this.networkName = '';
	this.key = function () {
		//Get the md5 value from the cookie
		//If the cookie expired null is returned.
		return wibiyaToolbar.framework.connect.readCookie('wi_co_key_' + networkId);
	};
	this.sessionKey = '';
};

wibiyaToolbar.framework.connect.ready = false;

//check for loading of connect framework inside connect popup dialogs.
//This code is loaded outside the initialize function to work on small dialogs as well.
//alert('parent != null:' + (parent != null));
//alert('parent.window.opener != null' + (parent.window.opener != null));
//alert('document.location.hash.indexOf("connect") != -1:' + (document.location.hash.indexOf("connect") != -1));
if (parent != null && parent.window.opener != null && document.location.hash.indexOf("connect") != -1)
{
	var hashString = document.location.hash.substring(1, document.location.hash.length);
	//alert ('hashString:' + hashString)
	parent.window.opener.wibiyaToolbar.framework.connect.connectToCallback(hashString.split("_")[1]);
	parent.window.close();
};

function initializeConnect() {
	//The connect framework stores in a cookie which networks the user already connected to on each site.

	//If user connection cookie don't exist, create new cookie array
	//Verify that the profile object exist.
	//if (wibiyaToolbar.profile == undefined) wibiyaToolbar.framework.ReadProfile();
	//check for networks in the cookies store.
	if (wibiyaToolbar.profile.connectUserNetworks == undefined)
	{
		wibiyaToolbar.profile.connectUserNetworks = new Array(wibiyaToolbar.framework.connect.networkCount);
		for (i in wibiyaToolbar.profile.connectUserNetworks) {
			wibiyaToolbar.profile.connectUserNetworks[i] = "0";
		}
		wibiyaToolbar.framework.WriteProfile(null,null);
	}

	//Initialize networks array
	wibiyaToolbar.framework.connect.networks = new Array(wibiyaToolbar.framework.connect.networkCount);

	jQuery('body').trigger('connectReady');
	wibiyaToolbar.framework.connect.ready = true;
}

//Binding to the toolbarLoaded event failed because the #wibiyaToolbar doesn't exist when this code runs,
//so there was no element to bind.
//Here we use a timer to make sure that the profile exist before using it.
profileTimer = setInterval('checkProfile()', 50);
function checkProfile() {
	if (wibiyaToolbar.profile != undefined)
	{
		clearInterval(profileTimer);
		initializeConnect();
	}
}

//Create network object for each network that is requires by an application.
wibiyaToolbar.framework.connect.registerRequiredNetworks = function(networkIdsArray) {
	var id;
	for(id in networkIdsArray)
	{
		if (!wibiyaToolbar.framework.connect.networks[networkIdsArray[id]])
		{
			wibiyaToolbar.framework.connect.networks[networkIdsArray[id]] = 
				new wibiyaToolbar.framework.connect.networkData(networkIdsArray[id]);
			wibiyaToolbar.framework.connect.setNetworkName(networkIdsArray[id]);
			//update user connected options from cookies
			if (wibiyaToolbar.profile.connectUserNetworks[networkIdsArray[id]] == '1')
				wibiyaToolbar.framework.connect.networks[networkIdsArray[id]].isUserConnected = true;
		}
	}
}

wibiyaToolbar.framework.connect.setNetworkName = function(networkId) {
	switch (networkId)
	{
	case 0:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Facebook';
		break;
	case 1:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Twitter';
		break;
	case 2:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Yahoo';
		break;
	case 3:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Myspace';
		break;
	case 4:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Google';
		break;
	}
}
//Generic AJAX method with callback.
wibiyaToolbar.framework.connect.createCall = function(handlerUrl, callData, callbackFunction) {
	jQuery.ajax( {
		url : handlerUrl,
		dataType : 'jsonp',
		data : callData,
		type : 'GET',
		success : callbackFunction,
		cache: false
	});
};

//Gets network data for all required networks from the server handler.
wibiyaToolbar.framework.connect.getConnections = function(callback) {
	wibiyaToolbar.framework.connect.getConnectionsApplicationCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'action' : 'get_connections'
			}, wibiyaToolbar.framework.connect.getConnectionsCallback);
};

// Opens a popup to connect to a network
wibiyaToolbar.framework.connect.connectTo = function(networkId, callback) {
/*	wibiyaToolbar.framework.connect.connectingNetworkId = networkId;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'action' : 'get_connections'
			}, wibiyaToolbar.framework.connect.getConnectionsForConnectCallback);*/
	wibiyaToolbar.framework.connect.connectToApplicationCallback = callback;

	if (wibiyaToolbar.framework.connect.networks[networkId].isConnected == false)
	{
		var popupWidth;
		var popupHeight;
		switch (networkId)
		{
		case 0:
			popupWidth = 1000;
			popupHeight = 550;
			break;
		case 1:
			popupWidth = 880;
			popupHeight = 410;
			break;
		case 2:
			popupWidth = 500;
			popupHeight = 500;
			break;
		case 3:
			popupWidth = 500;
			popupHeight = 465;
			break;
		case 4:
			popupWidth = 400;
			popupHeight = 300;
			break;
		}
		var popupLeft = (document.documentElement.clientWidth - popupWidth) / 2;
		var popupTop = (document.documentElement.clientHeight - popupHeight) / 2;
		var windowSpecs = 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeft + ',top=' + popupTop;
		var connectPage = wibiyaToolbar.framework.connect.getConnectPage(networkId);
		window.open(connectPage + '?host_url=' + location.href,'wibiyaConnect',windowSpecs);
	}
	else
	{
		wibiyaToolbar.framework.connect.networks[networkId].isUserConnected = true;
		wibiyaToolbar.framework.connect.connectToCallback(networkId);
	}
};

//Get the right connect page address for each network
wibiyaToolbar.framework.connect.getConnectPage = function(networkId)
{
	var connectPageUrl = "";
	switch(networkId)
	{
		case wibiyaToolbar.framework.connect.networksEnum.facebook:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_facebook.php";
		break;
		case wibiyaToolbar.framework.connect.networksEnum.twitter:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_twitter.php";
		break;
		case wibiyaToolbar.framework.connect.networksEnum.yahoo:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_yahoo.php";
		break;
		case wibiyaToolbar.framework.connect.networksEnum.myspace:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_myspace.php";
		break;
		case wibiyaToolbar.framework.connect.networksEnum.google:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_google.php";
		break;
	}
	return connectPageUrl;
}

//Returns a connect button HTML for the required network, along with it's click event code.
wibiyaToolbar.framework.connect.getConnectButton = function(networkObj){
	
	//Create HTML of the button image, according to connected state.
	imgUrl = wibiyaToolbar.framework.connect.networks[networkObj['network']].connectButtonUrl();
	buttonHtml = '<img id="connectBtn' + networkObj['network'] + '" src="' + imgUrl + '" />';

	//If not connected, add connect script to click event
	//if (!wibiyaToolbar.framework.connect.networks[networkObj['network']].isConnected)
	//{
		//generate click event
		clickEventJs = 'jQuery("#connectBtn' + networkObj['network'] + '").click(function(){' + 
                    'var w_connect = wibiyaToolbar.framework.connect;' +
                    'w_connect.connectTo(' + networkObj['network'] + ', ' + 
                    networkObj['callback'] + ');' +
                '});';
		//Add to HTML
		buttonHtml += '<script type="text/javascript">' + clickEventJs + '</script>';
	//}else
	//{
		//generate click event
		//clickEventJs = 'jQuery("#connectBtn' + networkObj['network'] + '").click(function(){'  
        //           + networkObj['callback'] + '();' +
        //        '});';
		//Add to HTML
		//buttonHtml += '<script type="text/javascript">' + clickEventJs + '</script>';
	//}
	return buttonHtml;
};


wibiyaToolbar.framework.connect.getFriends = function(network, page, status, callback) {
	
	wibiyaToolbar.framework.connect.getFriendsApplicationsCallback = callback;
	
	var friends = wibiyaToolbar.framework.connect.networks[network].friends;
	
	if(friends[page])
	{
		callback(friends[page]);
	}
	else
	{
		wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, 
			{
				'network' 	: network, 
				'action' 	: 'get_friends',
				'page'		: page,
				'online'	: status
			}, wibiyaToolbar.framework.connect.getFriendsCallback);
	}
}

wibiyaToolbar.framework.connect.getUserStatus = function(network, callback) {
	wibiyaToolbar.framework.connect.getUserStatusApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'network' : network,
				'action': 'get_user_status'
			}, wibiyaToolbar.framework.connect.getUserStatusCallback);
};

wibiyaToolbar.framework.connect.getIsFan = function(pageid, callback) {
	wibiyaToolbar.framework.connect.getIsFanApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'pageid' : pageid,
				'action': 'get_isfan'
			}, wibiyaToolbar.framework.connect.getIsFanCallback);
};

wibiyaToolbar.framework.connect.setUserStatus = function(network, msg, callback) {
	wibiyaToolbar.framework.connect.setUserStatusApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'network' : network, 
				'msg' : msg,
				'action': 'set_user_status'				
			}, wibiyaToolbar.framework.connect.setUserStatusCallback);
};

wibiyaToolbar.framework.connect.messageFriends = function(network, friends,
		msg, callback) {
	wibiyaToolbar.framework.connect.messageFriendsApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'network' : network,
				'msg' : msg,
				'friends' : friends,
				'action': 'message_friends'
			}, wibiyaToolbar.framework.connect.messageFriendsCallback);
};

wibiyaToolbar.framework.connect.becomeFriend = function(friendId) {	
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'friend' : friendId,
				'action' : 'become_friend'
			}, wibiyaToolbar.framework.connect.becomeFriendCallback);
};

wibiyaToolbar.framework.connect.followUser = function(user,callback) {
       wibiyaToolbar.framework.connect.followUserApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'user' : user,
				'action' : 'follow_user'
			}, wibiyaToolbar.framework.connect.followUserCallback);
};

wibiyaToolbar.framework.connect.disconnect = function(networkIds) {	
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'networks[]' : networkIds,
				'action' : 'disconnect'
			}, wibiyaToolbar.framework.connect.disconnectCallback);
};

//Publish a message to a user/group/page/application wall.
//Currently supports only facebook (networkId should be 0)
//msg = the message to publish on the wall. string.
//targetId = the id of the wall owner: profile/group/page/application id. string.
//callback = function to call when operation is done. called with result data.
wibiyaToolbar.framework.connect.streamPublish = function(networkId, msg, targetId, callback) {
	wibiyaToolbar.framework.connect.streamPublishApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'network' : networkId, 
				'msg' : msg,
				'target_id': targetId,
				'action': 'stream_publish'				
			}, wibiyaToolbar.framework.connect.streamPublishCallback);
};

//Get user home timeline
//currently supports only twitter (networkId should be 1)
//returns a "statuses" array with all the internal data received from twitter.
//gets 50 tweets. If you need more paging should be implemented.
wibiyaToolbar.framework.connect.getHomeTimeline = function(networkId, callback) {
	wibiyaToolbar.framework.connect.getHomeTimelineApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'network' : networkId, 
				'action': 'get_home_timeline'				
			}, wibiyaToolbar.framework.connect.getHomeTimelineCallback);
};


//The callback functions
wibiyaToolbar.framework.connect.getConnectionsCallback = function(data) {
	wibiyaToolbar.framework.connect.updateNetworks(data);
	wibiyaToolbar.framework.connect.getConnectionsApplicationCallback();
};

//Update local networks data with new data just arrived from the server (using getConnections call)
wibiyaToolbar.framework.connect.updateNetworks = function(data) {
	// get the networks from the "data" object and fill the "wibiyaToolbar.framework.connect.networks" array
	for ( var i = 0; i < data.networks.length; i++) {
		if (wibiyaToolbar.framework.connect.networks[i] != undefined)
		{
			if (data.networks[i].id != undefined)
			{
				//Reset undefined values to empty strings
				if (data.networks[i].first_name == undefined) data.networks[i].first_name = '';
				if (data.networks[i].last_name == undefined) data.networks[i].last_name = '';
				if (data.networks[i].about == undefined) data.networks[i].about = '';
				if (data.networks[i].location == undefined) data.networks[i].location = '';
				//copy values to client side data store
				wibiyaToolbar.framework.connect.networks[i].isConnected = data.networks[i].isConnected;
				wibiyaToolbar.framework.connect.networks[i].id = data.networks[i].id;
				wibiyaToolbar.framework.connect.networks[i].firstName = data.networks[i].first_name;
				wibiyaToolbar.framework.connect.networks[i].lastName = data.networks[i].last_name;
				wibiyaToolbar.framework.connect.networks[i].url = data.networks[i].url;
				wibiyaToolbar.framework.connect.networks[i].pic = data.networks[i].pic;
				if (wibiyaToolbar.framework.connect.networks[i].pic==null)
					wibiyaToolbar.framework.connect.networks[i].pic=wibiyaToolbar.framework.connect.defaultAvatar;
				wibiyaToolbar.framework.connect.networks[i].location = data.networks[i].location;
				wibiyaToolbar.framework.connect.networks[i].about = data.networks[i].about;
				
				//Set optional fields, like twitter stats
				if (data.networks[i].followers_count != undefined)
				{
					wibiyaToolbar.framework.connect.networks[i].followers = data.networks[i].followers_count;
					wibiyaToolbar.framework.connect.networks[i].following = data.networks[i].friends_count;
					wibiyaToolbar.framework.connect.networks[i].tweets = data.networks[i].statuses_count;
				}
				//Set session key for facebook
				if (data.networks[i].session_key != undefined)
					wibiyaToolbar.framework.connect.networks[i].sessionKey = data.networks[i].session_key;
				//Set md5 key to cookie
				wibiyaToolbar.framework.connect.createShortCookie('wi_co_key_' + i, data.networks[i].key, 15);

			}
			else //Not connected on the server, remove client connection
			{
				wibiyaToolbar.framework.connect.networks[i].isUserConnected = false;
				wibiyaToolbar.profile.connectUserNetworks[i] = '0';
				wibiyaToolbar.framework.WriteProfile(null,null);
			}
		}
	}
}

wibiyaToolbar.framework.connect.connectToCallback = function(networkId) {
	//Mark network as connected, persist the cookie for 90 days:
	wibiyaToolbar.framework.connect.networks[networkId].isUserConnected = true;
	wibiyaToolbar.profile.connectUserNetworks[networkId] = '1';
	wibiyaToolbar.framework.WriteProfile(null,null);
	//network was not connected, we fetch it's data
	if (wibiyaToolbar.framework.connect.networks[networkId].isConnected == false)
	{
		wibiyaToolbar.framework.connect.getConnections(function(data){
			if (data != undefined)
				wibiyaToolbar.framework.connect.updateNetworks(data);
			wibiyaToolbar.framework.connect.connectToApplicationCallback(networkId);
			jQuery('body').trigger('wibiyaConnectNetworksChanged');
			wibiyaToolbar.framework.connect.RegisterAction(networkId);
		});
	}
	else //network was already connected, only connecting to framework and applications.
	{
		wibiyaToolbar.framework.connect.connectToApplicationCallback(networkId);
		jQuery('body').trigger('wibiyaConnectNetworksChanged');
		wibiyaToolbar.framework.connect.RegisterAction(networkId);
	}
};

wibiyaToolbar.framework.connect.getFriendsCallback = function(response) {
	var currentFriend;
	
	var data 	= response.data;
	var network = response.network;
	var page 	= response.page;

	//save the data 
	wibiyaToolbar.framework.connect.networks[network].friends[page] = data;
	//the dt includes the page that was read and the network
	wibiyaToolbar.framework.connect.getFriendsApplicationsCallback(data);
};



wibiyaToolbar.framework.connect.getUserInfoCallback = function(data) {
	wibiyaToolbar.framework.connect.getUserInfoApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.getIsFanCallback = function(data) {
	wibiyaToolbar.framework.connect.getIsFanApplicationsCallback(data);

};

wibiyaToolbar.framework.connect.getUserStatusCallback = function(data) {
	wibiyaToolbar.framework.connect.getUserStatusApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.setUserStatusCallback = function(data) {
	wibiyaToolbar.framework.connect.setUserStatusApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.streamPublishCallback = function(data) {
	wibiyaToolbar.framework.connect.streamPublishApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.getHomeTimelineCallback = function(data) {
	wibiyaToolbar.framework.connect.getHomeTimelineApplicationsCallback(data);
};

wibiyaToolbar.framework.connect.messageFriendsCallback = function(data) {
	wibiyaToolbar.framework.connect.messageFriendsApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.becomeFriendCallback = function(data) {
};

wibiyaToolbar.framework.connect.followUserCallback = function(data) {
       wibiyaToolbar.framework.connect.followUserApplicationsCallback(data);
};

wibiyaToolbar.framework.connect.disconnectCallback = function(data) {
	
	for(var i=0;i<data.networks.length;i++)
	{
		if(data.networks[i] == true)
		{
			//clear network data
			wibiyaToolbar.framework.connect.networks[i] = 
				new wibiyaToolbar.framework.connect.networkData(i);
			wibiyaToolbar.framework.connect.setNetworkName(i);
			//raise the event
			jQuery('body').trigger('wibiyaConnectNetworksChanged');
		}
	}
	
	wibiyaToolbar.profile.connectUserNetworks = new Array(wibiyaToolbar.framework.connect.networkCount);
	for (i in wibiyaToolbar.profile.connectUserNetworks) {
		wibiyaToolbar.profile.connectUserNetworks[i] = "0";
	}
	wibiyaToolbar.framework.WriteProfile(null,null);

};


//Cookies functions:

wibiyaToolbar.framework.connect.createCookie = function(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
};

wibiyaToolbar.framework.connect.createShortCookie = function(name,value,mins) {
	if (mins) {
		var date = new Date();
		date.setTime(date.getTime()+(mins*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
};

wibiyaToolbar.framework.connect.readCookie = function(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
};

wibiyaToolbar.framework.connect.eraseCookie = function(name) {
	wibiyaToolbar.framework.connect.createCookie(name,"",-1);
};

wibiyaToolbar.framework.connect.RegisterAction= function(networkId) {
        var userId = wibiyaToolbar.framework.connect.networks[networkId].id;
	var userName = wibiyaToolbar.framework.connect.networks[networkId].firstName + " " + wibiyaToolbar.framework.connect.networks[networkId].lastName;
	var pic = wibiyaToolbar.framework.connect.networks[networkId].pic;
	var profileUrl = wibiyaToolbar.framework.connect.networks[networkId].url;

	var extendedData = '{"networkId":"{0}","userId":"{1}","userName":"{2}","img":"{3}","profileUrl":"{4}"}';
	extendedData = extendedData.wiFormat(networkId, userId, userName, pic, profileUrl);
	//Write statistics
	//ActionId 101 is saved for "connect" actions, no other apps should use it.
	wibiyaToolbar.framework.fun_RegisterAction_extended('58',0,101,0,extendedData);
};
//define EE object
wibiyaToolbar.framework.ee={};

//define application messages
wibiyaToolbar.framework.ee.html={};
wibiyaToolbar.framework.ee.html['default']='Visit us at wibiya.com';
wibiyaToolbar.framework.ee.html['WibiyaConnect']='Click here to update your status on multiple social networks at once!';
wibiyaToolbar.framework.ee.html['WibiyaChat']='Click here to chat live with real people on the site publicly or privately.';
var jumps=8;

//add css
jQuery('head').append('<style type="text/css">.wibiyaNotifier{background:url("http://cdn.wibiya.com/Graphics_Toolbar/em.png") no-repeat left top;}.el{background:url("http://cdn.wibiya.com/Graphics_Toolbar/el.png") no-repeat left top;}.er{background:url("http://cdn.wibiya.com/Graphics_Toolbar/er.png") no-repeat left top;}.wibiyaNotifier:hover .w{background-color:white;}.wibiyaNotifier .x:hover{background-position:-18px 0;}</style>');

//the function that pops up the ee
wibiyaToolbar.framework.ee.promoteApp=function(style,app,unique,duration){
	if(typeof wibiyaToolbar.profile.ee=='undefined'){
		wibiyaToolbar.profile.ee={};
	}
	if(typeof app!='undefined'){
		if(typeof unique=='undefined'){unique=false;}
		if(unique!=true||wibiyaToolbar.profile.ee[app]!=1){
			if(typeof style=='undefined'){style=1;}
			if(typeof duration=='undefined'){duration=0;}
			var _hm='<a href="javascript://" onclick="wibiyaToolbar.framework.ee.close(\''+app+'\')" style="background:url(\'http://cdn.wibiya.com/Graphics_Toolbar/ex.png\') no-repeat left top;float:right;height:21px;position:absolute;right:8px;top:8px;width:18px;z-index:6;" class="x"><span style="display:none;">x</span></a>';
			_hm+='<span onclick="wibiyaToolbar.framework.ee.launch(\''+app+'\')" class="w" style="cursor:pointer;display:block;filter:alpha(opacity=15);height:76px;opacity:0.15;width:175px;"></span><span onclick="wibiyaToolbar.framework.ee.launch(\''+app+'\')" style="cursor:pointer;display:block;margin:5px 10px;position:relative;top:-76px">';
			_hm+=(typeof wibiyaToolbar.framework.ee.html[app]!='undefined'?wibiyaToolbar.framework.ee.html[app]:wibiyaToolbar.framework.ee.html['default']);
			_hm+='</span></div>';
			if(jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').length!=0){
				wibiyaToolbar.framework.ee.del(app);
			}
                        var eeBottom = 25;
                        if (typeof(wibiyaToolbar.Data.TBStyleXml)=="object")
                        {
                            eeBottom = parseInt(wibiyaToolbar.Data.TBStyleXml.size.height)-5;
                        }
			jQuery('#wibiyaToolbar [applicationname="'+app+'"]').parent().append('<div class="wibiyaNotifier" style="bottom:'+eeBottom+'px;color:#1B3743;font-family:Arial;font-size:13px;height:90px;line-height:20px;padding:15px !important;position:fixed;width:175px;z-index:5;"></div>');
			var left=jQuery('#wibiyaToolbar [applicationname="'+app+'"]').offset().left;
			var aw=jQuery('#wibiyaToolbar [applicationname="'+app+'"]').width();
			if(left<25){
				jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').addClass('el');
			}else if(wibiyaToolbar.framework.getViewportWidth()<(left+205)){
				jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').addClass('er').css('left',(left+aw-205));
			}else{
				jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').css('left',(left-(205/2)+(aw/2)));
			}
			jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').html(_hm).fadeIn(function(){
				if(duration>0){
					setTimeout(function(){
						wibiyaToolbar.framework.ee.close(app);
					},(duration*1000));
				}
			});
                        jumps=8
			wibiyaToolbar.framework.ee.bounceup();
			wibiyaToolbar.profile.ee[app]=1;
			wibiyaToolbar.framework.WriteProfile(null,null);
		}
	}
}

//function to trigger close event
wibiyaToolbar.framework.ee.launch=function(app){
	wibiyaToolbar.framework.ee.close(app);
	jQuery('body').trigger('eeLaunch',[app]);
}

//function to handle the "close" link
wibiyaToolbar.framework.ee.close=function(app){
	jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').fadeOut(function(){
		wibiyaToolbar.framework.ee.del(app);
	});
}

//function to delete an ee window
wibiyaToolbar.framework.ee.del=function(app){
	jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').remove();
};

wibiyaToolbar.framework.ee.bounceup=function(){
	jumps--;
	jQuery(".wibiyaNotifier").animate({bottom:'+=15px'},'300',function(){
		if(jumps>0){
			wibiyaToolbar.framework.ee.bouncedown();
		}
	});
};
wibiyaToolbar.framework.ee.bouncedown=function(){
	jumps--;
	jQuery(".wibiyaNotifier").animate({bottom:'-=15px'},'300',function(){
		if(jumps>0){
			wibiyaToolbar.framework.ee.bounceup();
		}
	});
};

var searchProviders = [{"searchProviderName":"Site Search","searchQueryURL":"http:\/\/toolbar2.wibiya.com\/search.php?type=blog&q=AAAA&site_name=Wibiya_SITENAME&site_url=Wibiya_SITEURL"},{"searchProviderName":"Google Search","searchQueryURL":"http:\/\/toolbar2.wibiya.com\/search.php?type=web&q=AAAA&site_name=Wibiya_SITENAME&site_url=Wibiya_SITEURL"}];

function _fun_wibiya_openSearchProviders_1(object){
    if (jQuery('#wibiyaToolbar_SearchProviders_1').attr('menu_opened')=='yes'){
	jQuery('.wibiyaToolbar_SearchProviders_1').slideUp(300).attr('menu_opened','no');
    }
    else{
	object.parent().find('.wibiyaToolbar_tooltip').vhide();
	jQuery('#wibiyaToolbar_SearchProviders_1').slideDown(300, function() {
	    fun_AddClickHandlerForBody(jQuery(this));
	}).attr('menu_opened','yes');
    }
};

function fun_AddClickHandlerForBody(Wiwi) {
    jQuery('body').click(function() {
	Wiwi.slideUp(300, function(){
	    Wiwi.attr('menu_opened','no');
	    if (Wiwi.attr('id')=='wibiyaToolbar_share_menu') {
		Wiwi.remove();
	    }
	});
	jQuery('body').unbind('click');
    });
};

function fun_wibiya_Search_1(_index,_searchQuery){
    var _action_options =
	{
	actionType: 'Link',
	name:'Search_'+_index,
	title : searchProviders[_index].searchProviderName,
	windowType : 1,
	link : wibiyaToolbar.framework.LinkDataReplacor(searchProviders[_index].searchQueryURL).replace(/aaaa/gi, _searchQuery),
	scroll : 'YES',
	icon : jQuery('#wibiyaToolbar_search_provider_icon_1').attr('src'),
	dimentions : { width: 990 ,height: '80%'},
	position : { right: "middle" ,bottom: 30}
    };

    wibiyaToolbar.framework.openWiwi(_action_options);
};var itemsNodes_2 = [{"lnCode":{"0":"zh-CN"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Chinese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_china.png"},{"lnCode":{"0":"nl"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Dutch","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_netherlands.png"},{"lnCode":{"0":"en"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"English","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_usa.png"},{"lnCode":{"0":"fr"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"French","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_france.png"},{"lnCode":{"0":"de"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"German","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_germany.png"},{"lnCode":{"0":"it"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Italian","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_italy.png"},{"lnCode":{"0":"ja"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Japanese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_japan.png"},{"lnCode":{"0":"ko"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Korean","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_korea.png"},{"lnCode":{"0":"pt-PT"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Portuguese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_portugal.png"},{"lnCode":{"0":"ru"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Russian","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_russia.png"},{"lnCode":{"0":"es"},"windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Spanish","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_spain.png"}];
function openMenu_2(itemObject){
    if (itemObject.attr('menu_opened')=='yes'){
	wibiyaToolbar.framework.CloseMenu(itemObject);
    }
    else{
	wibiyaToolbar.framework.OpenMenu(itemObject);
    }
};

function fun_AddClickHandlerForBody(Wiwi){
    var _body = jQuery('body');
    _body.click(function(){
	Wiwi.slideUp(300, function(){
	    Wiwi.attr('menu_opened','no');
	    if (Wiwi.attr('id')=='wibiyaToolbar_share_menu'){
		Wiwi.remove();
	    }
	});
    });
    _body.unbind('click');
};

function translateTo(destLang){
    jQuery('body').translate({
	to: destLang[0],
	not: '#wibiyaToolbar, #div_share, #div_dialog_background, #a2apage_dropdown, .widget_calendar',
	fromOriginal: true,
	returnAll: true,
	async: true,
	complete: function(){ jQuery('.itranslate_loader').remove(); },
	error: function(){ jQuery('.itranslate_loader').remove(); }
    });
    wibiyaToolbar.framework.delayAction(function(){ jQuery('.itranslate_loader').remove(); },20000);
};/* jQuery Translate plugin and related components */
/* http://code.google.com/p/jquery-translate/
 * Version: 1.3.9
 * License: MIT, GPL  (c) 2009 Balazs Endresz
 */
(function(d){var a,j,h,g=false,b=false,i=[];function e(){j=c.GL=google.language;h=j.Languages;g=true;var k;while(k=i.shift()){k()}}function f(){}function c(){this.extend(d.translate);delete this.defaults;delete this.fn}c.prototype={version:"1.3.9",translateInit:function(k,m){var l=this;this.options=m;m.from=this.toLanguageCode(m.from)||"";m.to=this.toLanguageCode(m.to)||"";if(m.fromOriginal&&m.nodes[0]){m.nodes.each(function(n){var o=d.translate.getData(this,m.from,m);if(!o){return false}k[n]=o})}if(typeof k==="string"){if(!m.comments){k=this.stripComments(k)}this.rawSource="<div>"+k+"</div>";this.isString=true}else{if(!m.comments){k=d.map(k,function(n){return d.translate.stripComments(n)})}this.rawSource="<div>"+k.join("</div><div>")+"</div>";this.isString=false}this.from=m.from;this.to=m.to;this.source=k;this.elements=m.nodes;this.rawTranslation="";this.translation=[];this.startPos=0;this.i=0;this.stopped=false;m.start.call(this,m.nodes[0]?m.nodes:k,m.from,m.to,m);if(m.timeout>0){this.timeout=setTimeout(function(){m.onTimeout.call(l,m.nodes[0]?m.nodes:k,m.from,m.to,m)},m.timeout)}(m.toggle&&m.nodes[0])?this._toggle():this.translate();return this},translate:function(){if(this.stopped){return}var t=this,k=this.options;this.rawSourceSub=this.truncate(this.rawSource.substr(this.startPos),1750);this.startPos+=this.rawSourceSub.length;var q=this.rawTranslation.length,u;while((u=this.rawTranslation.lastIndexOf("</div>",q))>-1){q=u-1;var v=this.rawTranslation.substr(0,q+1),s=v.match(/<div[> ]/gi),r=v.match(/<\/div>/gi);s=s?s.length:0;r=r?r.length:0;if(s!=r+1){continue}var m=d(this.rawTranslation.substr(0,q+7)),p=m.length,n=this.i;if(n==p){break}m.slice(n,p).each(function(l,o){(function(){if(this.stopped){return false}var y=d(o).html().replace(/^\s/,""),x=n+l,z=this.source,A=this.from.length<2&&this.detectedSourceLanguage||this.from;this.translation[x]=y;if(!k.nodes[0]){if(this.isString){this.translation=y}else{z=this.source[x]}k.each.call(this,x,y,z,A,this.to,k)}else{this.each(x,this.elements[x],y,this.source[x],A,this.to,k);k.each.call(this,x,this.elements[x],y,this.source[x],A,this.to,k)}this.i++}).call(t)});break}if(this.rawSourceSub.length>0){j.translate(this.rawSourceSub,this.from,this.to,function(l){(function(){if(l.error){return k.error.call(this,l.error,this.rawSourceSub,this.from,this.to,k)}this.rawTranslation+=l.translation||this.rawSourceSub;this.detectedSourceLanguage=l.detectedSourceLanguage;this.translate()}).call(t)});if(!k.nodes[0]){return}}else{if(!this.rawTranslation){return}var w=this.from.length<2&&this.detectedSourceLanguage||this.from;if(this.timeout){clearTimeout(this.timeout)}if(!k.nodes[0]){k.complete.call(this,this.translation,this.source,w,this.to,k)}else{k.complete.call(this,this.elements.end(),this.elements,this.translation,this.source,w,this.to,k)}}},stop:function(){if(this.stopped){return this}this.stopped=true;this.options.error.call(this,{message:"stopped"});return this}};d.translate=function(m,l,k,o){if(m==a){return new c()}if(d.isFunction(m)){return d.translate.ready(m,l)}var n=new c();return d.translate.ready(function(){return n.translateInit(m,d.translate._getOpt(l,k,o))},false,n)};d.translate.fn=d.translate.prototype=c.prototype;d.translate.fn.extend=d.translate.extend=d.extend;d.translate.extend({stripComments:function(k){return k.replace(/<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)>/g,"")},truncate:function(q,l){var m,u,r,p,o,s,k=encodeURIComponent(q);for(m=0;m<10;m++){try{s=decodeURIComponent(k.substr(0,l-m))}catch(n){continue}if(s){break}}return(!(u=/<(?![^<]*>)/.exec(s)))?((!(r=/>\s*$/.exec(s)))?((p=/[\.\?\!;:](?![^\.\?\!;:]*[\.\?\!;:])/.exec(s))?((o=/>(?![^>]*<)/.exec(s))?(p.index>o.index?s.substring(0,p.index+1):s.substring(0,o.index+1)):s.substring(0,p.index+1)):s):s):s.substring(0,u.index)},getLanguages:function(t,s){if(t==a||(s==a&&!t)){return h}var r={},m=s,p=h;if(s){p=d.translate.getLanguages(t)}else{if(typeof t==="object"){m=t}}if(m){for(var q=0,n=m.length,k,o;q<n;q++){k=d.translate.toLanguageCode(m[q]);for(o in p){if(k===p[o]){r[o]=p[o]}}}}else{for(var o in h){if(j.isTranslatable(h[o])){r[o]=h[o]}}}return r},toLanguage:function(m,n){for(var k in h){if(m===k||m===h[k]||m.toUpperCase()===k||m.toLowerCase()===h[k].toLowerCase()){return n==="lowercase"?k.toLowerCase():n==="capitalize"?k.charAt(0).toUpperCase()+k.substr(1).toLowerCase():k}}},toLanguageCode:function(k){return h.a||h[d.translate.toLanguage(k)]},same:function(l,k){return l===k||d.translate.toLanguageCode(l)===d.translate.toLanguageCode(k)},isTranslatable:function(k){return j.isTranslatable(d.translate.toLanguageCode(k))},getBranding:function(l,k,m){return d(j.getBranding(l,k,m))},load:function(l,m,k){b=true;function n(){google.load(m||"language",k||"1",{callback:e})}(typeof google!=="undefined"&&google.load)?n():d.getScript("http://www.google.com/jsapi?"+(l?"key="+l:""),n);return d.translate},ready:function(k,m,l){g?k():i.push(k);if(!b&&!m){d.translate.load()}return l||d.translate},_getOpt:function(l,k,r,q){var p,n,m={};if(typeof l==="object"){m=l}else{if(!k&&!r){n=l}if(!r&&k){if(typeof k==="object"){n=l;m=k}else{p=l;n=k}}if(l!=a&&k&&r){p=l;n=k;m=r}m.from=p||m.from||"";m.to=n||m.to||""}if(m.fromOriginal){m.toggle=true}if(m.toggle){m.data=true}if(m.async===true){m.async=2}return d.extend({},d.translate._defaults,(q?d.fn.translate.defaults:d.translate.defaults),m)},_defaults:{comments:false,start:f,error:f,each:f,complete:f,onTimeout:f,timeout:0,from:"",to:"",nodes:[],walk:true,returnAll:false,replace:true,rebind:true,data:true,setLangAttr:false,subject:true,not:"",altAndVal:true,async:false,toggle:false,fromOriginal:false}});d.translate.defaults=d.extend({},d.translate._defaults)})(jQuery);(function(c){var a={text:true,button:true,submit:true};function b(g,f){var h=g.css("text-align");g.css("direction",f);if(h==="right"){g.css("text-align","left")}if(h==="left"){g.css("text-align","right")}}function d(f,g){var h=f.nodeName.toUpperCase(),e=h==="INPUT"&&c.attr(f,"type").toLowerCase();return typeof g.subject==="string"?g.subject:g.altAndVal&&(h==="IMG"||e==="image")?"alt":g.altAndVal&&a[e]?"value":h==="TEXTAREA"?"value":"html"}c.translate.fn._toggle=function(){var g=this,h=this.options,f=h.nodes,i=h.to,e=false;f.each(function(j){g.i=j;var l=c(this),k=g.getData(this,i,h);if(!k){return !(e=true)}g.translation.push(k);g.setLangAttr(l,i,h);g.replace(l,k,h);h.each.call(g,j,g.elements[j],k,g.source[j],g.from,i,h)});!e?h.complete.call(this,f.end(),f,g.translation,this.source,this.from,this.to,h):this.translate()};c.translate.extend({isRtl:{ar:true,he:true,iw:true,fa:true,ur:true},each:function(g,j,f,h,n,m,l){var k=c(j);c.translate.setData(j,f,h,n,m,l);c.translate.replace(k,f,l);c.translate.setLangAttr(k,m,l)},getData:function(e,h,g){var f=c.data(e,"translation");return f&&f[h]&&f[h][d(e,g)]},setData:function(h,e,g,l,k,j){if(!j.data){return}var f=d(h,j),i=c.data(h,"translation");i=i||c.data(h,"translation",{});(i[l]=i[l]||{})[f]=g;(i[k]=i[k]||{})[f]=e;c.data(h,"translation."+l+"."+f,g);c.data(h,"translation."+k+"."+f,e)},replace:function(j,p,g){if(!g.replace){return}if(typeof g.subject==="string"){return j.attr(g.subject,p)}var i=j[0],m=i.nodeName.toUpperCase(),l=m==="INPUT"&&c.attr(i,"type").toLowerCase(),k=c.translate.isRtl,h=c.data(i,"lang");if(h===g.to){return}if(k[g.to]!==k[h||g.from]){if(k[g.to]){b(j,"rtl")}else{if(j.css("direction")==="rtl"){b(j,"ltr")}}}if(g.altAndVal&&(m==="IMG"||l==="image")){j.attr("alt",p)}else{if(m==="TEXTAREA"||g.altAndVal&&a[l]){j.val(p)}else{if(g.rebind){var f=j.find("*").not("script"),n=c("<div/>").html(p);c.translate.copyEvents(f,n.find("*"));j.html(n.contents())}else{j.html(p)}}}c.data(i,"lang",g.to)},setLangAttr:function(f,h,g){if(g.setLangAttr){f.attr(g.setLangAttr===true?"lang":g.setLangAttr,h)}},copyEvents:function(f,e){e.each(function(h){var l=f[h];if(!this||!l){return false}if(({SCRIPT:1,NOSCRIPT:1,STYLE:1,OBJECT:1,IFRAME:1})[l.nodeName.toUpperCase()]){return true}var g=c.data(l,"events");if(!g){return true}for(var k in g){for(var j in g[k]){c.event.add(this,k,g[k][j],g[k][j].data)}}})}});c.fn.translate=function(f,e,i){var g=c.translate._getOpt(f,e,i,true),h=c.extend({},c.translate._defaults,c.fn.translate.defaults,g,{complete:function(k,j){g.nodes=k;c.translate(j,g)},each:function(){}});if(this.nodesContainingText){return this.nodesContainingText(h)}g.nodes=this;c.translate(c.map(this,function(j){return c(j).html()||c(j).val()}),g);return this};c.fn.translate.defaults=c.extend({},c.translate._defaults)})(jQuery);(function(a){a.translate.ui=a.translate.fn.ui=function(f,d,i){var h="",g="",e="";if(i){g="<"+i+">";e="</"+i+">"}a.each(a.translate.getLanguages(true),function(b,c){h+=("<"+d+">"+g+b.charAt(0)+b.substring(1).toLowerCase()+e+"</"+d+">")});return a("<"+f+' class="jq-translate-ui">'+h+"</"+f+">")}})(jQuery);(function(a){a.translate.fn.progress=function(b,d){if(!this.i){this.pr=0}this.pr+=this.source[this.i].length;var c=100*this.pr/(this.rawSource.length-(11*(this.i+1)));if(b){var f=a(b);if(!this.i&&!f.hasClass("ui-progressbar")){f.progressbar(d)}f.progressbar("option","value",c)}return c}})(jQuery);(function(b){function a(){}a.prototype={init:function(e,d){this.textArray=[];this.elements=[];this.options=d;this.jquery=e;this.n=-1;if(d.async===true){d.async=2}if(d.not){e=e.not(d.not);e=e.add(e.find("*").not(d.not)).not(b(d.not).find("*"))}else{e=e.add(e.find("*"))}this.jq=e;this.jql=this.jq.length;return this.process()},process:function(){this.n++;var i=this,d=this.options,p="",h=false,g=false,f=this.jq[this.n],k,m,j;if(this.n==this.jql){j=this.jquery.pushStack(this.elements,"nodesContainingText");d.complete.call(j,j,this.textArray);if(d.returnAll===false&&d.walk===false){return this.jquery}return j}if(!f){return this.process()}k=b(f);var n=f.nodeName.toUpperCase(),l=n==="INPUT"&&b.attr(f,"type").toLowerCase();if(({SCRIPT:1,NOSCRIPT:1,STYLE:1,OBJECT:1,IFRAME:1})[n]){return this.process()}if(typeof d.subject==="string"){p=k.attr(d.subject)}else{if(d.altAndVal&&(n==="IMG"||l==="image")){p=k.attr("alt")}else{if(d.altAndVal&&({text:1,button:1,submit:1})[l]){p=k.val()}else{if(n==="TEXTAREA"){p=k.val()}else{m=f.firstChild;if(d.walk!==true){g=true}else{while(m){if(m.nodeType==1){g=true;break}m=m.nextSibling}}if(!g){p=k.text()}else{if(d.walk!==true){h=true}m=f.firstChild;while(m){if(m.nodeType==3&&m.nodeValue.match(/\S/)!==null){if(m.nodeValue.match(/<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)>/)!==null){if(m.nodeValue.match(/(\S+(?=.*<))|(>(?=.*\S+))/)!==null){h=true;break}}else{h=true;break}}m=m.nextSibling}if(h){p=k.html().replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,"");this.jq=this.jq.not(k.find("*"))}}}}}}if(!p){return this.process()}this.elements.push(f);if(d.comments===false){p=this.stripComments(p)}this.textArray.push(p);d.each.call(f,this.elements.length-1,f,p);if(d.async){setTimeout(function(){i.process()},d.async);return this.jquery}else{return this.process()}},stripComments:function(d){return d.replace(/<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)>/g,"")}};b.fn.nodesContainingText=function(d){d=b.extend({},c,b.fn.nodesContainingText.defaults,d);return new a().init(this,d)};var c={not:"",async:false,each:function(){},complete:function(){},comments:false,returnAll:true,walk:true,altAndVal:false,subject:true};b.fn.nodesContainingText.defaults=c})(jQuery);wibiyaToolbar.framework.fun_OpenResentPostMenu_3 = function(){
    wibiyaToolbar.framework.fun_BuildResentPost_3();
};


wibiyaToolbar.framework.fun_BuildResentPost_3 = function(){
    if (jQuery('#wibiyaToolbar_recentMenu_3').length == 0) {
	var _recentMenu = '<div menu_opened="no" class="wibiyaToolbar_recent" id="wibiyaToolbar_recentMenu_3" style="display:none;left:0px;">\
        <div id="wibiyaToolbar_recent_top">\
        <div id="wibiyaToolbar_recent_top_left"><div class="wibiya_toolbar_side_seperator"></div><div class="wibiya_toolbar_left_gradian"></div>\
        <div class="wibiya_toolbar_side_seperator wibiya_toolbar_side_left">\
        <div class="wibiya_toolbar_side_70per first left wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_20per first left wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_40per first left wibiya_toolbar_BG"></div>\
        <div class="wibiya_toolbar_side_20per second left wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_70per second left wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity"></div>\
        <div class="wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity"></div><div class="wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity"></div></div>\
		</div>\
        <div id="wibiyaToolbar_recent_top_center"><div class="wibiya_toolbar_middle_gradian"></div><div class="wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity"></div>\
        <div class="wibiyaToolbar_recent_close">\
        <div class="wibiyaToolbar_recent_close_a"></div>\
        </div>\
        <div class="wibiyaToolbar_recent_title wibiyaToolbar_recent_top_title">\
        <img src="http://cdn.wibiya.com/Graphics_Toolbar/Icons/recent_dark.png" class="wibiyaToolbar_recent_icon" alt=""/>\
        <div class="wibiyaToolbar_recent_caption">\
        Post recenti\
        </div>\
        </div>\
        </div>\
        <div id="wibiyaToolbar_recent_top_right"><div class="wibiya_toolbar_side_seperator wibiya_toolbar_side_right">\
		<div class="wibiya_toolbar_side_70per first right wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_20per first right wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_40per first right wibiya_toolbar_BG"></div>\
		<div class="wibiya_toolbar_side_20per second right wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_70per second right wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity"></div>\
		<div class="wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity"></div><div class="wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity"></div>\
		</div><div class="wibiya_toolbar_right_gradian"></div><div class="wibiya_toolbar_side_seperator"></div>\
		</div>\
        </div>\
        <table width="100%" border="0" style="float:left;margin:0;padding:0;border-collapse:collapse;">\
        <tr>\
        <td id="wibiyaToolbar_recent_left">\
        </td>\
        <td class="wibiyaToolbar_recent_body" width="440">\
        <div class="wibiyaToolbar_recent_body_inner">\
        <ul class="wibiyaToolbar_Menu_UL" appId="7" id="recentMenuList_3" appid="7" style="margin:0;width:440px;">\
            </ul>\
            </div>\
            </td>\
            <td id="wibiyaToolbar_recent_right">\
            </td>\
            </tr>\
            </table>\
            <div id="wibiyaToolbar_recent_loader" style="position:absolute; left: 200px; top: 170px"><img src="http://cdn.wibiya.com/Graphics_Toolbar/Icons/loading.gif" border="0" /></div>\
            </div>';

	jQuery('#wibiyaToolbar_item_normal_3').append(_recentMenu);

	jQuery('#wibiyaToolbar_recentMenu_3').css({
	    'z-index':1000,
	    'width':'450px',
	    'height': '350px'
	});

	jQuery('#wibiyaToolbar_recentMenu_3 wibiyaToolbar_recent_body').css({'height': '328px'});
	wibiyaToolbar.framework.OpenMenu(jQuery('#wibiyaToolbar_recentMenu_3'));

	var _rssUrl = 'http://www.guizzardi.net/?feed=rss2';
	var _ShowImages = "1";

	jQuery.get('http://toolbar2.wibiya.com/Handlers/New_Navigator.php', {
	    action:'all',
	    URL:_rssUrl
	},function(data){
	    jQuery('#wibiyaToolbar_recent_loader').remove();
	    var _size = data.length;
	    var _To =  0;
	    var _Imgcounter = 0;
	    for (i = _size-1; i >= _To; i--){
		_TagsSize = data[i].tags.length;
		if (_TagsSize>3){
		    _TagsSize = 3;
		}
		var _tags = '';
		for (_Tagindex = 0; _Tagindex < _TagsSize; _Tagindex++){
		    _tags += data[i].tags[_Tagindex];
		    if (_Tagindex<_TagsSize-1){
			_tags += ',';
		    }
		}

		var _publicationDate = data[i].publicationDate;
		if (data[i].publicationDate == '31-Dec-1969'){
		    _publicationDate = "";
		}

		var itmeHtml = '<li class="wibiyaToolbar_recentItem_normal" index="'+i+'" link="'+data[i].linkUrl+'" style="cursor: pointer; height: auto">'
		    +'<table width="100%" cellpadding="0" cellspacing="0" class="wibiyaToolbar_td" style="border-bottom:dashed 1px #e0e0e0">'
		    +'<tr>';

		if (_ShowImages==1){
		    var _imgId = "navigatorImg"+_Imgcounter;

		    itmeHtml += '<td width="70" class="wibiyaToolbar_td" style="padding: 8px;">\
			<div style="width:60px; height:60px;border: solid 1px #d0d0d0; background-color: #ffffff; background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/frame.gif) ">\
			<table class="wibiyaToolbar_td" width="100%" height="100%" cellpadding="0" cellspacing="0">\
			<tr>\
			<td align="center" valign="middle" class="wibiyaToolbar_td">\
			<div style="overflow:hidden;width:60px;height:60px;"><img onload="fun_imagefit_3(\''+_imgId+'\')"  src="'+data[i].imageUrl+'" title="'+data[i].title+'" class="navigatorImg WibyaImgPreview" id="'+_imgId+'"></div>\
			</td>\
			</tr>\
			</table>\
			</div>\
			</td>';
		}

		itmeHtml += '<td align="left" class="wibiyaToolbar_td" style="width: 310px;vertical-align:middle;">\
		    <table width="100%" class="wibiyaToolbar_td">\
		    <tr>\
		    <td align="left" valign="top" style="padding:5px; background-color: transparent" class="wibiyaToolbar_recent_title">'+data[i].title+'</td>\
		    </tr>\
		    <tr>\
		    <td align="left" valign="middle" class="wibiyaToolbar_td" style="padding:5px;color: #888888">\
		    <div class="wibiyaToolbar_recent_tags"><font style="color: #565656; margin-right: 8px">'+_publicationDate+'</font>'+_tags+'</div>\
		    </td>\
		    </tr>\
		    </table>\
		    </td>\
		    <td width="20" class="wibiyaToolbar_td" style="vertical-align:middle;" align="center" valign="middle">\
		    <img src="http://cdn.wibiya.com/Graphics_Toolbar/Themes/panel_link_icon.png" border="0">\
		    </td>\
		    </tr>\
		    </table>\
		    </li>';

		jQuery("#recentMenuList_3").append(itmeHtml);

                if (_ShowImages==1){
                    fun_imagefit_3(jQuery("#navigatorImg"+_Imgcounter).attr("id"));
                    _Imgcounter++;
                }
		
	    }

	    jQuery(".wibiyaToolbar_recentItem_normal").mouseover(function(){
		jQuery(this).hand().removeClass().addClass("wibiyaToolbar_recentItem_over");
	    }).mouseout(function(){
		jQuery(this).removeClass().addClass("wibiyaToolbar_recentItem_normal");
	    }).click(function(){
		var NavLink = jQuery(this).attr('link');
		wibiyaToolbar.framework.fun_RegisterAction_extended(7,217161,2,0,'{"link" : "'+NavLink+'"}');
		setTimeout('window.location = "'+NavLink+'";',1000);
	    });

	    jQuery(".wibiyaToolbar_recentItem_normal").each(function(){
		if (IsCurrentPost_3(jQuery(this).find(".wibiyaToolbar_recent_title").text())){
		    jQuery(this).removeClass().addClass("wibiyaToolbar_recentItem_selected").unbind();
		}
	    });
	    _fun_imagePreview_3();
	},'jsonp');
    }
    else{
	wibiyaToolbar.framework.OpenMenu(jQuery("#wibiyaToolbar_recentMenu_3"));
    }
};

function IsCurrentPost_3(PostTitle){
    return document.title.replace(unescape(wibiyaToolbar.Data.SiteName),"").indexOf(PostTitle) != -1;
};

wibiyaToolbar.framework.fun_GoToRandomPost_3 = function (){
    jQuery.get('http://toolbar2.wibiya.com/Handlers/New_Navigator.php', {
	action:'random',
	URL:'http://www.guizzardi.net/?feed=rss2'
    },function(data){
	setTimeout('window.location = "'+data.link+'";',1000);
    },'jsonp');
};

function fun_imagefit_3(_ImgId){
    if(typeof _ImgId == "undefined"){
        return;
    }

    var _img = jQuery("#"+_ImgId+"");
    //get  the container dimesions
    _width = _img.parent().width();
    _height = _img.parent().height();
    _img.attr('startwidth', _img.width()).attr('startheight', _img.height());

    // strech/skew the image
    if (_img.width() <= _img.height()){
	_img.width(_width + 'px').height(Math.round(_img.attr('startheight')*(_img.width()/_img.attr('startwidth'))));
    }
    else{
	_img.height(_height + 'px').width(Math.round(_img.attr('startwidth')*(_img.height()/_img.attr('startheight'))));
    }
};

function _fun_imagePreview_3(){
    /* CONFIG
     these 2 variable determine popup's distance from the cursor
     you might want to adjust to get the right result */
    xOffset = 10;
    yOffset = 30;
    /* END CONFIG */

    jQuery("img.WibyaImgPreview").mouseover(function(e){
	jQuery("body").append("<p id='preview' style='z-index:11000000;position:absolute;border:1px solid #ccc;background:#333;padding:5px;color:#fff;'><img src='"+ this.src +"' alt='Image preview' /></p>");
	jQuery("#preview")
	.css("bottom",(wibiyaToolbar.framework.getViewportHeight()-e.pageY-xOffset) + "px")
	.css("left",(e.pageX + yOffset) + "px")
    }).mouseout(function(){
	jQuery("#preview").remove();
    });
};wibiyaToolbar.framework.fun_GeneralApp_4 = function (_action_options_starter){
    if (jQuery('#AppWin_4').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_4');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
        }
        else
        {
            jQuery('#AppWin_4').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(31,217162,3,0,'');
        }
    }
    else
    {
        var _action_options =
            {
            actionType: 'Link',
            name:'AppWin_4',
            title :'Online',
            windowType : 0,
            link : wibiyaToolbar.framework.LinkDataReplacor('http://whos.amung.us/wibiya/stats/0wibiya28017/'),
            scroll : 'YES',
            code : '',
            dimentions : { width: 950 ,height: '400'},
            icon : 'http://cdn.wibiya.com/Graphics_Toolbar/Icons/wau_dark.png',
            position : {left : 40 , bottom : 30 },
            appId : 31,
            side : 'left',
            starterOptions : _action_options_starter,
            toolbarAppId : 217162
            };

        wibiyaToolbar.framework.openWiwi(_action_options);
    }
};

wibiyaToolbar.framework.fun_PopOut_4 = function (_action_options){
if (jQuery('#AppWin_4').length >0){
    jQuery('#AppWin_4').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
}

PopOutWindow = window.open( wibiyaToolbar.framework.LinkDataReplacor('http://whos.amung.us/wibiya/stats/0wibiya28017/'),'Popout_4' , 'height=400,width=950,location=no');

};loadjscssfile("http://cdn.wibiya.com/Scripts/wibiya_lib.js","js","head");

jQuery("document").ready(function(){
    setTimeout("wibiyaWauLoad();",2000);
});

function wibiyaWauLoad()
{
    wibiyaToolbar.wau = {};
    wibiyaToolbar.wau.html = jQuery("div[applicationName='WhosAmungUs']").find(".wibiyaToolbar_itemText").html();
    wibiyaToolbar.wau.text = jQuery("div[applicationName='WhosAmungUs']").find(".wibiyaToolbar_itemText").text();
    wau_wib_obj.init('0wibiya28017');
 //loadjscssfile1("http://whos.amung.us/api/query/wibiya/0wibiya28017/","js","head");

}

function wibiyaWauRefresh(users)
{
    setTimeout("updateWhosAmungUs("+users+");",2000);
}

function updateWhosAmungUs(users)
{
     if (wibiyaToolbar.wau.text!='')
     {
        var wautext = wibiyaToolbar.wau.html.replace(wibiyaToolbar.wau.text,users+" "+wibiyaToolbar.wau.text);
        jQuery("div[applicationName='WhosAmungUs']").find(".wibiyaToolbar_itemText").html(wautext);
     }
    else{
        jQuery("div[applicationName='WhosAmungUs']").find(".wibiyaToolbar_itemText").remove();
        jQuery("div[applicationName='WhosAmungUs']").find(".TBcontainerDiv").append('<span class="wibiyaToolbar_itemText">'+users+'</span>');
    }
}

function pad(number, length)
{

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;

}var LinkNodes_5 = [{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=zh-CN&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Chinese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_china.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=nl&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Dutch","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_netherlands.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=en&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"English","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_usa.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=fr&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"French","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_france.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=de&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"German","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_germany.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=it&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Italian","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_italy.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=ja&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Japanese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_japan.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=ko&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Korean","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_korea.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=pt&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Portuguese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_portugal.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=ru&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Russian","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_russia.png"},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=es&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":0,"bottom":0,"name":"Spanish","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_spain.png"}];
function OpenLinkMenu_5(LinkObject){
    if (LinkObject.attr('menu_opened')=='yes'){
	wibiyaToolbar.framework.CloseMenu(LinkObject);
    }
    else{
	wibiyaToolbar.framework.OpenMenu(LinkObject);
    }
};

function fun_AddClickHandlerForBody(Wiwi){
    jQuery('body').click(function() {
	Wiwi.slideUp(300, function(){
	    Wiwi.attr('menu_opened','no');
	    if (Wiwi.attr('id')=='wibiyaToolbar_share_menu') Wiwi.remove();
	});
	jQuery('body').unbind('click');
    });
}

function LinkClicked_5(_options){
    if (jQuery('#AppWin_5').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_5');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
            if ( jQuery('#AppWin_5').find("iframe").attr('src') != wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_5[_options.itemIndex].url))
            {
                jQuery('#AppWin_5').find("iframe").attr('src' ,wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_5[_options.itemIndex].url));
            }
        }
        else
        {
            jQuery('#AppWin_5').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(5,217211,3,0,'');
        }
    }
    else
    {
        var _link = wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_5[_options.itemIndex].url);
        var _action_options =
            {
            actionType: 'Link',
            name:'AppWin_5',
            title :LinkNodes_5[_options.itemIndex].name,
            windowType : LinkNodes_5[_options.itemIndex].windowMethod,
            link : _link,
            scroll : 'YES',
            code : '',
            dimentions : { 'width' :LinkNodes_5[_options.itemIndex].width , 'height':LinkNodes_5[_options.itemIndex].height },
            icon : LinkNodes_5[_options.itemIndex].icon,
            position : { 'right' :LinkNodes_5[_options.itemIndex].right , 'bottom':LinkNodes_5[_options.itemIndex].bottom },
            appId : 5,
            toolbarAppId : 217211
            };
        wibiyaToolbar.framework.openWiwi(_action_options);
    }

}wibiyaToolbar.framework.fun_functionBtn_6 = function(){
   jQuery("html, body").animate({scrollTop:0},"slow");
};wibiyaToolbar.framework.fun_GeneralApp_7 = function (_action_options_starter){
    if (jQuery('#AppWin_7').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_7');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
        }
        else
        {
            jQuery('#AppWin_7').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(38,217160,3,0,'');
        }
    }
    else
    {
        var _action_options =
            {
            actionType: 'Link',
            name:'AppWin_7',
            title :'Join Chat',
            windowType : 0,
            link : wibiyaToolbar.framework.LinkDataReplacor('http://toolbar2.wibiya.com/tinyChat/tinyChatSite.php?video=1&Platforms=0&url=Wibiya_URL'),
            scroll : 'YES',
            code : '',
            dimentions : { width: 800 ,height: '520'},
            icon : 'http://cdn.wibiya.com/Graphics_Toolbar/Icons/chat_dark_light.png',
            position : {right : 50 , bottom : 30 },
            appId : 38,
            side : 'right',
            starterOptions : _action_options_starter,
            toolbarAppId : 217160
            };

        wibiyaToolbar.framework.openWiwi(_action_options);
    }
};

wibiyaToolbar.framework.fun_PopOut_7 = function (_action_options){
if (jQuery('#AppWin_7').length >0){
    jQuery('#AppWin_7').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
}

PopOutWindow = window.open( wibiyaToolbar.framework.LinkDataReplacor('http://toolbar2.wibiya.com/tinyChat/tinyChatSite.php?video=1&Platforms=0&url=Wibiya_URL'),'Popout_7' , 'height=520,width=800,location=no');

};jQuery("document").ready(function(){
    setTimeout("updateTinyChatSite();",2000);
});

function updateTinyChatSite()
{

                name = "tinyChatSite";
                var regexS = "[\\?&]"+name+"=([^&#]*)";
                var regex = new RegExp( regexS );
                var results = regex.exec( window.location.href );
                if( results != null )
                {
                    wibiyaToolbar.framework.BDGClick('TinyChatSite',0);
                }
                
}wibiyaToolbar.framework.fun_CodeApp_8 = function(_action_options){
    if (jQuery('#Wiwi_8').length >0)
    {
        var CurrentWiwi = jQuery('#Wiwi_8');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
        }
        else
        {
            jQuery('#Wiwi_8').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(27,217159,3,0,'');
        }
    }
    else
    {
        var _action_options =
            {
            actionType: 'Code',
            name:'Wiwi_8',
            title :'Diventare un fan',
            windowType : 0,
            link : '',
            scroll : 'YES',
            code : '<script type="text/javascript">var page="100000413845739";var selectedFilter=0;function wibiyaToolbar_ra27(_ActionId,_MetaData,_MetaType){wibiya_reg(27,wibiyaToolbar.id,217159,_ActionId,_MetaData,_MetaType);}loadjscssfile("http://cdn.wibiya.com/Apps/facebook/fbpage.js","js","head");loadjscssfile("http://cdn.wibiya.com/Scripts/actions.js","js","head");loadjscssfile("http://cdn.wibiya.com/Apps/facebook/fb.css","css","head");</script><div id="wibiyaToolbar_fb_placeholder"></div>',
            dimentions : { width: 790 ,height: 430},
            icon : 'http://cdn.wibiya.com/Graphics_Toolbar/Icons/fanpage_dark_light.png',
            toolbarAppId : 217159,
            position : {right : 40 , bottom : 30 }
            }
        wibiyaToolbar.framework.openWiwi(_action_options);
    }
};

var LinkNodes_9 = [{"url":"mailto:?subject=Wibiya_PAGETITLE&body=Hi.%0A%0aI%20wanted%20to%20share%20this%20with%20you:%0A%0AWibiya_PAGETITLE%0AWibiya_URL%0A%0A%0A","windowMethod":2,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Email This","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_email.png"},{"url":"http:\/\/www.facebook.com\/share.php?u=Wibiya_URL&t=Wibiya_PAGETITLE","windowMethod":1,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Facebook","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_fb.png"},{"url":"http:\/\/twitter.com\/home?status=Currently reading Wibiya_PAGETITLE at: Wibiya_URL","windowMethod":2,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Twitter","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_twitter.png"},{"url":"http:\/\/delicious.com\/save?v=5&noui&jump=close&url=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":1,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Delicious","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_delicious.png"},{"url":"http:\/\/www.stumbleupon.com\/submit?url=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":2,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Stumbleupon","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_stumble.png"},{"url":"http:\/\/digg.com\/submit?phase=2&url=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":1,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Digg","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_digg.png"},{"url":"http:\/\/buzz.yahoo.com\/buzz?targetUrl=Wibiya_URL","windowMethod":2,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Buzz up!","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_buzz.png"},{"url":"http:\/\/www.myspace.com\/Modules\/PostTo\/Pages\/?u=Wibiya_URL&t=Wibiya_PAGETITLE","windowMethod":2,"width":990,"height":"80%","right":"middle","bottom":30,"name":"MySpace","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_myspace.png"},{"url":"http:\/\/friendfeed.com?title=Wibiya_PAGETITLE&url=Wibiya_URL","windowMethod":1,"width":990,"height":"80%","right":"middle","bottom":30,"name":"FriendFeed","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_ff.png"},{"url":"http:\/\/www.technorati.com\/faves?add=Wibiya_URL","windowMethod":1,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Technorati","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_technorati.png"},{"url":"http:\/\/www.google.com\/bookmarks\/mark?op=edit&bkmk=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":1,"width":990,"height":"80%","right":"middle","bottom":30,"name":"G Bookmarks","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_google.png"},{"url":"https:\/\/favorites.live.com\/quickadd.aspx?marklet=1&mkt=en-us&url=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":2,"width":990,"height":"80%","right":"middle","bottom":30,"name":"Live","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_live.png"}];
function OpenLinkMenu_9(LinkObject){
    if (LinkObject.attr('menu_opened')=='yes'){
	wibiyaToolbar.framework.CloseMenu(LinkObject);
    }
    else{
	wibiyaToolbar.framework.OpenMenu(LinkObject);
    }
};

function fun_AddClickHandlerForBody(Wiwi){
    jQuery('body').click(function() {
	Wiwi.slideUp(300, function(){
	    Wiwi.attr('menu_opened','no');
	    if (Wiwi.attr('id')=='wibiyaToolbar_share_menu') Wiwi.remove();
	});
	jQuery('body').unbind('click');
    });
}

function LinkClicked_9(_options){
    if (jQuery('#AppWin_9').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_9');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
            if ( jQuery('#AppWin_9').find("iframe").attr('src') != wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_9[_options.itemIndex].url))
            {
                jQuery('#AppWin_9').find("iframe").attr('src' ,wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_9[_options.itemIndex].url));
            }
        }
        else
        {
            jQuery('#AppWin_9').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(14,217164,3,0,'');
        }
    }
    else
    {
        var _link = wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_9[_options.itemIndex].url);
        var _action_options =
            {
            actionType: 'Link',
            name:'AppWin_9',
            title :LinkNodes_9[_options.itemIndex].name,
            windowType : LinkNodes_9[_options.itemIndex].windowMethod,
            link : _link,
            scroll : 'YES',
            code : '',
            dimentions : { 'width' :LinkNodes_9[_options.itemIndex].width , 'height':LinkNodes_9[_options.itemIndex].height },
            icon : LinkNodes_9[_options.itemIndex].icon,
            position : { 'right' :LinkNodes_9[_options.itemIndex].right , 'bottom':LinkNodes_9[_options.itemIndex].bottom },
            appId : 14,
            toolbarAppId : 217164
            };
        wibiyaToolbar.framework.openWiwi(_action_options);
    }

}wibiyaToolbar.framework.fun_GeneralApp_10 = function (_action_options_starter){
    if (jQuery('#AppWin_10').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_10');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
        }
        else
        {
            jQuery('#AppWin_10').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(13,217163,3,0,'');
        }
    }
    else
    {
        var _action_options =
            {
            actionType: 'Link',
            name:'AppWin_10',
            title :'Iscriviti al nostro Feed RSS',
            windowType : 1,
            link : wibiyaToolbar.framework.LinkDataReplacor('http://www.guizzardi.net/?feed=comments-rss2'),
            scroll : 'YES',
            code : '',
            dimentions : { width: 990 ,height: '80%'},
            icon : 'http://cdn.wibiya.com/Graphics_Toolbar/Icons/rss_dark.png',
            position : {right : (wibiyaToolbar.framework.getViewportWidth()-990)/2 , bottom : 30,IsCenter : true },
            appId : 13,
            side : 'right',
            starterOptions : _action_options_starter,
            toolbarAppId : 217163
            };

        wibiyaToolbar.framework.openWiwi(_action_options);
    }
};

wibiyaToolbar.framework.fun_PopOut_10 = function (_action_options){
if (jQuery('#AppWin_10').length >0){
    jQuery('#AppWin_10').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
}

PopOutWindow = window.open( wibiyaToolbar.framework.LinkDataReplacor('http://www.guizzardi.net/?feed=comments-rss2'),'Popout_10' , 'height=80%,width=990,location=no');

};


// Creating Toolbar Div & Properties
var wibiyaToolbarDiv = '<div id="wibiyaToolbar" style="display:none" state="off">'+wibiyaToolbar.ToolbarHTML+'</div>';

// Creating Minimized Toolbar Div & Properties
var wibiyaToolbarMinimizedDiv = '<div id="wibiyaToolbarMinimized" style="display:none" class="wibiyaToolbarMin">'+wibiyaToolbar.MinimizedHTML+'</div>';


// Creating Wiwi Div & Properties
var wibiyaToolbarTempWiwiDiv = '<div id="wibiyaToolbar_window_template" style="display:block" class="wibiyaToolbar_window">'+wibiyaToolbar.TempWiwiHTML+'</div>';

jQuery("head").append('<style> #wibiyaToolbar,#wibiyaToolbar div,#wibiyaToolbar table,#wibiyaToolbar tr,#wibiyaToolbar td,#wibiyaToolbar tr:hover td,#wibiyaToolbar img,#wibiyaToolbar a img,.wibiyaToolbar_window table,.wibiyaToolbar_window tr,.wibiyaToolbar_window td,.wibiyaToolbar_window img,.wibiyaToolbar_window a,#wibiyaToolbarMinimized tr,#wibiyaToolbarMinimized td,#wibiyaToolbarMinimized img,#wibiyaToolbarMinimized a img,.wibiyaToolbar_td tr:hover td{background-color:transparent;text-align: left;direction: ltr;border: none;border-collapse:separate;padding:0;margin:0;}#wibiyaToolbar{font-family: "lucida grande" ,tahoma,verdana,arial,sans-serif;font-weight: normal;font-size:11px;line-height:14px;color:#333333;width:100%;height:30px;z-index:9999999;position:fixed !important;left:0px;bottom:0px;}#wibiyaToolbar_tbl{width:100%;height:30px;}#wibiyaToolbar_left{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position:0px -150px;width:9px;height:30px;display: inline;float: right;}#wibiyaToolbar_center{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-position:0px -120px;background-repeat: repeat-x;position: relative;vertical-align:bottom;padding-top:4px;}#wibiyaToolbar_HomeLink{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-position:0px -120px;background-repeat: repeat-x;position: relative;vertical-align:bottom;padding-top:4px;}#wibiyaToolbar_right{width:35px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position:0px 0px;}.wibiyaToolbar_divider{width:2px;height:26px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position: -10px -154px;display: inline;float: left;}.wibiyaToolbar_tooltip{background-image:url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/tooltip-arrow2.gif);background-repeat:no-repeat;padding-bottom:4px !important;position:absolute;z-index:10 !important;display: inline !important;bottom:30px !important;}.wibiyaToolbar_tooltip_left{background-position:5px bottom;left:6px;right:auto;}.wibiyaToolbar_tooltip_right{background-position:right bottom;left:auto;right:6px;}.wibiyaToolbar_tooltip_text{font-size:11px;font-family:Arial,Verdana;background-color:#282828;color:white;display:block;height:auto;line-height:inherit;margin:0 -5px 0 0;padding:3px 8px;position:relative;white-space:nowrap;width:auto;}.wibiyaToolbar_tooltip_right .wibiyaToolbar_tooltip_text {float:right;}.wibiyaToolbar_tooltip_left .wibiyaToolbar_tooltip_text {float:left;}#wibiyaToolbar_right:hover{background-position:0px -30px;cursor: pointer;}#wibiyaToolbar_min_tbl{direction: ltr;width:150px;height:30px;font: inherit;padding:0;margin:0;border: none;border-collapse:separate;}#wibiyaToolbar_min_tbl:hover{cursor: pointer;}#wibiyaToolbar_min_tbl:hover #wibiyaToolbar_minimized_right{background-position:0px -90px;cursor: pointer;}#wibiyaToolbarMinimized{direction: ltr;font-family: "lucida grande" ,tahoma,verdana,arial,sans-serif;font-weight: normal;font-size:11px;text-align: left;color:#333333;width:auto;height:30px;z-index:9999997;position:fixed !important;right:0px;bottom:0px;line-height:14px;}#wibiyaToolbar_minimized_left{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position:0px -150px;width:20px;}#wibiyaToolbar_minimized_center{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-position:0px -120px;background-repeat: repeat-x;position: relative;width:75px;}#wibiyaToolbar_minimized_right{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position:0px -60px;width:60px;}#wibiyaToolbar_minimized_right:hover{background-position:0px -90px;cursor: pointer;}#wibiyaToolbar_minimized_content{padding:3px 5px 3px 5px;width:auto;height:100%;position: relative;}#wibiyaToolbar_minimized_favicon{display: inline;float: left;vertical-align: middle;margin-top:5px !important;}#wibiyaToolbar_minimized_text{color:#333333;font-size:12px;font-family:Arial,Verdana;display: inline;float: left;margin-top:7px;margin-left:6px;}#wibiyaToolbar_window_template{z-index:1000;visibility: hidden;left: -5000px;position:fixed !important;}.wibiyaToolbar_wiwi_back{background-color:#000;filter:alpha(opacity=40);-moz-opacity:0.40;opacity:0.40;position:absolute;top:0px;left:0px;width:100%;height:100%;}.wibiyaToolbar_wiwi_main{background-color: transparent;overflow:hidden;}.wibiyaToolbar_recent_icon{display: inline;float: left;margin:7px 5px 6px 5px !important;padding:0 !important;}.wibiyaToolbar_wiwi_icon,.wibiyaToolbar_menu_icon{display: inline;float: left;margin:2px 5px 6px 5px !important;padding:0 !important;}.wibiyaToolbar_wiwi_caption,.wibiyaToolbar_menu_caption{color:#f6e6e6;font-size:12px;font-family: "lucida grande",tahoma,verdana,arial,sans-serif;font-weight:bold;display: inline;float: left;margin:5px 0px 0px 0px !important;height:22px;width:220px;font-size:12px;font-weight:bold;}.wibiyaToolbar_recent_caption{color:#f6e6e6;font-size:12px;font-family: "lucida grande",tahoma,verdana,arial,sans-serif;font-weight:bold;display: inline;float: left;margin:7px 0px 0px 0px !important;height:22px;width:220px;font-size:12px;font-weight:bold;}.wibiyaToolbar_recent_close_a,.wibiyaToolbar_recent_close_a:link{color:#f6e6e6;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;height:20px;background-position:0px -270px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;display:inline;float:left;width:23px;margin-left:2px;cursor:pointer;}.TBcontainerDiv{float:left;}.wibiyaToolbar_wiwi_close_a,.wibiyaToolbar_wiwi_close_a:link{color:#f6e6e6;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;height:20px;background-position:0px -270px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;display:inline;float:left;width:23px;margin-left:2px;cursor:pointer;}.wibiyaToolbar_wiwi_close_a:hover,.wibiyaToolbar_recent_close_a:hover{color:#000000;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;background-position:0px -249px;}.wibiyaToolbar_recent_close{display: inline;float: right;margin:7px 0 !important;height:20px;}.wibiyaToolbar_wiwi_close{display: inline;float: right;margin:3px 3px 1px 3px;height:20px;}.wibiyaToolbar_wiwi_body{width:100%;display:block;}.wibiyaToolbar_wiwi_loader{position: relative;top:45%;left:45%;}.wibiyaToolbar_wiwi_footer{width:100%;height:20px;display:block;}.wibiyaToolbar_wiwi_footerlink,.wibiyaToolbar_wiwi_footerlink:link{background: transparent url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/wibiya_footer_new.png) no-repeat scroll 78px 2px;color:#636461 !important;direction:ltr;display:block;float:left;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:bold;line-height:16px;padding:1px 2px 2px 5px !important;text-align:left;text-decoration:none;width:130px;}.wibiyaToolbar_wiwi_footerlink:hover{width:130px;display:block;background: transparent url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/wibiya_footer_new.png) no-repeat scroll 78px 2px;padding:1px 2px 2px 5px !important;direction: ltr;font-family: "lucida grande" ,tahoma,verdana,arial,sans-serif;font-weight:bold;font-size:11px;text-align: left;text-decoration: none;color:black !important;float: left;line-height:16px;opacity:1;}.wibiyaToolbar_wiwi_footerlink_poweredby,.wibiyaToolbar_wiwi_footerlink_poweredby:link{background: transparent;color:#636461 !important;direction:ltr;display:block;float:left;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:bold;padding:1px 2px 2px 5px !important;text-align:left;text-decoration:none;width:130px;}.wibiyaToolbar_wiwi_footerlink_poweredby:hover{width:130px;display:block;background: transparent;padding:1px 2px 2px 5px !important;direction: ltr;font-family: "lucida grande" ,tahoma,verdana,arial,sans-serif;font-weight:bold;font-size:11px;text-align: left;text-decoration: none;color:black !important;float: left;opacity:1;}.wibiyaToolbar_wiwi_close_window,.wibiyaToolbar_wiwi_close_window:link{direction:ltr;display:block;float:right;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:bold;line-height:16px;padding:1px 4px 2px 5px !important;text-decoration:none !important;width:100px !important;text-align:right !important;color:#636461 !important;}.wibiyaToolbar_wiwi_close_window:hover{direction:ltr;display:block;float:right;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:bold;line-height:16px;padding:1px 4px 2px 5px !important;text-decoration:none !important;width:100px !important;text-align:right !important;color:black !important;opacity:1;}.wibiyaToolbar_button_old{display: inline ;float: left !important;border-top: solid 1px #b3b3b1 !important;border-left: solid 1px #a2a2a2 !important;border-right: solid 1px #a2a2a2 !important;border-bottom: solid 1px #b5b5b5 !important;background-color:#f4f2f1 !important;height:20px !important;margin:2px !important;cursor: pointer !important;position: relative !important;}.wibiyaToolbar_button_old:hover{display: inline ;float: left !important;border-top: solid 1px black !important;border-left: solid 1px black !important;border-right: solid 1px black !important;border-bottom: solid 1px black !important;background-color:#ffffff !important;height:20px !important;margin:2px !important;position: relative !important;}.wibiyaToolbar_button{display: inline ;float: left !important;height:24px !important;margin:1px 2px 2px 2px !important;cursor: pointer !important;position: relative !important;}.wibiyaToolbar_button .wibiyaToolbar_icon{width:16px !important;height:16px !important;display: inline ;float: left !important;margin:2px 4px 2px 4px !important;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprites_set1.png) !important;background-repeat: no-repeat !important;}.wibiyaToolbar_button .wibiyaToolbar_itemImg{display:inline;float:left;margin:2px 2px 0 !important;}.wibiyaToolbar_button_center .wibiyaToolbar_itemImg{margin:3px 2px 0 !important;}.wibiyaToolbar_button .wibiyaToolbar_itemText{margin:5px 8px 4px 2px !important;color:#f6e6e6;}.wibiyaToolbar_button_center .wibiyaToolbar_itemText{margin:5px 8px 4px 2px !important;color:#f6e6e6;}.wibiyaToolbar_button_left{height:24px;background-position:0px -425px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;display:inline;float:left;width:4px;cursor:pointer;}.wibiyaToolbar_button_left_over{background-position:0px -475px !important;}.wibiyaToolbar_button_right{height:24px;background-position: -4px -425px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;display:inline;float:left;width:4px;cursor:pointer;}.wibiyaToolbar_button_right_over{ background-position: -4px -475px !important;}.wibiyaToolbar_button_right_multi{height:24px;background-position: -9px -425px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;display:inline;float:left;width:21px;cursor:pointer;}.wibiyaToolbar_button_right_multi_over{ background-position: -9px -475px !important;}.wibiyaToolbar_button_center{height:24px;background-position:0px -450px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: repeat-x;display:inline;float:left;width:auto;cursor:pointer;}.wibiyaToolbar_button_center_over{ background-position:0px -500px !important;}.wibiyaToolbar_button .fb{background-position: -55px -15px !important;}.wibiyaToolbar_button .arrow{background-position: -62px 0px !important;margin-top:3px !important;}.wibiyaToolbar_button .random{background-position: -38px -15px !important;}.wibiyaToolbar_button .fp{background-position:0px -37px !important;margin-top:3px !important;}#wibiyaToolbar_itemsContainer{width:100%;height:26px;background-color: transparent;position: relative;bottom:0px;left:0px;display: inline;}#wibiyaToolbar_center .itemLeft{height:26px;background-color: transparent;display:block;float: left;}#wibiyaToolbar_center .itemRight{height:26px;background-color: transparent;display:block;float: right;}#wibiyaToolbar_center .itemLeft a,#wibiyaToolbar_center .itemRight a{text-decoration: none;}.wibiyaToolbar_itemTbl{margin:0px;padding:0px;}.wibiyaToolbar_itemIcon{display: inline;float: left;}.wibiyaToolbar_item_normal{background-color: transparent !important;height:26px;position: relative;display: list-item;list-style-type:none;width:auto;z-index:1;}.wibiyaToolbar_item_over{background-color:#c73933 !important;height:26px;position: relative;width:auto;display: list-item;list-style-type:none;}.itemLeft .wibiyaToolbar_BtnHover,.itemRight .wibiyaToolbar_BtnHover{background-color: transparent !important;height:26px;position: relative;display: list-item;list-style-type:none;width:auto;z-index:1;}.wibiyaToolbar_itemImg{margin:3px !important;display: inline;float: left;}.wibiyaToolbar_itemText{margin-left:4px;margin-top:6px;margin-bottom:6px;margin-right:10px;display: inline;float: left;color:#f6e6e6;font-size:11px;font-family:Arial,Verdana;height:auto;position:static;width:auto;}.wibiyaToolbar_td{margin:0;padding:0;background-color: transparent;border: none;line-height:100%;}.wibiyaToolbar_menu{height:auto;background-color: transparent !important;position:absolute;bottom:27px;left:0px;color: inherit;display: inline;z-index: -1;}.wibiyaToolbar_search_menu{width:250px;height:auto;background-color: white !important;position:absolute;bottom:27px;left:0px;border: solid 1px #454545 !important;color: inherit;display: inline;z-index: -1;}.wibiyaToolbar_search_menuItem_normal{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color: white;overflow: hidden;}.wibiyaToolbar_search_menuItem_over{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color:#f1f6fc;}.wibiyaToolbar_Menu_UL{list-style: none;margin:0px;padding:0;direction: ltr;}.wibiyaToolbar_menuItem_normal{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color: white;overflow: hidden;margin:0;padding:0;}.wibiyaToolbar_menuItem_over{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color:#f1f6fc;margin:0;padding:0;}.wibiyaToolbar_menuImg{margin-top:4px !important;margin-left:10px !important;vertical-align: middle;padding:0 !important;border:none;display:inline;}.wibiyaToolbar_menu_image{margin-top:4px !important;margin-left:10px !important;vertical-align: middle;padding:0 !important;border:none;display:inline;float: left;}.wibiyaToolbar_menuText{margin-left:6px;width:auto;height:auto;position: relative;top:4px;color:#333333;}#wibiyaPop{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/popup_background.png);background-repeat: no-repeat;position:absolute;right:30px;bottom:35px;width:290px;height:193px;}.wibiyaToolbar_recent{background-color: transparent !important;position:absolute;bottom:27px;color: inherit;display: inline;z-index:1;}.wibiyaToolbar_panel{background-color: transparent !important;position:absolute;bottom:27px;border: solid 1px #454545 !important;color: inherit;display: inline;z-index:1;}.wibiyaToolbar_panel_header{width:100%;height:20px;display:block;background-color:#c73933 !important;border-bottom:solid 1px #454545 !important;}.wibiyaToolbar_panel_body{width:100%;display:block;background-color:#ffffff;overflow-y:auto;overflow-x: hidden;}.wibiyaToolbar_panel_title{display: inline;float: left;padding-left:5px !important;padding-top:2px !important;font-family:Arial,Verdana;font-size:12px;color:#f6e6e6;font-weight:bold;}.wibiyaToolbar_panel_close{display: inline;float: right;padding-right:5px !important;padding-top:2px !important;}.wibiyaToolbar_panel_close a{font-family:Arial,Verdana;font-size:13px;color:#f6e6e6;font-weight:bold;text-decoration: none;border: none;padding : none;}.wibiyaToolbar_panel_close a:hover{font-family:Arial,Verdana;font-size:13px;color:#000000;font-weight:bold;text-decoration: none;border: none;padding : none;}.wibiyaToolbar_recent_title{font-family:Arial,Verdana;font-size:13px;color:#3f6898;font-weight:bold;line-height:20px;border: none;margin:0;width:350px;}.wibiyaToolbar_recent_body_inner{width:440px;overflow-y:auto;overflow-x:hidden;background-color:white !important;height:319px;}.wibiyaToolbar_recentItem_normal{background-color:#ffffff;width:433px !important;}.wibiyaToolbar_recentItem_over{background-color:#f1f6fc;width:433px !important;}.wibiyaToolbar_recentItem_selected{background-color:#e1e6ec;cursor:default;width:433px !important;}.wibiyaToolbar_recent_tags{color:#8e8e8e;font-family:Arial,Verdana;font-size:11px;font-weight: normal;margin:0;}#wibiya_TB_overlay{position:fixed;z-index:1000;top:0px;left:0px;height:100%;width:100%;}.wibiya_TB_overlayMacFFBGHack {background: url(macFFBgHack.png) repeat;}.wibiya_TB_overlayBG{background-color:#000;filter:alpha(opacity=75);-moz-opacity:0.75;opacity:0.75;}.wibiyaToolbar_ligthbox{width:100%;height:100%;background-color:#000000;opacity:0.8;padding:0px;position:fixed !important;position:absolute;padding:0px;margin:0px;z-index:1000;direction: ltr;top:0px;left:0px;}#wibiyaToolbar_window_template{position:absolute;visibility: hidden;left: -1000px;}.wibiya_btn_wrap_2{-moz-user-select: none !important;display:inline-block !important;position:relative !important;-x-system-font:none !important;border:0 none !important;color:#000000 !important;cursor:default !important;font-family:arial,sans-serif !important;font-size:11px !important;font-size-adjust:none !important;font-stretch:normal !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;line-height:normal !important;list-style-image:none !important;list-style-position:outside !important;list-style-type:none !important;margin:0 !important;outline-color:-moz-use-text-color !important;outline-style:none !important;outline-width:medium !important;padding:0 !important;text-decoration:none !important;vertical-align:middle !important;}.wibiya_btn_wrap_1{display:inline-block !important;position:relative !important;}.wibiya_btn_wrap_3{border-color:#BBBBBB !important;border-style:solid !important;padding:0 !important;display:inline-block !important;position:relative !important;border-width:1px 0 !important;margin:0 !important;}.wibiya_btn_wrap_3:hover{border-color:black !important;}.wibiya_btn_wrap_4{display:inline-block !important;position:relative !important;border-color:#BBBBBB !important;border-style:solid !important;padding:0 !important;background:#E3E3E3 none repeat scroll 0 0 !important;border-width:0 1px !important;cursor:pointer !important;margin:0 -1px !important;cursor:pointer !important;}.wibiya_btn_wrap_4:hover{border-color:black !important;}.wibiya_btn_body{height:100% !important;position:relative !important;}.wibiya_btn_upper_Active{background:#E3E3E3 none repeat scroll 0 0 !important;border-bottom:0.2em solid #EEEEEE !important;height:50% !important;left:0 !important;overflow:hidden !important;position:absolute !important;right:0 !important;top:0 !important;cursor:pointer !important;}.wibiya_btn_upper{background:#F9F9F9 none repeat scroll 0 0 !important;border-bottom:0.2em solid #EEEEEE !important;height:50% !important;left:0 !important;overflow:hidden !important;position:absolute !important;right:0 !important;top:0 !important;}.wibiya_btn_txt{color:#000000 !important;line-height:100% !important;padding:0 3px 0 2px !important;position:relative !important;text-align:center !important;vertical-align:middle !important;white-space:nowrap !important;}.wibiya_btn_img{color:#000000 !important;line-height:100% !important;padding:1px !important;position:relative !important;text-align:center !important;vertical-align:middle !important;white-space:nowrap !important;}.wibiya_btn_img img{position:relative !important;vertical-align:middle !important;white-space:nowrap !important;}.wibiya_btn_txt img{padding-right:2px !important;position:relative !important;vertical-align:middle !important;white-space:nowrap !important;}.wibiya_main_btn_wrap {float:left !important;height:auto !important;width:auto !important;margin-left:3px !important;margin-right:1px !important;}.wibiyaToolbar_window{width:800px;height:500px;display:block;position:fixed !important;bottom:30px;z-index:10013;line-height:14px;padding:0px;margin:0px;direction: ltr;}.wibiyaToolbar_wiwi_header_main{height:31px;display:block;width:100%;float:left;border:none;}.wibiyaToolbar_wiwi_header_main #wibiyaToolbar_wiwi_hl{width:10px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position: -11px -181px;display:inline;float:left;}.wibiyaToolbar_wiwi_header_main #wibiyaToolbar_wiwi_hr{width:10px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position:0px -181px;display:inline;float:left;}.wibiyaToolbar_wiwi_header_main .wibiyaToolbar_wiwi_header{height:31px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: repeat-x;background-position:0px -215px;display:inline;float:left;width:780px;background-color:transparent;line-height:100%;border:none;}.wibiyaToolbar_wiwi_body_main{display:block;width:100%;height:430px;float:left;}.wibiyaToolbar_wiwi_body_main #wibiyaToolbar_wiwi_bl{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat: repeat-y;background-position:0px 0px;display:inline;float:left;}.wibiyaToolbar_wiwi_body_main #wibiyaToolbar_wiwi_br{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat: repeat-y;background-position: -6px 0px;display:inline;float:right;}.wibiyaToolbar_wiwi_body_main .wibiyaToolbar_wiwi_body{width:780px;height:100%;display:inline;float:left;background-color:white;}.wibiyaToolbar_wiwi_placeholder_main{display:block;width:100%;height:0px;float:left;}.wibiyaToolbar_wiwi_placeholder_main #wibiyaToolbar_wiwi_pl{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat: repeat-y;background-position:0px 0px;display:inline;float:left;}.wibiyaToolbar_wiwi_placeholder_main #wibiyaToolbar_wiwi_pr{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat: repeat-y;background-position: -6px 0px;display:inline;float:right;}.wibiyaToolbar_wiwi_placeholder_main .wibiyaToolbar_wiwi_placeholder{width:780px;height:100%;display:inline;float:left;}.wibiyaToolbar_wiwi_footer_main{display:block;width:100%;height:24px;float:left;border:none;}.wibiyaToolbar_wiwi_footer_main #wibiyaToolbar_wiwi_fl{width:10px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position: -11px -333px;display:inline;float:left;}.wibiyaToolbar_wiwi_footer_main #wibiyaToolbar_wiwi_fr{width:10px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position:0 -333px;display:inline;float:right;}.wibiyaToolbar_wiwi_footer_main .wibiyaToolbar_wiwi_footer{height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: repeat-x;background-position:0px -358px;display:inline;float:left;width:780px;border:none;background-color:transparent;}.wibiyaToolbar_wiwi_close{display:inline;float:right;height:25px;margin:8px 0 0;width:75px;}.wibiyaToolbar_wiwi_Pop,.wibiyaToolbar_wiwi_Pop:link{height:20px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position:0px -312px;display:inline;float:left;width:23px;cursor:pointer;color:#f6e6e6;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;}.wibiyaToolbar_wiwi_Pop:hover{background-position:0px -291px;color:#000000;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;}.wibiyaToolbar_wiwi_title,.wibiyaToolbar_menu_title{float:left;height:28px;margin:0;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:12px;font-weight:bold;color:#636461;overflow:hidden;width:70%;}.wibiyaToolbar_wiwi_title table{ float:left;}.wiwi_table{margin:0;padding:0;height:100%;}.wibiyaToolbar_wiwi_Mini,.wibiyaToolbar_wiwi_Mini:link{color:#f6e6e6;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;height:20px;background-position:0px -404px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;display:inline;float:left;width:23px;margin-left:2px;cursor:pointer;}.wibiyaToolbar_wiwi_Mini:hover{background-position:0px -383px;color:#000000;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;}#wibiyaToolbar_menu_top,#wibiyaToolbar_recent_top{height:31px;display:block;width:100%;float:left;border:none;}#wibiyaToolbar_menu_top_left,#wibiyaToolbar_recent_top_left{width:10px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position: -11px -181px;display:inline;float:left;}#wibiyaToolbar_recent_top_center{height:31px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: repeat-x;background-position:0px -215px;display:inline;float:left;width:430px;background-color:transparent;line-height:100%;border:none;}#wibiyaToolbar_menu_top_center{height:31px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: repeat-x;background-position:0px -215px;display:inline;float:left;width:780px;background-color:transparent;line-height:100%;border:none;}#wibiyaToolbar_menu_top_right,#wibiyaToolbar_recent_top_right{width:10px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_dark_red.png);background-repeat: no-repeat;background-position:0px -181px;display:inline;float:left;}#wibiyaToolbar_menu_right,#wibiyaToolbar_recent_right{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat:repeat-y;background-position:-6px 0px;}#wibiyaToolbar_menu_left,#wibiyaToolbar_recent_left{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat:repeat-y;background-position:0px 0px;}.wibiyaToolbar_menu_body,.wibiyaToolbar_recent_body{width:170px;height:100%;float:left;background-color:white;}.wibiyaToolbar_bottom{bottom:30px;}.wibiyaHtmlContainer{ position:relative;height:26px;}.wibiyaToolbar_search_container_wide{ width:262px;position: relative;height:26px;top:0px;left:0px;}.wibiyaToolbar_search_container_wide_NoProv{ width:222px;position: relative;height:26px;top:0px;left:0px;}.wibiyaToolbar_search_textbox_on_wide{ background-image:url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/searchbox_wide.png);width:220px;background-repeat: no-repeat;background-position:0px 0px;height:22px;}.wibiyaToolbar_search_textbox_button_wide{left:198px;width:20px;height:18px;position:absolute;top:1px;background-color: transparent;}.wibiyaToolbar_search_textbox_input_wide{width:200px;border:0 none transparent;background-color: transparent;font-size:13px;font-family:Arial,Verdana;margin:2px 2px 4px !important;position:absolute;left:1px;top:0px;padding:0;}.wibiyaToolbar_search_container{position: relative;width:160px;height:26px;top:0px;left:0px;}.wibiyaToolbar_search_container_short{position: relative;width:120px;height:26px;top:0px;left:0px;}.wibiyaToolbar_search_providers_back{position:absolute;top:2px;left:0px;width:32px;height:22px;}.wibiyaToolbar_search_providers_normal{background-color:#a0a0a0 !important;}.wibiyaToolbar_search_providers_over{background-color:#555555 !important;}.wibiyaToolbar_search_providers{position:absolute;top:1px;left:1px;width:30px;height:20px;background-color: white !important;}.wibiyaToolbar_search_providers_icon{border: none;position:absolute;top:2px;left:1px;width:16px;height:16px;}.wibiyaToolbar_search_providers_icon img{padding:0;margin:0;border:none;}.wibiyaToolbar_search_providers_arrow{border: none;position:absolute;top:8px;left:19px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/arrow_up.png);background-repeat: no-repeat;width:10px;height:8px;}.wibiyaToolbar_search_textbox_back{position:absolute;top:2px;left:34px;height:22px;}.wibiyaToolbar_search_textbox_back_left{position:absolute;top:2px;height:22px;}.wibiyaToolbar_search_textbox_on{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/searchbox.png);background-repeat: no-repeat;background-position:0px 0px;width:118px;height:22px;}.wibiyaToolbar_search_textbox_input{border:0 none transparent;background-color: transparent;font-size:13px;font-family:Arial,Verdana;margin:2px 2px 4px !important;width:95px;position:absolute;left:1px;top:0px;padding:0;}.wibiyaToolbar_searchbox_default{color:#777777;font-style:italic;}.wibiyaToolbar_searchbox_on{color:#333333;font-style:normal;}.wibiyaToolbar_search_textbox_button{width:20px;height:18px;position:absolute;left:95px;top:1px;background-color: transparent;}.wibiyaToolbar_SearchmenuItem_normal{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color: white;overflow: hidden;margin:0;padding:0;}.wibiyaToolbar_SearchmenuItem_over{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color:#f1f6fc;margin:0;padding:0;}.wibiyaToolbar_item5{margin:4px !important;display: inline;float: left;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/sprites.png);background-repeat: no-repeat;background-position:0px -42px;width:19px;height:19px;}.wibiyaToolbar_translate_flag{width:18px;height:13px;float: left;display: inline;margin:5px 5px 0px 6px !important;}.wibiyaToolbar_menuItem_normal .English,.wibiyaToolbar_menuItem_over .English{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -138px;}.wibiyaToolbar_menuItem_normal .French,.wibiyaToolbar_menuItem_over .French{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px 0px;}.wibiyaToolbar_menuItem_normal .Polish,.wibiyaToolbar_menuItem_over .Polish{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -14px;}.wibiyaToolbar_menuItem_normal .Spanish,.wibiyaToolbar_menuItem_over .Spanish{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -28px;}.wibiyaToolbar_menuItem_normal .Italian,.wibiyaToolbar_menuItem_over .Italian{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -42px;}.wibiyaToolbar_menuItem_normal .German,.wibiyaToolbar_menuItem_over .German{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -56px;}.wibiyaToolbar_menuItem_normal .Chinese,.wibiyaToolbar_menuItem_over .Chinese{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -70px;}.wibiyaToolbar_menuItem_normal .Japanese,.wibiyaToolbar_menuItem_over .Japanese{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -152px;}.wibiyaToolbar_menuItem_normal .Korean,.wibiyaToolbar_menuItem_over .Korean{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -165px;}.wibiyaToolbar_menuItem_normal .Russian,.wibiyaToolbar_menuItem_over .Russian{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -179px;}.wibiyaToolbar_menuItem_normal .Swedish,.wibiyaToolbar_menuItem_over .Swedish{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -84px;}.wibiyaToolbar_menuItem_normal .Dutch,.wibiyaToolbar_menuItem_over .Dutch{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -98px;}.wibiyaToolbar_menuItem_normal .Portuguese,.wibiyaToolbar_menuItem_over .Portuguese{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -112px;}.wibiyaToolbar_menuItem_normal .Hebrew,.wibiyaToolbar_menuItem_over .Hebrew{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -126px;}#wibiyaToolbar_navigate_container{position: relative;width:auto;height:26px;top:0px;left:0px;}#wibiyaToolbar_navigator_recent_tmp,#wibiyaToolbar_navigator_rand_tmp{border: none;position:absolute;top:2px;height:22px;}.wibiyaToolbar_navigate_recent_normal{left:3px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/sprites.png);background-repeat: no-repeat;background-position:0px -63px;width:105px;}.wibiyaToolbar_navigate_rand_normal{left:110px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/sprites.png);background-repeat: no-repeat;background-position:0px -168px;width:83px;}.wibiyaToolbar_navigate_recent_over{left:3px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/sprites.png);background-repeat: no-repeat;background-position:0px -85px;width:105px;}.wibiyaToolbar_navigate_rand_over{left:110px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/sprites.png);background-repeat: no-repeat;background-position:0px -190px;width:83px;}.wibiyaToolbar_item20{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/sprites_set1.png);background-position:0 0;background-repeat:no-repeat;display:inline;float:left;height:15px;margin:6px !important;width:62px;}.twitter_name:hover{text-decoration: underline;}.twitter_body_text{font-family:Arial,Verdana;font-size:14px;line-height:20px;font-weight:bold;color:#666666;text-decoration: none;margin:0;padding:0;background-color: transparent;border: none;}.twitter_body_text a{color:#2FC2EF;text-decoration: none;}.twitter_body_text a:hover{text-decoration: underline;}.twitter_latest{width:100%;height:230px;overflow-y:scroll;overflow-x: hidden;display:block;}.twitter_latest UL{padding:0px;margin:0px;direction: ltr;}.twitter_latest UL LI{list-style: none;font-family:Arial,Verdana;font-size:14px;line-height:20px;font-weight:normal;color:#666666;text-decoration: none;padding:8px;border-bottom:dashed 1px #cccccc;text-align: left;}.twitter_time{color:#999999;font-family:georgia;font-size:0.8em;font-style:italic;line-height:1.1em;text-align: left;display:block;padding-top:10px;}.wibiyaToolbar_tw_lnk,.wibiyaToolbar_tw_lnk:link,.wibiyaToolbar_tw_lnk:visited{color:#1aa3cd;font-family:Arial,Verdana;text-decoration: none;font-weight:bold;}.wibiyaToolbar_tw_lnk:hover{color:#1aa3cd;font-family:Arial,Verdana;text-decoration: underline;font-weight:bold;}.wibiyaToolbar_translate_flag{width:18px;height:13px;float: left;display: inline;margin:5px 5px 0px 6px !important;}.wibiyaToolbar_menuItem_normal .English,.wibiyaToolbar_menuItem_over .English{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -138px;}.wibiyaToolbar_menuItem_normal .French,.wibiyaToolbar_menuItem_over .French{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px 0px;}.wibiyaToolbar_menuItem_normal .Polish,.wibiyaToolbar_menuItem_over .Polish{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -14px;}.wibiyaToolbar_menuItem_normal .Spanish,.wibiyaToolbar_menuItem_over .Spanish{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -28px;}.wibiyaToolbar_menuItem_normal .Italian,.wibiyaToolbar_menuItem_over .Italian{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -42px;}.wibiyaToolbar_menuItem_normal .German,.wibiyaToolbar_menuItem_over .German{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -56px;}.wibiyaToolbar_menuItem_normal .Chinese,.wibiyaToolbar_menuItem_over .Chinese{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -70px;}.wibiyaToolbar_menuItem_normal .Japanese,.wibiyaToolbar_menuItem_over .Japanese{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -152px;}.wibiyaToolbar_menuItem_normal .Korean,.wibiyaToolbar_menuItem_over .Korean{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -165px;}.wibiyaToolbar_menuItem_normal .Russian,.wibiyaToolbar_menuItem_over .Russian{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -179px;}.wibiyaToolbar_menuItem_normal .Swedish,.wibiyaToolbar_menuItem_over .Swedish{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -84px;}.wibiyaToolbar_menuItem_normal .Dutch,.wibiyaToolbar_menuItem_over .Dutch{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -98px;}.wibiyaToolbar_menuItem_normal .Portuguese,.wibiyaToolbar_menuItem_over .Portuguese{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -112px;}.wibiyaToolbar_menuItem_normal .Hebrew,.wibiyaToolbar_menuItem_over .Hebrew{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/flags.png);background-repeat: no-repeat;background-position:0px -126px;}#wibiyaToolbar_navigate_container{position: relative;width:auto;height:26px;top:0px;left:0px;}#wibiyaToolbar_navigator_recent_tmp,#wibiyaToolbar_navigator_rand_tmp{border: none;position:absolute;top:2px;height:22px;}.wibiyaToolbar_navigate_rand_normal{left:110px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/sprites.png);background-repeat: no-repeat;background-position:0px -168px;width:83px;}.wibiyaToolbar_navigate_rand_over{left:110px;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/sprites.png);background-repeat: no-repeat;background-position:0px -190px;width:83px;}.wibiyaToolbar_item14{margin:6px 4px 4px 4px !important;display: inline;float: left;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Icons/add_light.png);background-repeat: no-repeat;width:14px;height:16px;}.wibiyaToolbar_share_sprite{width:18px;height:18px;float: left;display: inline;margin:3px 5px 0px 6px !important;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/share_sprite.png);background-repeat: no-repeat;}.wibiyaToolbar_shareItem_normal{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color: white;overflow: hidden;line-height:18px;margin:0;padding:0;}.wibiyaToolbar_shareItem_over{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color:#f1f6fc;line-height:18px;margin:0;padding:0;}.wibiyaToolbar_item13{margin:4px !important;display: inline;float: left;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Icons/rss_light.png);background-repeat: no-repeat;width:15px;height:16px;}</style>');


wibiyaToolbar.start=function(){var _body=jQuery("body");_body.append(wibiyaToolbarMinimizedDiv);_body.append(wibiyaToolbarTempWiwiDiv);_body.append(wibiyaToolbarDiv);jQuery(".wbadge").each(function(){jQuery(this).click(function(){WibiyaAppId=jQuery(this).attr("AppType");wibiyaToolbar.framework.badgeHandler(WibiyaAppId);return false;}).hand();});wibiyaToolbar.framework.delayAction("wibiyaToolbar.framework.prepare_width()",3000);wibiyaToolbar.framework.delayAction(function(){jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").parent().filter(".wibiyaToolbar_BtnHover").removeClass("wibiyaToolbar_BtnHover").addClass("wibiyaToolbar_BtnHoverOff");},3100);jQuery(window).resize(function(){wibiyaToolbar.framework.prepare_width();});wibiyaToolbar.framework.delayAction("wibiyaToolbar.framework.hide_devider()",700);};jQuery.fn.extend({everyTime:function(interval,label,fn,times,belay){return this.each(function(){jQuery.timer.add(this,interval,label,fn,times,belay);});},oneTime:function(interval,label,fn){return this.each(function(){jQuery.timer.add(this,interval,label,fn,1);});},stopTime:function(label,fn){return this.each(function(){jQuery.timer.remove(this,label,fn);});}});jQuery.event.special;jQuery.extend({timer:{global:[],guid:1,dataKey:"jQuery.timer",regex:/^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,powers:{"ms":1,"cs":10,"ds":100,"s":1000,"das":10000,"hs":100000,"ks":1000000},timeParse:function(value){if(value==undefined||value==null){return null;}
var result=this.regex.exec(jQuery.trim(value.toString()));if(result[2]){var num=parseFloat(result[1]);var mult=this.powers[result[2]]||1;return num*mult;}else{return value;}},add:function(element,interval,label,fn,times,belay){var counter=0;if(jQuery.isFunction(label)){if(!times)
times=fn;fn=label;label=interval;}
interval=jQuery.timer.timeParse(interval);if(typeof interval!="number"||isNaN(interval)||interval<=0){return;}
if(times&&times.constructor!=Number){belay=!!times;times=0;}
times=times||0;belay=belay||false;var timers=jQuery.data(element,this.dataKey)||jQuery.data(element,this.dataKey,{});if(!timers[label]){timers[label]={};}
fn.timerID=fn.timerID||this.guid++;var handler=function(){if(belay&&this.inProgress){return;}
this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false){jQuery.timer.remove(element,label,fn);}
this.inProgress=false;};handler.timerID=fn.timerID;if(!timers[label][fn.timerID]){timers[label][fn.timerID]=window.setInterval(handler,interval);}
this.global.push(element);},remove:function(element,label,fn){var timers=jQuery.data(element,this.dataKey),ret;if(timers){if(!label){for(label in timers){this.remove(element,label,fn);}}else if(timers[label]){if(fn){if(fn.timerID){window.clearInterval(timers[label][fn.timerID]);delete timers[label][fn.timerID];}}else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn];}}
for(ret in timers[label])break;if(!ret){ret=null;delete timers[label];}}
for(ret in timers)break;if(!ret)
jQuery.removeData(element,this.dataKey);}}}});jQuery.cookie=function(name,value,options){if(typeof value!="undefined"){options=options||{};if(value===null){value="";options.expires=-1;}
var expires="";if(options.expires&&(typeof options.expires=="number"||options.expires.toUTCString)){var date;if(typeof options.expires=="number"){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires="; expires="+date.toUTCString();}
var path=options.path?"; path="+(options.path):"";var domain=options.domain?"; domain="+(options.domain):"";var secure=options.secure?"; secure":"";document.cookie=[name,"=",encodeURIComponent(value),expires,path,domain,secure].join("");}else{var cookieValue=null;if(document.cookie&&document.cookie!=""){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+"=")){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};if(jQuery("#xgDock").size()==1){jQuery("head").append("<style>#wibiyaToolbar {bottom:22px!important;} .wibiyaToolbar_window{bottom: 50px !important;} #wibiyaToolbar_center .itemRight {height:auto!important;} </style>");}
var regexS="[\\?&]WibarDisable=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);if(results===null&&wibiyaToolbar.wibiya_isMobile===false){wibiyaToolbar.start();RunStarterJs();jQuery("#statFrame").attr("src","http://statistics.wibiya.com/SetToolbarLoad.php?toolbarId="+wibiyaToolbar.id+"&referer="+document.referrer);wibiyaToolbar.framework.RunProfile();}