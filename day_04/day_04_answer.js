// every와 some을 이용해서 풀어보기

let ages = [23, 17, 15, 34, 50, 5];
let result;
// Quiz 1. 모든 성인인지 확인하기(성인판단기준 18세이상) '모두성인입니다.' 또는 '성인이 아닌사람이 있습니다' every이용

result = ages.every((age) => age >= 18)
  ? "모두 성인입니다"
  : "성인이 아닌 사람이 있습니다";
console.log(`Quiz 1 :`, result);
// Quiz 2. 미취학 아동이 있는지 확인하기(미취학 아동은 6세이하) '미취학아동이 있습니다', 또는 '미취학 아동이 없습니다' some이용
result = ages.some((age) => age <= 6)
  ? "미취학 아동이 있습니다"
  : "미취학 아동이 없습니다.";
console.log(`Quiz 2 :`, result);

const scores = [32, 85, 73, 50, 3, 93];

// Quiz 3. scores의 점수를 모두 더해서 총점을 구하세요
const total = scores.reduce((a, c) => a + c, 0);
console.log("Quiz 3 :", total);

// Quiz 4. scores의 평균을 구하세요
result = total / scores.length;
console.log(`Quiz 4 :`, result);
// Quiz 5. scores를 오름차순으로 정렬하세요 [ 3, 32, 50, 73, 85, 93 ]

result = [...scores].sort((a, b) => a - b); // 원본을 바꾸지 않기위해 spread연산자 사용
console.log(`Quiz 5 :`, result);
// Quiz 6. 1부터 50까지 더하여 결과를 출력하세요(Array(n).fill().map() 이용하기)

const today = new Date();
// Quiz 7. 오늘이 주말인지 평일인지 구하여 출력하세요
result =
  today.getDay() === 0 || today.getDay() === 6 ? "주말입니다" : "평일입니다.";
console.log(`Quiz 7 :`, result);

const animals = ["puppy", "cat", "fox"];

// Quiz 8. puppy와 cat 사이에 'parret'과 'rabbit'을 추가하세요
animals.splice(1, 0, "parret", "rabbit");
console.log(`Quiz 08: `, animals);

// Quiz 9. animals 변수의 값을 거꾸로 출력하세요 ['fox','cat','rabbit','parret','puppy']
console.log("Quiz 09 : ", [...animals].reverse());
console.log("Quiz 09 : ", [...animals.reverse()]);

const str = "Hello";
// Quiz 10. str문자를 배열로 반환하시오 -> ['H','e','l','l','o]
result = str.split("");
console.log(`Quiz 10 :`, result);
const arr = ["Today", "is", "Monday", "!"];

// Quiz 11. arr를 문자열로 만들되 사이에 공백을 넣어서 작성하세요 'Today is Monday !'
result = arr.join(" ");
console.log(`Quiz 11:`, result);
