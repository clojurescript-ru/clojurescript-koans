// Compiled by ClojureScript 1.7.228 {}
goog.provide('koans.core');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('dommy.core');
goog.require('koans.meditations');
goog.require('clojure.set');
goog.require('jayq.core');
goog.require('clojure.string');
goog.require('jayq.util');
koans.core.hash_objects = (function koans$core$hash_objects(){
return clojure.string.split.call(null,location.hash,"/");
});
koans.core.current_koan_index = (function koans$core$current_koan_index(){
return (new koans.meditations.KoanIndex(cljs.core.subs.call(null,cljs.core.first.call(null,koans.core.hash_objects.call(null)),(1)),(cljs.core.last.call(null,koans.core.hash_objects.call(null)) - (1)),null,null,null));
});
koans.core.update_location_hash = (function koans$core$update_location_hash(){
var koan = koans.meditations.next_koan_index.call(null,koans.core.current_koan_index.call(null));
return location.hash = [cljs.core.str(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(koan)),cljs.core.str("/"),cljs.core.str((new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(koan) + (1)))].join('');
});
koans.core.fadeout_time = (600);
koans.core.char_width = (14);
koans.core.enter_key = (13);
koans.core.input_with_code = (function koans$core$input_with_code(koan){
var dom13215 = document.createElement("div");
if(cljs.core.truth_([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join(''))){
dom13215.className = [cljs.core.str(dom13215.className),cljs.core.str(" "),cljs.core.str([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join(''))].join('').trim();
} else {
}

dom13215.appendChild((function (){var dom13216 = document.createElement("div");
dom13216.className = [cljs.core.str(dom13216.className),cljs.core.str(" "),cljs.core.str("description")].join('').trim();


dom13216.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(koan)));

return dom13216;
})());

dom13215.appendChild((function (){var dom13217 = document.createElement("div");
dom13217.className = [cljs.core.str(dom13217.className),cljs.core.str(" "),cljs.core.str("code-box")].join('').trim();


dom13217.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__6914__auto__ = ((function (dom13217,dom13215){
return (function koans$core$input_with_code_$_iter__13218(s__13219){
return (new cljs.core.LazySeq(null,((function (dom13217,dom13215){
return (function (){
var s__13219__$1 = s__13219;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13219__$1);
if(temp__4425__auto__){
var s__13219__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13219__$2)){
var c__6912__auto__ = cljs.core.chunk_first.call(null,s__13219__$2);
var size__6913__auto__ = cljs.core.count.call(null,c__6912__auto__);
var b__13221 = cljs.core.chunk_buffer.call(null,size__6913__auto__);
if((function (){var i__13220 = (0);
while(true){
if((i__13220 < size__6913__auto__)){
var text = cljs.core._nth.call(null,c__6912__auto__,i__13220);
cljs.core.chunk_append.call(null,b__13221,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",556931961)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"code"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text"], null),text], null)));

var G__13242 = (i__13220 + (1));
i__13220 = G__13242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13221),koans$core$input_with_code_$_iter__13218.call(null,cljs.core.chunk_rest.call(null,s__13219__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13221),null);
}
} else {
var text = cljs.core.first.call(null,s__13219__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",556931961)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"code"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text"], null),text], null)),koans$core$input_with_code_$_iter__13218.call(null,cljs.core.rest.call(null,s__13219__$2)));
}
} else {
return null;
}
break;
}
});})(dom13217,dom13215))
,null,null));
});})(dom13217,dom13215))
;
return iter__6914__auto__.call(null,new cljs.core.Keyword(null,"code-strings","code-strings",200839020).cljs$core$IFn$_invoke$arity$1(koan));
})()));

return dom13217;
})());

