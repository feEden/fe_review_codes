// 枚举为一组数值赋予友好的名字 数值默认从0开始，可以手动设置
enum Color {
    Red = 1, Green, Blue
}

// 0
let color: Color = Color.Red;
// 
let color1: string = Color[1];
// Green
console.log(color, color1);
