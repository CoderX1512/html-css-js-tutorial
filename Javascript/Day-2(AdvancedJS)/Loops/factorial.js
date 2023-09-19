// Iterative method
/*function fact(n){
    if( n==0){
        return 1;
    }
    ans =1;
    for( let i=1; i<=n ;i++){
        ans = ans*i;
    }
    return ans;
}
console.log(fact(5));
*/



//Using recursion
function Fact(n){
    // base case
    if( n==0){
        return 1;
    }
    return n*Fact(n-1);
}

console.log(Fact(5));