dom13215.appendChild(dommy.template.__GT_node_like.call(null,((!((new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829).cljs$core$IFn$_invoke$arity$1(koan) == null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"functions"], null),(function (){var iter__6914__auto__ = ((function (dom13215){
return (function koans$core$input_with_code_$_iter__13222(s__13223){
return (new cljs.core.LazySeq(null,((function (dom13215){
return (function (){
var s__13223__$1 = s__13223;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13223__$1);
if(temp__4425__auto__){
var s__13223__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13223__$2)){
var c__6912__auto__ = cljs.core.chunk_first.call(null,s__13223__$2);
var size__6913__auto__ = cljs.core.count.call(null,c__6912__auto__);
var b__13225 = cljs.core.chunk_buffer.call(null,size__6913__auto__);
if((function (){var i__13224 = (0);
while(true){
if((i__13224 < size__6913__auto__)){
var function$ = cljs.core._nth.call(null,c__6912__auto__,i__13224);
cljs.core.chunk_append.call(null,b__13225,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"function"], null),(function (){var iter__6914__auto__ = ((function (i__13224,function$,c__6912__auto__,size__6913__auto__,b__13225,s__13223__$2,temp__4425__auto__,dom13215){
return (function koans$core$input_with_code_$_iter__13222_$_iter__13234(s__13235){
return (new cljs.core.LazySeq(null,((function (i__13224,function$,c__6912__auto__,size__6913__auto__,b__13225,s__13223__$2,temp__4425__auto__,dom13215){
return (function (){
var s__13235__$1 = s__13235;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__13235__$1);
if(temp__4425__auto____$1){
var s__13235__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13235__$2)){
var c__6912__auto____$1 = cljs.core.chunk_first.call(null,s__13235__$2);
var size__6913__auto____$1 = cljs.core.count.call(null,c__6912__auto____$1);
var b__13237 = cljs.core.chunk_buffer.call(null,size__6913__auto____$1);
if((function (){var i__13236 = (0);
while(true){
if((i__13236 < size__6913__auto____$1)){
var text = cljs.core._nth.call(null,c__6912__auto____$1,i__13236);
cljs.core.chunk_append.call(null,b__13237,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",556931961)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"code"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text"], null),text], null)));

var G__13243 = (i__13236 + (1));
i__13236 = G__13243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13237),koans$core$input_with_code_$_iter__13222_$_iter__13234.call(null,cljs.core.chunk_rest.call(null,s__13235__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13237),null);
}
} else {
var text = cljs.core.first.call(null,s__13235__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",556931961)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"code"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text"], null),text], null)),koans$core$input_with_code_$_iter__13222_$_iter__13234.call(null,cljs.core.rest.call(null,s__13235__$2)));
}
} else {
return null;
}
break;
}
});})(i__13224,function$,c__6912__auto__,size__6913__auto__,b__13225,s__13223__$2,temp__4425__auto__,dom13215))
,null,null));
});})(i__13224,function$,c__6912__auto__,size__6913__auto__,b__13225,s__13223__$2,temp__4425__auto__,dom13215))
;
return iter__6914__auto__.call(null,function$);
})()], null));

var G__13244 = (i__13224 + (1));
i__13224 = G__13244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13225),koans$core$input_with_code_$_iter__13222.call(null,cljs.core.chunk_rest.call(null,s__13223__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13225),null);
}
} else {
var function$ = cljs.core.first.call(null,s__13223__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"function"], null),(function (){var iter__6914__auto__ = ((function (function$,s__13223__$2,temp__4425__auto__,dom13215){
return (function koans$core$input_with_code_$_iter__13222_$_iter__13238(s__13239){
return (new cljs.core.LazySeq(null,((function (function$,s__13223__$2,temp__4425__auto__,dom13215){
return (function (){
var s__13239__$1 = s__13239;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__13239__$1);
if(temp__4425__auto____$1){
var s__13239__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13239__$2)){
var c__6912__auto__ = cljs.core.chunk_first.call(null,s__13239__$2);
var size__6913__auto__ = cljs.core.count.call(null,c__6912__auto__);
var b__13241 = cljs.core.chunk_buffer.call(null,size__6913__auto__);
if((function (){var i__13240 = (0);
while(true){
if((i__13240 < size__6913__auto__)){
var text = cljs.core._nth.call(null,c__6912__auto__,i__13240);
cljs.core.chunk_append.call(null,b__13241,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",556931961)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"code"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text"], null),text], null)));

var G__13245 = (i__13240 + (1));
i__13240 = G__13245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13241),koans$core$input_with_code_$_iter__13222_$_iter__13238.call(null,cljs.core.chunk_rest.call(null,s__13239__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13241),null);
}
} else {
var text = cljs.core.first.call(null,s__13239__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",556931961)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"code"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text"], null),text], null)),koans$core$input_with_code_$_iter__13222_$_iter__13238.call(null,cljs.core.rest.call(null,s__13239__$2)));
}
} else {
return null;
}
break;
}
});})(function$,s__13223__$2,temp__4425__auto__,dom13215))
,null,null));
});})(function$,s__13223__$2,temp__4425__auto__,dom13215))
;
return iter__6914__auto__.call(null,function$);
})()], null),koans$core$input_with_code_$_iter__13222.call(null,cljs.core.rest.call(null,s__13223__$2)));
}
} else {
return null;
}
break;
}
});})(dom13215))
,null,null));
});})(dom13215))
;
return iter__6914__auto__.call(null,new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829).cljs$core$IFn$_invoke$arity$1(koan));
})()], null):null)));

