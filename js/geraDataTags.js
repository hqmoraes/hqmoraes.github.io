const tagsHTML = ['address','article','aside','footer','header','h1','h2','h3','h4','h5','h6','main','nav','section','blockquote','dd','div',
'dl','dt','figcaption','figure','hr','li','ol','menu','p','pre','ul','a','abbr','b','bdi','bdo','br','cite','code','data',
'dfn','em','i','kbd','mark','q','rp','rt','ruby','s','samp','small','span','strong','sub','sup','time','u','var','wbr','area',
'audio','img','map','track','video','embed','iframe','object','param','picture','portal','source','canvas','del','ins','caption',
'col','colgroup','table','tbody','td','tfoot','th','thead','tr','form','button','datalist','fieldset','input','label','legend','meter',
'optgroup','option','output','progress','select','textarea','details','dialog','summary','content','shadow','slot','template'];

tagsHTML.forEach(tag =>{
    var cont = 1;
    try{
        document.querySelectorAll(tag).forEach(tg =>{
        tg.setAttribute('data-tag',tag + '-' + cont);
        cont++;
    })
    } catch (error) {

}});

