
    const multiples3or5 = (num) => {
        if(num < 3)
            return 0;
        if(num % 3 === 0 || num % 5 === 0)
            return num + multiples3or5(num - 1);
        else
            return multiples3or5(num - 1);
    }

    console.log(multiples3or5(999)); //233168 - below 1000
    console.log(multiples3or5(9)); //23 - below 10