return dom13215;
});
koans.core.error_message = (function koans$core$error_message(){
var dom13247 = document.createElement("div");
dom13247.className = [cljs.core.str(dom13247.className),cljs.core.str(" "),cljs.core.str("error")].join('').trim();


dom13247.appendChild(document.createTextNode("You have not yet attained enlightenment."));

return dom13247;
});
koans.core.input_string = (function koans$core$input_string(){
var input_is_empty_QMARK_ = (function koans$core$input_string_$_input_is_empty_QMARK_(el){
return clojure.string.blank_QMARK_.call(null,el.value);
});
var get_input_string = (function koans$core$input_string_$_get_input_string(el){
if(cljs.core._EQ_.call(null,"text",el.className)){
return jayq.core.text.call(null,jayq.core.$.call(null,el));
} else {
if(cljs.core._EQ_.call(null,"INPUT",el.tagName)){
return el.value;
} else {
return null;
}
}
});
if(cljs.core.truth_(cljs.core.some.call(null,input_is_empty_QMARK_,jayq.core.$.call(null,".code-box input")))){
return "";
} else {
return clojure.string.join.call(null," ",cljs.core.map.call(null,get_input_string,cljs.core.concat.call(null,jayq.core.$.call(null,".functions .text, .functions input"),jayq.core.$.call(null,".code-box .text, .code-box input"))));
}
});
koans.core.load_next_koan = (function koans$core$load_next_koan(){
return koans.core.update_location_hash.call(null);
});
koans.core.remove_active_koan = (function koans$core$remove_active_koan(){
var $el = jayq.core.$.call(null,new cljs.core.Keyword(null,".koan",".koan",-1085845364));
return jayq.core.fade_out.call(null,$el,((function ($el){
return (function (){
return jayq.core.remove.call(null,$el);
});})($el))
);
});
koans.core.remove_static_pages = (function koans$core$remove_static_pages(){
return jayq.core.fade_out.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".static",".static",-1533905472)));
});
koans.core.category_name = (function koans$core$category_name(koan_index){
var category = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(koan_index);
return clojure.string.replace.call(null,category,"-"," ");
});
koans.core.render_koan = (function koans$core$render_koan(koan){
koans.core.remove_active_koan.call(null);

koans.core.remove_static_pages.call(null);

var $elem = jayq.core.$.call(null,koans.core.input_with_code.call(null,koan));
var $category = jayq.core.$.call(null,new cljs.core.Keyword(null,".category",".category",-384109441));
var current_category = koans.core.category_name.call(null,koans.core.current_koan_index.call(null));
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829).cljs$core$IFn$_invoke$arity$1(koan))){
} else {
jayq.core.add_class.call(null,$elem,"has-functions");
}

if(!(cljs.core._EQ_.call(null,jayq.core.text.call(null,$category),current_category))){
jayq.core.fade_out.call(null,$category);
} else {
}

