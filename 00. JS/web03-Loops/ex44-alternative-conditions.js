function print(n) {
    

    let i, j, k,l=1, string = ""
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n-i; j++) {
            string += ' '
        }
    for (k = 1; k <= i; k++,l++) {
        if (l>n){
            break
        }
        string += ' '+ l;
        
    }
        
    string += "\n"
        
    }
    console.log(string)
}

print(4);
print(3);
print(2);
print(5);
print(7);
print(10);
print(12);