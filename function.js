function x() {
  for (var p = 1; p <= 5; p++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
        //d = new Date();
        //$("#PrintOut").append(` Current Time :->` + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "<br/>");
      }, p * 1000);
    }
    close(p);
  }
}
x();

function sumarr() {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

var arr = [3, 5, 10, 15, 2];
const output = arr.map((x) => x * 2);
// OR arr.map(function(x){return x*2;});

const output1 = arr.filter(function (x) {
  if (x > 5) {
    return x;
  }
});

$findValue = 15;
const findArr = arr.filter(function (x) {
  if (x == $findValue) {
    return x;
  }
});

const output2 = arr.reduce(function (arr, curr) {
  arr = arr + curr;
  return arr;
}, 0);

console.log({
  'Original:': arr,
  'Map:': output,
  'Filter:': output1,
  'Reduce:': output2,
  'Sum:': sumarr(),
  'findArr:': findArr,
});

var users = [
  { firstname: 'Birender', lastname: 'Rana', age: 38 },
  { firstname: 'Sahil', Taneja: 'Rana', age: 31 },
  { firstname: 'Abhishek', lastname: 'Sharma', age: 30 },
];

const combineMap = users.map(function (x) {
  return x.firstname + ' ' + x.lastname;
});

const FilterAge = users.filter(function (x) {
  if (x.age > 30) {
    return x.firstname;
  }
});

const userreduce = users.reduce(function (acc, curr) {
  if (curr.age > 30) {
    acc.push(curr);
  }
  return acc;
}, []);

$findValue = 'Birender';
const findValue = users.filter(function (x) {
  if (x.firstname == 'Birender') {
    return x;
  }
});
console.log({
  'Users:': users,
  'FilterAge:': FilterAge,
  'combineMap:': combineMap,
  userreduce: userreduce,
  'findValue:': findValue,
});

var names = { show: 'PrintName', num: 4 };

function printfullname(firstname, lastname) {
  return this.show + ' :=>' + firstname + ' ' + lastname;
}

function multiply(a, b) {
  return this.num + a * b;
}

console.log('Call:=>' + printfullname.call(names, 'Birender', 'Rana'));
console.log('Apply:=>' + printfullname.apply(names, ['Amit', 'Kumar']));

console.log('Call:=>' + multiply.call(names, 10, 15));
console.log('Apply:=>' + multiply.apply(names, [5, 2, 5]));

const func = multiply.bind(names, 3, 5);
console.log('Bind:=>', func);
