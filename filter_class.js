var classArray = [{name:'bob',class:'4'},{name:'scott',class:'5'},{name:'steve', class:'4'},{name:'mike',class:'9'}, {name:'willard',class:'4'}];

var sectionArray = classArray.filter(function(elem, index) {
	return elem.class === '4';
});
console.log(sectionArray);