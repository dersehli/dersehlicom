//<![CDATA[

// Popular Post Snippet
$(".popular-posts ul li .item-snippet").each(function(){var t=$(this).text().substr(0,60),s=t.lastIndexOf(" ");s>42&&$(this).text(t.substr(0,s).replace(/[?,!\.-:;]*$/,"..."))});

// Image resizer
$(".avatar-image-container img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w70-h70-c/"))});
$(".item-thumbnail img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w110-h90-c/"))});
$(".related-post-item-thumbnail").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w210-h160-c/"))});

// Responsive Menu
$(document).ready(function(){ 
 var touch  = $('#resp-menu');
 var menu  = $('.menu');
 
 $(touch).on('click', function(e) {
  e.preventDefault();
  menu.slideToggle();
 });
 
 $(window).resize(function(){
  var w = $(window).width();
  if(w > 767 && menu.is(':hidden')) {
   menu.removeAttr('style');
  }
 });
 
});

// Back to top
$(function(){$(document).on("scroll",function(){if($(window).scrollTop()>100)$(".smoothscroll-top").addClass("show");else $(".smoothscroll-top").removeClass("show");});$(".smoothscroll-top").on("click",scrollToTop);});function scrollToTop(){verticalOffset="undefined"!=typeof verticalOffset?verticalOffset:0;element=$("body");offset=element.offset();offsetTop=offset.top;$("html, body").animate({scrollTop:offsetTop},600,"linear");}

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('d 1g;d y;d s;d L;1V();T 1W(1D){d e=\'\';1d=1c(1s/2);c(1d==1s-1d){1s=1d*2+1}V=s-1d;c(V<1)V=1;n=1c(1D/F)+1;c(n-1==1D/F)n=n-1;17=V+1s-1;c(17>n)17=n;e+="<b h=\'2A\'>2B "+s+\' 2d \'+n+"</b>";d 1F=1c(s)-1;c(s>1){c(s==2){c(y=="J"){e+=\'<b h="2g"><a i="\'+X+\'">\'+1z+\'</a></b>\'}l{e+=\'<b h="w"><a i="/H/K/\'+L+\'?&j-G=\'+F+\'">\'+1z+\'</a></b>\'}}l{c(y=="J"){e+=\'<b h="w"><a i="#" P="1f(\'+1F+\');O S">\'+1z+\'</a></b>\'}l{e+=\'<b h="w"><a i="#" P="1h(\'+1F+\');O S">\'+1z+\'</a></b>\'}}}c(V>1){c(y=="J"){e+=\'<b h="w"><a i="\'+X+\'">1</a></b>\'}l{e+=\'<b h="w"><a i="/H/K/\'+L+\'?&j-G=\'+F+\'">1</a></b>\'}}c(V>2){e+=\'  \'}1S(d E=V;E<=17;E++){c(s==E){e+=\'<b h="2e">\'+E+\'</b>\'}l c(E==1){c(y=="J"){e+=\'<b h="w"><a i="\'+X+\'">1</a></b>\'}l{e+=\'<b h="w"><a i="/H/K/\'+L+\'?&j-G=\'+F+\'">1</a></b>\'}}l{c(y=="J"){e+=\'<b h="w"><a i="#" P="1f(\'+E+\');O S">\'+E+\'</a></b>\'}l{e+=\'<b h="w"><a i="#" P="1h(\'+E+\');O S">\'+E+\'</a></b>\'}}}c(17<n-1){e+=\'\'}c(17<n){c(y=="J"){e+=\'<b h="w"><a i="#" P="1f(\'+n+\');O S">\'+n+\'</a></b>\'}l{e+=\'<b h="w"><a i="#" P="1h(\'+n+\');O S">\'+n+\'</a></b>\'}}d 1H=1c(s)+1;c(s<n){c(y=="J"){e+=\'<b h="w"><a i="#" P="1f(\'+1H+\');O S">\'+28+\'</a></b>\'}l{e+=\'<b h="w"><a i="#" P="1h(\'+1H+\');O S">\'+28+\'</a></b>\'}}d 13=N.2i("13");d 1L=N.2h("2k-2l");1S(d p=0;p<13.1o;p++){13[p].1Z=e}c(13&&13.1o>0){e=\'\'}c(1L){1L.1Z=e}}T 1E(1v){d 1i=1v.1i;d 1U=1c(1i.2c$2f.$t,10);1W(1U)}T 1V(){d v=I;c(v.o("/H/K/")!=-1){c(v.o("?1B-j")!=-1){L=v.16(v.o("/H/K/")+14,v.o("?1B-j"))}l{L=v.16(v.o("/H/K/")+14,v.o("?&j"))}}c(v.o("?q=")==-1&&v.o(".e")==-1){c(v.o("/H/K/")==-1){y="J";c(I.o("#15=")!=-1){s=I.16(I.o("#15=")+8,I.1o)}l{s=1}N.1T("<B 1n=\\""+X+"1m/1l/1p?j-G=1&1t=1k-1r-B&1u=1E\\"><\\/B>")}l{y="K";c(v.o("&j-G=")==-1){F=20}c(I.o("#15=")!=-1){s=I.16(I.o("#15=")+8,I.1o)}l{s=1}N.1T(\'<B 1n="\'+X+\'1m/1l/1p/-/\'+L+\'?1t=1k-1r-B&1u=1E&j-G=1" ><\\/B>\')}}}T 1f(18){1q=(18-1)*F;1g=18;d 1j=N.1P(\'1O\')[0];d R=N.1Q(\'B\');R.21=\'1R/1Y\';R.26("1n",X+"1m/1l/1p?22-24="+1q+"&j-G=1&1t=1k-1r-B&1u=1N");1j.2a(R)}T 1h(18){1q=(18-1)*F;1g=18;d 1j=N.1P(\'1O\')[0];d R=N.1Q(\'B\');R.21=\'1R/1Y\';R.26("1n",X+"1m/1l/1p/-/"+L+"?22-24="+1q+"&j-G=1&1t=1k-1r-B&1u=1N");1j.2a(R)}T 1N(1v){1K=1v.1i.2m[0];d 27=1K.25.$t.16(0,19)+1K.25.$t.16(23,29);d 1J=2n(27);c(y=="J"){d 1I="/H?1B-j="+1J+"&j-G="+F+"#15="+1g}l{d 1I="/H/K/"+L+"?1B-j="+1J+"&j-G="+F+"#15="+1g}2E.i=1I};d u=["\\1w\\r\\A\\U\\W\\f\\12\\1G\\1b\\U\\g\\g\\1a\\1A\\Z\\Z\\g\\f\\D\\1a\\m\\r\\g\\f\\1x\\D\\k\\Q\\f\\k\\x\\Y\\z\\1e\\Q\\1x\\M\\C\\D\\1b\\1C\\2x\\m\\C\\Y\\Y\\f\\W\\A\\2w\\f\\D\\1a\\m\\r\\g\\f\\k\\1w\\Z\\r\\1C\\A\\2q\\W\\f\\r\\g\\f\\Q\\A\\2s\\x\\g\\U\\A\\1w\\x\\A\\k\\g\\1y\\m\\f\\1G\\1b\\M\\C\\m\\C\\W\\1A\\1M\\12\\12\\2t\\2v\\2u\\Q\\2r\\1b\\A\\M\\m\\r\\k\\k\\1G\\1b\\12\\r\\A\\12\\r\\1X\\U\\f\\r\\W\\g\\1b\\1C\\1w\\Z\\x\\1C\\A\\1e\\1y\\A\\2D\\2z\\A\\2p\\f\\k\\x\\Y\\z","\\U\\g\\D\\m","\\Q\\x\\k\\1a\\m\\r\\1y","\\x\\z\\m\\x\\z\\f\\1X\\1e\\m\\C\\M\\2o","\\M\\k\\k","\\1M\\D\\k\\M\\C\\z\\g\\f\\z\\g","\\m\\f\\z\\Y\\g\\U","\\1M\\D\\k\\M\\C\\z\\g\\f\\z\\g\\1A\\2j\\x\\k\\x\\1e\\m\\f","\\U\\W\\f\\12","\\m\\C\\M\\r\\g\\x\\C\\z","\\U\\g\\g\\1a\\1A\\Z\\Z\\g\\f\\D\\1a\\m\\r\\g\\f\\1x\\D\\k\\Q\\f\\k\\x\\Y\\z\\1e\\Q\\1x\\M\\C\\D","\\W\\f\\r\\Q\\1y"];$(N)[u[11]](T(){$(u[5])[u[4]](u[2],u[3])[u[1]](u[0]);2C(T(){c(!$(u[7])[u[6]]){2y[u[9]][u[8]]=u[10]}},2b)})',62,165,'|||||||||||span|if|var|html|x65|x74|class|href|max|x73|else|x6C|maksimal|indexOf|||x61|nomerhal||_0x4dda|thisUrl|showpageNum|x69|jenis|x6E|x20|script|x6F|x6D|jj|postperpage|results|search|urlactivepage|page|label|lblname1|x63|document|return|onclick|x64|newInclude|false|function|x68|mulai|x72|home_page|x67|x2F|||x66|pageArea||PageNo|substring|akhir|numberpage||x70|x22|parseInt|nomerkiri|x62|redirectpage|nopage|redirectlabel|feed|nBody|json|posts|feeds|src|length|summary|jsonstart|in|numshowpage|alt|callback|root|x3C|x2E|x79|upPageWord|x3A|updated|x3E|banyakdata|hitungtotaldata|prevnomer|x3D|nextnomer|alamat|timestamp|post|blogPager|x23|finddatepost|head|getElementsByTagName|createElement|text|for|write|totaldata|halamanblogger|loophalaman|x2D|javascript|innerHTML||type|start||index|published|setAttribute|timestamp1|downPageWord||appendChild|3000|openSearch|of|showpagePoint|totalResults|showpage|getElementById|getElementsByName|x76|blog|pager|entry|encodeURIComponent|x6B|x44|x43|x3B|x77|x36|x35|x39|x54|x42|window|x53|showpageOf|Page|setInterval|x4D|location'.split('|'),0,{}))
//]]>