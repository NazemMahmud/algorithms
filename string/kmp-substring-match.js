/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function KMP(text, pattern){
	let LPS = preProcess(pattern);
    let i=0, j=0;
    while(i < text.length && j < pattern.length){
        if(text[i] == pattern[j]){
            i++;
			j++;
		} else if(j!=0){
			j = LPS[j-1];
		} else {
			i++;
        }
    }
	if(j == pattern.length){
		return true; // if you want to return the position, then (i - j )
	}
    return false;
}

function preProcess(pattern) {
	let lps = new Array(pattern.length);
   	let i = 0, j = 1; lps[0] = 0;
  	while (j < pattern.length) {
  		if(pattern[j] == pattern[i]) {
  		    lps[j] = i + 1;
  		    i++;
			j++;
		} else if(i != 0) {
			i = lps[i-1];
		} else {
			lps[j] = 0;
			j++;
		}
	}
	return lps;
}


let text = "abcxabcdabcdabcx", pattern = "abcdabcx";
console.log("Result : ", KMP(text, pattern));