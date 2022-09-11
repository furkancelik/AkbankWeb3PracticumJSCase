# Akbank Web3 Practicum

## JS Case

Merhaba 👋🏻

Bu repo; Patika.dev'in Akbank Web3 Practium Eğitimi için hazırladığım case'dir.

**İstenilenler**

Bir sayının Tek mi Çift mi olduğunu belirleyen bir işlev oluşturun. Bir sayı, tüm basamaklarının toplamı tek ise tek, tüm basamaklarının toplamı çift ise bir sayıdır. Bir sayı tek ise, "Odd" döndürün. Aksi takdirde, "Even" değerini döndürün. Örnek olarak:

```
oddishOrEvenish(43) ➞ "Odd"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Odd"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Even"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
```

### Çözüme Yakşaşımım

Yazılımda birşeyler yapmak için birden fazla yol vardır. Bende bu case'e 2 farklı metod ile yaklaşıp çözüm üretmeye çalışacağım.

**_Birinci Yaklaşımım_**

Önce JS'in kendi metodlarını kullanarak çözüme ulaşmaya çaşışacağım.
"code1.js" dosyasından kaynak kodu inceleyebilirsiniz.

**_İçeriği;_**

Burada JS'in hazır metodlarını kullanarak çok kolay bir şekilde teklik çiftlik kavramına çözüm üretmiş oldum.

```
function oddishOrEvenish(number) {
  const result =
    number
      .toString()
      .split("")
      .reduce((prev, current) => parseInt(prev) + parseInt(current)) % 2;
  if (result === 0) return "Even";
  else return "Odd";
}

console.log(oddishOrEvenish(4433));
```

**_İkinci Yaklaşımım_**

Burada girilen sayısı for döngüsüne alarak, sayı basamaklarını JS'in Math kütüphanesinin bazı metodlarından faydalanarak girilen sayının basamaklarını bulup toplatıyorum ve toplam sonucunu mod 2 alarak tek mi çift mi olduğunu return ediyorum.

"code2.js" dosyasından kaynak kodu inceleyebilirsiniz.

**_İçeriği;_**

```
function oddishOrEvenish(number) {
  let numberToBeDivided = 0;
  for (let digit = number.toString().length - 1; digit >= 0; digit--) {
    const figure = Math.floor(number / Math.pow(10, digit));
    console.log(digit);
    numberToBeDivided += figure;
    number -= figure * Math.pow(10, digit);
  }

  if (numberToBeDivided % 2 == 1) {
    console.log("Odd");
    return "Odd";
  }
  console.log("Even");
  return "Even";
}

oddishOrEvenish(4433);
```
