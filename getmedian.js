var getMedian = function(a,b,c){
  var set = [a,b,c];
  set.sort(comparator);
function comparator (a,b){
    if (a<b) return -1;
    else if (b<a) return 1;
    else return 0;
  }
	comparator(24,94);
  return set[1];
};

getMedian(1,2,3);