//JavaScript ES23

const ztmMonsters = [
{id: 1, monster: 'Mr.Mouse', level: 1},
{id: 1, monster: 'Mac', level: 30},
{id: 1, monster: 'Denodude', level: 17},
{id: 1, monster: 'Pye', level: 5},];

//Hur filtrerar vi så vi bara hittar alla monster som är level 15 eller högre?
//Samt ge mig den sista som resultat

//Det gamla sättet var const advancedMonsters = ztmMonsters.filter(item =>
// item.level > 15) console.log(advancedMonsters)
// console.log(advancedMonsters[advancedMonsters.length - 1])

//Det nya sättet är istället att använda findLast()
const lastMonster = ztmMonsters.findLast(item => item.level > 15)
console.log(lastMonster);

//En annan ny metod är något som heter findLastIndex
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15)
console.log(lastMonsterIndex);
//Då får vi svaret 2 istället eftersom Denodude är på plats 0, 1, 2 i arrayen

//ztmMonsters.reverse() Har vi haft länge problemet är att hela arrayen 
//Blir klotrad och man kan inte använda den för dem föregående syftena

//Allt nedan är "immutable" så de infekterar inte arrayen så att säga
//Istället kan man använda .toReversed()
ztmMonsters.toReversed();
//Nu behåller man orginal arrayen samtidigt som man skapar en ny reversad array
ztmMonsters.toSorted();
//Bygger på samma princip som innan men sorterar istället arrayen och skapar en ny
//Mycket bättre jämfört med den förra .sort()
ztmMonsters.toSpliced(2, 1); //2 är ta bort ojekt 2 i arrayen och 1 för ta bara bort en
ztmMonsters.with(1, "Gost"); //Det här bytter ut objektet 1 arrayen till Gost