return jayq.util.wait.call(null,koans.core.fadeout_time,((function ($elem,$category,current_category){
return (function (){
jayq.core.text.call(null,$category,current_category);

jayq.core.prepend.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",-2049205669)),$elem);

jayq.core.fade_in.call(null,$elem);

jayq.core.fade_in.call(null,$category);

return cljs.core.first.call(null,jayq.core.find.call(null,$elem,new cljs.core.Keyword(null,"input","input",556931961))).focus();
});})($elem,$category,current_category))
);
});
koans.core.render_static_page = (function koans$core$render_static_page(selector){
koans.core.remove_active_koan.call(null);

var $el = jayq.core.$.call(null,selector);
var $other = jayq.core.$.call(null,cljs.core.first.call(null,clojure.set.difference.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#the-end",null,"#welcome",null], null), null),cljs.core.PersistentHashSet.fromArray([selector], true))));
jayq.core.fade_out.call(null,$other);

return jayq.util.wait.call(null,koans.core.fadeout_time,((function ($el,$other){
return (function (){
jayq.core.fade_out.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".category",".category",-384109441)));

return jayq.core.fade_in.call(null,$el);
});})($el,$other))
);
});
koans.core.render_current_koan = (function koans$core$render_current_koan(){
if(clojure.string.blank_QMARK_.call(null,location.hash)){
return koans.core.render_static_page.call(null,"#welcome");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)),"complete")){
return koans.core.render_static_page.call(null,"#the-end");
} else {
if(cljs.core.truth_(koans.meditations.koan_exists_QMARK_.call(null,koans.core.current_koan_index.call(null)))){
var current_koan = koans.meditations.koan_for_index.call(null,koans.core.current_koan_index.call(null));
return koans.core.render_koan.call(null,current_koan);
} else {
return koans.core.update_location_hash.call(null);

}
}
}
});
koans.core.resize_input = (function koans$core$resize_input(input){
var $input = jayq.core.$.call(null,input);
var remove_spaces = ((function ($input){
return (function (text){
return clojure.string.replace.call(null,text," ","_");
});})($input))
;
var $parent = jayq.core.parent.call(null,$input);
var $shadow = jayq.core.find.call(null,$parent,new cljs.core.Keyword(null,".shadow",".shadow",-949446272));
jayq.core.text.call(null,$shadow,remove_spaces.call(null,jayq.core.val.call(null,$input)));

var shadow_width = jayq.core.width.call(null,$shadow);
var input_width = jayq.core.width.call(null,$input);
if((shadow_width >= input_width)){
return jayq.core.width.call(null,$input,(shadow_width + ((4) * koans.core.char_width)));
} else {
if(((input_width - ((4) * koans.core.char_width)) >= shadow_width)){
return jayq.core.width.call(null,$input,(shadow_width + ((4) * koans.core.char_width)));
} else {
return null;
}
}
});
koans.core.show_error_message = (function koans$core$show_error_message(){
var $code_box = jayq.core.$.call(null,new cljs.core.Keyword(null,".code-box",".code-box",297345993));
if(cljs.core.truth_(jayq.core.has_class.call(null,$code_box,"incorrect"))){
var $error = jayq.core.$.call(null,new cljs.core.Keyword(null,".error",".error",115475668));
jayq.core.remove_class.call(null,$code_box,"incorrect");

jayq.core.fade_out.call(null,$error);

return jayq.util.wait.call(null,(300),((function ($error,$code_box){
return (function (){
return jayq.core.add_class.call(null,$code_box,"incorrect").call(null,jayq.core.fade_in.call(null,$error));
});})($error,$code_box))
);
} else {
var $error = jayq.core.$.call(null,koans.core.error_message.call(null));
jayq.core.add_class.call(null,$code_box,"incorrect");

jayq.core.after.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".code-box",".code-box",297345993)),$error);

return jayq.core.fade_in.call(null,$error);
}
});
if(typeof koans.core.compiler_state !== 'undefined'){
} else {
koans.core.compiler_state = cljs.js.empty_state.call(null);
}
koans.core.evaluate_koan = (function koans$core$evaluate_koan(){
var input = koans.core.input_string.call(null);
jayq.util.log.call(null,"Evaluating ",input);

return cljs.js.eval_str.call(null,koans.core.compiler_state,input,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval], null),((function (input){
return (function (result){
jayq.util.log.call(null,result);

if(cljs.core.truth_((function (){var or__6142__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result),true);
}
})())){
return koans.core.show_error_message.call(null);
} else {
return koans.core.load_next_koan.call(null);
}
});})(input))
);
});
koans.core.handle_document_ready = (function koans$core$handle_document_ready(){
var $doc_13250 = jayq.core.$.call(null,document);
jayq.core.on.call(null,$doc_13250,new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,".text",".text",657723494),((function ($doc_13250){
return (function (){
return cljs.core.first.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"input","input",556931961))).focus();
});})($doc_13250))
);

jayq.core.on.call(null,$doc_13250,new cljs.core.Keyword(null,"keypress","keypress",1625181642),new cljs.core.Keyword(null,"input","input",556931961),((function ($doc_13250){
return (function (p1__13248_SHARP_){
if(cljs.core._EQ_.call(null,p1__13248_SHARP_.which,koans.core.enter_key)){
return koans.core.evaluate_koan.call(null);
} else {
return null;
}
});})($doc_13250))
);

jayq.core.on.call(null,$doc_13250,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961),((function ($doc_13250){
return (function (p1__13249_SHARP_){
return koans.core.resize_input.call(null,p1__13249_SHARP_.target);
});})($doc_13250))
);

return koans.core.render_current_koan.call(null);
});
koans.core.handle_hashchange = (function koans$core$handle_hashchange(){
koans.core.render_current_koan.call(null);

return ga("pageview",cljs.core.subs.call(null,location.hash,(1)));
});
koans.core.init = (function koans$core$init(){
jayq.core.document_ready.call(null,koans.core.handle_document_ready);

window.onhashchange = koans.core.handle_hashchange;

return cljs.js.eval.call(null,koans.core.compiler_state,cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval], null),cljs.core.identity);
});
koans.core.init.call(null);

//# sourceMappingURL=core.js.map