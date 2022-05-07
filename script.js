var til = prompt('tilni tanlang:rus yoki uz')
if(til ==='uz'){
    var Uzinfo = prompt('operatsiya tanlang: balans,naqd,check')
    if (Uzinfo=='balans'){
        console.info('sizning balansigiz 200000,som')
    }else if  (Uzinfo=='naqd'){

            console.info('kuting')
    }
    else if (Uzinfo=='check'){
        console.info('checkni oling ')
        
    }
}

else if(til=='ru'){
    var Ruinfo = prompt ('выберайте опиратцыю:баланс,наличныйе,чек')
     if (Ruinfo=='баланс'){
        console.info('ваш баланс 200000сум')
        }
        else if (Ruinfo=='наличныйе'){
        console.info('возмите деньги')
        }
        else if (Ruinfo=='чек'){
        console.info('возмите чек ')
        }
        else {
            console.error('вы выбрали не правильный язык')
        }
}


else {
console.error('siz notoqri til tanladingiz!')
}


