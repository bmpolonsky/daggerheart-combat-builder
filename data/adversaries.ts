import { Adversary } from '../types';

export const adversaryData: Adversary[] = [{
  "id": 2366,
  "slug": "red-ooze",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "skulk",
  "image_url": "/image/adversary/ooze-red.png",
  "features": [{
    "id": 1669,
    "name": "Ползучее Пламя - Пассивно",
    "main_body": "Слизь может перемещаться только в пределах [Близкой](/rule/very-close) дистанции в качестве своего обычного движения. Она поджигает любой воспламеняющийся объект, к которому прикасается."
  }, {
    "id": 1670,
    "name": "Воспламенить - Действие",
    "main_body": "Совершите атаку против цели в пределах Близкой дистанции. При успехе цель получает **1d8** урона от магии и *Воспламеняется*, пока не будет потушена успешным [Броском Искусности](/rule/finesse) (14). Пока цель *Воспламенена*, она получает **1d4** урона от магии при совершении Броска Действия."
  }, {
    "id": 1671,
    "name": "Деление - Реакция",
    "main_body": "Когда у Слизи 3 или более отмеченных Ран, вы можете [**потратить Страх** ](/rule/spending-fear), чтобы разделить ее на две [Крошечные Алые Слизи](/adversary/tiny-red-ooze) (без отмеченных Ран или Стресса). Немедленно активируйте обе."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "magical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 5,
  "difficulty": 10,
  "damage_thresholds": [6, 11],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Алая Слизь",
  "main_body": null,
  "short_description": "Движущаяся масса полупрозрачной горящей алой слизи.",
  "type_name": "Скрытный",
  "motives": "Замаскироваться, поглощать и делиться, поджигать, начать пожар",
  "weapon_name": "Придатки слизи",
  "experiences": "Маскировка +3"
}, {
  "id": 2410,
  "slug": "jagged-knife-bandit",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "standard",
  "image_url": "/image/adversary/jagge-knife-bandit.png",
  "features": [{
    "id": 1797,
    "name": "Скалолаз - Пассивно",
    "main_body": "Бандит взбирается так же легко, как и бегает."
  }, {
    "id": 1798,
    "name": "Удар Сверху - Пассивно",
    "main_body": "Когда Бандит успешно проводит стандартную атаку сверху по цели, он наносит **1d10+1** физического урона вместо своего стандартного."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 5,
  "difficulty": 12,
  "damage_thresholds": [8, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Бандит из «Зазубренного Ножа»",
  "main_body": null,
  "short_description": "Коварный преступник в плаще, владеющий характерным ножом банды.",
  "type_name": "Рядовой",
  "motives": "Побег, нажива, кража, дымовая завеса",
  "weapon_name": "Кинжалы",
  "experiences": "Воровство +2"
}, {
  "id": 2345,
  "slug": "shambling-zombie",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1614,
    "name": "С ними не совладать - Пассивно",
    "main_body": "Когда зомби находится Вплотную к существу и по крайней мере один другой зомби находится в пределах Средней дистанции, все атаки против этого существа имеют [преимущество](/rule/advantage-and-disadvantage)."
  }, {
    "id": 1615,
    "name": "Ужасающий - Пассивно",
    "main_body": "Цели, которые получают Раны от атак Зомби, также должны [**отметить Стресс** ](/rule/marking-stress)."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 1,
  "hp": 4,
  "difficulty": 10,
  "damage_thresholds": [4, 6],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Бредущий Зомби",
  "main_body": null,
  "short_description": "Оживший пошатывающийся труп, которым движет только голод.",
  "type_name": "Рядовой",
  "motives": "Пожирать, голодать, окружить, рвать плоть",
  "weapon_name": "Укус",
  "experiences": ""
}, {
  "id": 2403,
  "slug": "giant-rat",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1780,
    "name": "Приспешник (3) - Пассивно",
    "main_body": "Крыса считается побежденной, если она получила любой урон. За каждые 3 единицы урона, нанесенного персонажем Крысе, победите еще одного Приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1781,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы выбрать цель и [активировать](/rule/spotlight) всех Гигантских Крыс в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 1 физическому урону каждая. Объедините этот урон."
  }],
  "attack_bonus": "-4",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 10,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Гигантская Крыса",
  "main_body": null,
  "short_description": "Грызун размером с кошку, мастер выживания",
  "type_name": "Приспешник",
  "motives": "Закапываться, голодать, рыться в отбросах, изматывать",
  "weapon_name": "Когти",
  "experiences": "Острые Чувства +3"
}, {
  "id": 2382,
  "slug": "giant-mosquitoes",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1714,
    "name": "Орда (1d4+1) - Пассивно",
    "main_body": "Когда у комаров отмечено 1 или более Ран, их стандартная атака наносит **1d4+1** физического урона."
  }, {
    "id": 1715,
    "name": "Полёт - Пассивно",
    "main_body": "Во время полета Комары получают бонус +2 к [Сложности](/rule/difficulty)."
  }, {
    "id": 1716,
    "name": "Кровососущий - Реакция",
    "main_body": "Когда атака Комаров заставляет цель отметить Рану, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы заставить цель отметить дополнительную Рану."
  }],
  "attack_bonus": "-2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 6,
  "difficulty": 10,
  "damage_thresholds": [5, 9],
  "horde_per_hp": 5,
  "language": "ru",
  "name": "Гигантские Комары",
  "main_body": null,
  "short_description": "Дюжины комаров размером с кулак, летающие вместе для защиты.\r\n\r\n",
  "type_name": "Орда",
  "motives": "Улетать, докучать, сосать кровь",
  "weapon_name": "Хоботок",
  "experiences": "Маскировка +2"
}, {
  "id": 2381,
  "slug": "giant-scorpion",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1711,
    "name": "Двойной удар - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы совершить стандартную атаку против двух целей находящихся Вплотную."
  }, {
    "id": 1712,
    "name": "Ядовитое Жало - Действие",
    "main_body": "Совершите атаку против цели в пределах [близкой](/rule/very-close) дистанции. При успехе, [**потратьте Страх** ](/rule/spending-fear) чтобы нанести **1d4+4** [физического урона](/rule/physical-damage-type) и *Отравить* цель до ее следующего отдыха или пока она не выполнит успешно [Бросок Знания](/rule/knowledge) (16). Пока цель *Отравлена*, она должна бросить **1d6** перед тем, как совершит [бросок действия](/rule/action-roll). При результате 4 или ниже, она должна **отметить Стресс**."
  }, {
    "id": 1713,
    "name": "Импульс - Реакция",
    "main_body": "Когда Скорпион совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 12,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 6,
  "difficulty": 13,
  "damage_thresholds": [7, 13],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Гигантский Скорпион",
  "main_body": null,
  "short_description": "Арахнид ростом с человека, с раздирающими клешнями и жалом.\r\n\r\n",
  "type_name": "Громила",
  "motives": "Засада, кормёжка, захват, яд",
  "weapon_name": "Клещи",
  "experiences": "Маскировка +2"
}, {
  "id": 2346,
  "slug": "rotted-zombie",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "minion",
  "image_url": "/image/adversary/zombie-rotted.png",
  "features": [{
    "id": 1616,
    "name": "Приспешник (3) - Пассивно",
    "main_body": "Зомби побежден, когда получает любой урон. За каждые 3 единицы урона, нанесенного персонажем Мертвецу, победите дополнительного приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1617,
    "name": "Групповая атака - Действие",
    "main_body": "**Потратьте Страх**, чтобы выбрать цель и [активировать](/rule/spotlight) всех Зомби в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 2 единицы Физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "-3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 8,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Гнилой Зомби",
  "main_body": null,
  "short_description": "Полусгнившее тело, шатающееся к своей цели с неумолимостью, достойной жалости и страха",
  "type_name": "Приспешник",
  "motives": "Жрать плоть, голодать, терзать, окружать",
  "weapon_name": "Укус",
  "experiences": ""
}, {
  "id": 2355,
  "slug": "spellblade",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1642,
    "name": "Магическая сталь - Пассивно",
    "main_body": "Урон, наносимый стандартной атакой Мечника, считается как физическим, так и магическим."
  }, {
    "id": 1643,
    "name": "Подавляющий Взрыв - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) и выберите группу в пределах [Далекой](/rule/far) дистанции. Все цели должны успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) или получить **1d8+2** урона от магии. Вы получаете [Страх](/rule/fear) за каждую цель, которая получила Рану от этой атаки."
  }, {
    "id": 1644,
    "name": "Действовать как единое целое - Действие",
    "main_body": "[**Потратьте 2 Страха** ](/rule/spending-fear) для активации до пяти союзников в пределах Далекой дистанции."
  }, {
    "id": 1645,
    "name": "Импульс - Реакция",
    "main_body": "Когда Мечник совершает успешную атаку против персонажа, вы получаете Страх."
  }],
  "attack_bonus": "3",
  "attack_range": "melee",
  "damage_type": "any",
  "damage_bonus": 4,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 6,
  "difficulty": 14,
  "damage_thresholds": [8, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Заклинатель-мечник",
  "main_body": null,
  "short_description": "Наемник, сочетающий в себе мастерство фехтования и магии, что делает его смертельно опасным противником.",
  "type_name": "Лидер",
  "motives": "Взрыв, команда, стойкость",
  "weapon_name": "Усиленный Длинный Меч",
  "experiences": "Магические знания +2"
}, {
  "id": 2384,
  "slug": "deeproot-defender",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1719,
    "name": "Удар об Землю - Действие",
    "main_body": "Ударь по земле, отбрасывая все цели в пределах [Близкой](/rule/very-close) дистанции на [Далекую](/rule/far) дистанцию. Каждая отброшенная таким образом цель должна [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1720,
    "name": "Схватить и Притянуть - Действие",
    "main_body": "Совершите атаку против цели в пределах Средней дистанции. При успехе, [**потратьте Страх** ](/rule/spending-fear), чтобы притянуть её [Вплотную](/rule/melee), нанести **1d6+2** физического урона и [*Обездвижить* ](/rule/restrained) цель до тех пор, пока защитник не получит [Тяжелый урон](/rule/severe-damage)."
  }],
  "attack_bonus": "2",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 7,
  "difficulty": 10,
  "damage_thresholds": [8, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Защитник Корней",
  "main_body": null,
  "short_description": "Крепкий растительный страж с хваткими лозами.",
  "type_name": "Громила",
  "motives": "Засада, захват, защита, бить",
  "weapon_name": "Лозы",
  "experiences": "Огромный +3"
}, {
  "id": 2368,
  "slug": "green-ooze",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "skulk",
  "image_url": "/image/adversary/ooze-green.png",
  "features": [{
    "id": 1673,
    "name": "Медлительность - Пассивно",
    "main_body": "Когда вы [активируете](/rule/spotlight) Слизь, и у неё нет [жетона](/rule/token) в блоке характеристик, оно еще не может действовать. Поместите жетон в её блок характеристик и опишите, что оно готовится сделать. Когда вы активируете Слизь, и у неё есть жетон в блоке характеристик, снимите жетон, и оно может действовать."
  }, {
    "id": 1674,
    "name": "Кислотная Форма - Пассивно",
    "main_body": "Когда Слизь совершает успешную атаку, цель должна отметить [Ячейку Брони](/rule/armor-slot) без получения ее преимуществ (они все еще могут использовать броню для уменьшения урона). Если они не могут отметить Ячейку Брони, они должны отметить дополнительную Рану."
  }, {
    "id": 1675,
    "name": "Поглощение - Действие",
    "main_body": "Совершите стандартную атаку против цели Вплотную. При успехе, Слизь обволакивает цель, и она должна [отметить 2 Стресса](/rule/marking-stress). Цель должна отметить дополнительный Стресс, когда совершает Бросок Действия. Если Слизь получает [Тяжелый урон](/rule/severe-damage), цель освобождается."
  }, {
    "id": 1676,
    "name": "Деление - Реакция",
    "main_body": "Когда у Слизи 3 или более отмеченных Ран, вы можете [**потратить Страх** ](/rule/spending-fear), чтобы разделить ее на две [Крошечные Зеленые Слизи](/adversary/tiny-green-ooze) (без отмеченных Ран или Стресса). Немедленно активируйте обе."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "magical",
  "damage_bonus": 1,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 5,
  "difficulty": 8,
  "damage_thresholds": [5, 10],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Зелёная Слизь",
  "main_body": null,
  "short_description": "Движущаяся масса полупрозрачной зелёной слизи",
  "type_name": "Скрытный",
  "motives": "Маскироваться, поглощать и размножаться, подкрадываться, охватывать",
  "weapon_name": "Придатки слизи",
  "experiences": "Маскировка +3"
}, {
  "id": 2348,
  "slug": "brawny-zombie",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "bruiser",
  "image_url": "/image/adversary/zombie-brawny.png",
  "features": [{
    "id": 1622,
    "name": "Медлительность - Пассивно",
    "main_body": "Когда вы [активируете](/rule/spotlight) зомби, и у него нет [жетона](/rule/token) в блоке характеристик, он еще не может действовать. Поместите жетон в его блок характеристик и опишите, что он готовится сделать. Когда вы активируете зомби, и у него есть жетон в блоке характеристик, снимите жетон, и он может действовать."
  }, {
    "id": 1623,
    "name": "Разорвать на части - Действие",
    "main_body": "Совершите стандартную атаку с [преимуществом](/rule/advantage-and-disadvantage) против цели, которая находится в состоянии [*Обездвижен* ](/rule/restrained). При успехе атака наносит [прямой урон](/rule/direct-damage)."
  }, {
    "id": 1624,
    "name": "Разорвать Надвое - Реакция",
    "main_body": "Когда Зомби совершает успешную стандартную атаку, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы временно *Обездвижить* цель и заставить ее отметить 2 Стресса."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 12,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 7,
  "difficulty": 10,
  "damage_thresholds": [8, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Зомби Силач",
  "main_body": null,
  "short_description": "Огромный мертвец, налитый трупной силой и слепой яростью.",
  "type_name": "Громила",
  "motives": "Сокрушать, ломать, сыпать обломками, таранить",
  "weapon_name": "Ладонь",
  "experiences": "Случайный Урон +2, Метание +4"
}, {
  "id": 2363,
  "slug": "pirate-captain",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1661,
    "name": "Фехтовальщик - Пассивно",
    "main_body": "Когда Капитан отмечает 2 или меньше Ран от атаки Вплотную, атакующий должен [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1662,
    "name": "Подкрепление - Действие",
    "main_body": "Один раз за сцену **отметьте Стресс**, чтобы вызвать орду [Пиратов Налётчиков](/adversary/pirate-raiders), которая появляется на [Далекой](/rule/far) дистанции."
  }, {
    "id": 1663,
    "name": "Без Пощады - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы выбрать цель, к которой Вплотную находятся три или более Пиратов. Капитан возглавляет Пиратов, бросая угрозы и обещания морской могилы. Цель должна совершить [Бросок Реакции](/rule/reaction-roll) [Влияние](/rule/presence). При неудаче цель отмечает **1d4+1** Стресс. При успехе она должна **отметить Стресс**."
  }, {
    "id": 1664,
    "name": "Импульс - Реакция",
    "main_body": "Когда Капитан совершает успешную атаку против персонажа игрока, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "4",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 12,
  "damage_die_count": 1,
  "stress": 5,
  "hp": 7,
  "difficulty": 14,
  "damage_thresholds": [7, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Капитан Пиратов",
  "main_body": null,
  "short_description": "Харизматичный морской волк с эффектной шляпой.",
  "type_name": "Лидер",
  "motives": "Командовать, отправлять на планку, грабить, нападать",
  "weapon_name": "Сабля",
  "experiences": "Командир +2, Моряк +3"
}, {
  "id": 2405,
  "slug": "head-guard",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1785,
    "name": "Подъём стражи - Действие",
    "main_body": "[**Потратьте 2 Страха** ](/rule/spending-fear) на [активацию](/rule/spotlight) Капитана Стражи и до **2d4** союзников в пределах [Далекой](/rule/far) дистанции от него."
  }, {
    "id": 1786,
    "name": "По Моему Сигналу - Реакция",
    "main_body": "*Отсчёт (5)*. Когда Капитан Стражи впервые активирован, начните [отсчёт](/rule/countdown). Он уменьшается, когда персонаж совершает [бросок Атаки](/rule/attack-roll). Когда отсчёт завершён, все [Стражники Лучники](/adversary/archer-guard) в пределах Далекой дистанции совершают стандартную атаку с [преимуществом](/rule/advantage-and-disadvantage) против ближайшей цели в пределах их дистанции. Если несколько атак по одной цели оказались успешными, их урон суммируется."
  }, {
    "id": 1787,
    "name": "Импульс - Реакция",
    "main_body": "Когда Капитан Стражи совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "4",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 10,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 7,
  "difficulty": 15,
  "damage_thresholds": [7, 13],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Капитан Стражи",
  "main_body": null,
  "short_description": "Закалённый в службе охранник с булавой, свистком и громогласным голосом.",
  "type_name": "Лидер",
  "motives": "Арестовывать, запирать ворота, удерживать, искать славу",
  "weapon_name": "Булава",
  "experiences": "Командование +2, Знание местности +2"
}, {
  "id": 2389,
  "slug": "acid-burrower",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "solo",
  "image_url": "/image/adversary/acid-burrower.png",
  "features": [{
    "id": 1735,
    "name": "Неумолимый (3) - Пассивно",
    "main_body": "Землекопа можно [активировать](/rule/spotlight) до трех раз за ход Мастера. [**Потратьте Страх** ](/rule/spending-fear) как обычно, чтобы активировать его."
  }, {
    "id": 1736,
    "name": "Всплеск Земли - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы Землекоп вырвался из-под земли. Все существа в пределах [близкой](/rule/close) дистанции должны успешно выполнить [Бросок Реакции](/rule/agility) на [Проворность](/rule/agility) или быть сбиты с ног, становясь [*Уязвимыми* ](/rule/vulnerable) до своего следующего действия."
  }, {
    "id": 1737,
    "name": "Кислотный Плевок - Действие",
    "main_body": "Совершите атаку против всех целей перед Землекопом в пределах [Средней](/rule/close) дистанции. Цели, против которых бросок успешен, получают **2d6** физического урона и должны отметить [Ячейку Брони](/rule/armor-slot) без получения ее преимуществ (они все еще могут использовать броню для уменьшения урона). Если они не могут отметить Ячейку Брони, они должны отметить дополнительную Рану, и вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1738,
    "name": "Кислотная Ванна - Реакция",
    "main_body": "Когда Землекоп получает [Тяжелый урон](/rule/severe-damage), все существа в пределах Близкой дистанции заливаются его кислотной кровью, получая **1d10** физического урона. Этот брызг покрывает землю в пределах Близкой дистанции кровью, и все существа, кроме Землекопа, которые перемещаются через нее, получают **1d6** физического урона."
  }],
  "attack_bonus": "3",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 12,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 8,
  "difficulty": 14,
  "damage_thresholds": [8, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Кислотный Землекоп",
  "main_body": null,
  "short_description": "Насекомое размером с лошадь, вооружённое кислотной кровью и когтями для копания.",
  "type_name": "Одиночка",
  "motives": "Рыть, утаскивать, питаться, менять позицию",
  "weapon_name": "Когти",
  "experiences": "Чувство Вибраций +2"
}, {
  "id": 2377,
  "slug": "jagged-knife-hexer",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "support",
  "image_url": "/image/adversary/jagge-knife-hexer.png",
  "features": [{
    "id": 1703,
    "name": "Проклятие - Действие",
    "main_body": "Выберите цель в пределах «Далекой» дистанции и временно *Прокляните* ее. Пока цель *Проклята*, вы можете [**отметить Стресс** ](/rule/marking-stress), когда эта цель бросает кубик с [Надеждой](/rule/hope), чтобы бросок был со [Страхом](/rule/fear)."
  }, {
    "id": 1704,
    "name": "Поток Хаоса - Действие",
    "main_body": "Совершите атаку, выбрав целями до трех существ в пределах [Близкой](/rule/very-close) дистанции. **Отметьте Стресс**, чтобы нанести **2d6+3** урона магией целям, против которых Колдун добился успеха."
  }],
  "attack_bonus": "2",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 2,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 4,
  "difficulty": 13,
  "damage_thresholds": [5, 9],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Колдун из «Зазубренного Ножа»",
  "main_body": null,
  "short_description": "Колдун в плаще на службе банды, вооружённый посохом и набором странных чар.",
  "type_name": "Поддержка",
  "motives": "Командование, сглаз, нажива",
  "weapon_name": "Посох",
  "experiences": "Магическое Знание +2"
}, {
  "id": 2376,
  "slug": "jagged-knife-kneebreaker",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1701,
    "name": "Держу Прочно! - Пассивно",
    "main_body": "Существа, [*Обездвиженные* ](/rule/restrained) Коленоломом, получают двойной урон от атак других противников."
  }, {
    "id": 1702,
    "name": "Прижать к Земле - Действие",
    "main_body": "Совершите атаку против цели Вплотную к вам. При успехе цель не получает урона, но становится *Обездвиженной* и [*Уязвимой* ](/rule/vulnerable). Цель может освободиться, сняв оба состояния, при успешном [Броске Силы](/rule/strength) или автоматически освобождается, если Коленолом получает [Ощутимый](/rule/major-damage) или больше урона."
  }],
  "attack_bonus": "-3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 6,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 7,
  "difficulty": 12,
  "damage_thresholds": [7, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Коленолом из «Зазубренного Ножа»",
  "main_body": null,
  "short_description": "Громила с массивной дубиной, наводящий ужас одним видом.",
  "type_name": "Громила",
  "motives": "Захват, запугивание, нажива, грабёж",
  "weapon_name": "Дубина",
  "experiences": "Воровство +2, Явная Угроза +3"
}, {
  "id": 2351,
  "slug": "tangle-bramble",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1631,
    "name": "Приспешник (4) - Пассивно",
    "main_body": "Тёрн считается побежденным, когда он получает любой урон. За каждые 4 единицы урона, нанесенные персонажем Тёрну, победите еще одного приспешника в пределах дистанции, на которую действует атака."
  }, {
    "id": 1632,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы выбрать цель и [активировать](/rule/spotlight) все Тёрны в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 2 единицы Физического урона за каждого. Объедините этот урон."
  }, {
    "id": 1633,
    "name": "Кровавое Сплетение - Реакция",
    "main_body": "Когда атака Тёрна наносит цели урон, и в пределах Средней дистанции от цели находятся три или более Тёрнов, вы можете объединить приспешников в [Рой Тёрнов](/adversary/tangle-bramble-swarm). Количество ячеек Ран орды равна сумме ячеек Ран объединенных приспешников."
  }],
  "attack_bonus": "-1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 11,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Колючий Тёрн",
  "main_body": null,
  "short_description": "Живое кровопьющее перекати-поле, сливающееся с собратьями в смертельную массу",
  "type_name": "Приспешник",
  "motives": "Сливаться, истощать, опутывать",
  "weapon_name": "Шипы",
  "experiences": ""
}, {
  "id": 2386,
  "slug": "construct",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "solo",
  "image_url": "",
  "features": [{
    "id": 1723,
    "name": "Неумолимый (2) - Пассивно",
    "main_body": "Конструкт может быть активирован до двух раз за ход Мастера. Для активации [**потратьте Страх** ](/rule/spending-fear) как обычно."
  }, {
    "id": 1724,
    "name": "Хрупкая Конструкция - Пассивно",
    "main_body": "Когда Конструкт отмечает Рану от физического урона, он должен отметить дополнительную Рану."
  }, {
    "id": 1725,
    "name": "Растоптать - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы совершить атаку против всех целей на пути Конструкта, когда он движется. Цели, против которых Конструкт добился успеха, получают **1d8** физического урона."
  }, {
    "id": 1726,
    "name": "Перегрузка - Реакция",
    "main_body": "Перед броском урона Конструкта, вы можете **отметить Стресс**, чтобы получить бонус +10 к [броску урона](/rule/damage-roll). Затем Конструкта можно снова активировать."
  }, {
    "id": 1727,
    "name": "Смертельный Взрыв - Реакция",
    "main_body": "Когда Конструкт отмечает свою последнюю Рану, магия, питающая его, разрывается в мощном взрыве. Совершите атаку с [преимуществом](/rule/advantage-and-disadvantage) против всех целей в пределах [Близкой](/rule/very-close) дистанции. Цели, против которых Конструкт преуспел, получают **1d12+2** урона от магии."
  }],
  "attack_bonus": "4",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 0,
  "damage_die_size": 20,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 9,
  "difficulty": 13,
  "damage_thresholds": [7, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Конструкт",
  "main_body": null,
  "short_description": "Человекоподобное создание из камня и стали, оживлённое магией",
  "type_name": "Одиночка",
  "motives": "Уничтожать, защищать создателя, крушить цель, сминать толпу",
  "weapon_name": "Удар Кулаком",
  "experiences": ""
}, {
  "id": 2365,
  "slug": "tiny-red-ooze",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "skulk",
  "image_url": "/image/adversary/ooze-tiny-red.png",
  "features": [{
    "id": 1668,
    "name": "Горение - Реакция",
    "main_body": "Когда существо, находящееся [Вплотную](/rule/melee ) к Слизи наносит ей урон, оно получает **1d6** [прямого](/rule/direct-damage) магического урона."
  }],
  "attack_bonus": "-1",
  "attack_range": "melee",
  "damage_type": "magical",
  "damage_bonus": 2,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 1,
  "hp": 2,
  "difficulty": 11,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Крошечная Алая Слизь",
  "main_body": null,
  "short_description": "Маленький огненный сгусток, что горит и поджидает врагов.",
  "type_name": "Скрытный",
  "motives": "Поджигать, прятаться",
  "weapon_name": "Придатки слизи",
  "experiences": ""
}, {
  "id": 2367,
  "slug": "tiny-green-ooze",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1672,
    "name": "Кислотная Форма - Пассивно",
    "main_body": "Когда Слизь совершает успешную атаку, цель должна отметить [Ячейку Брони](/rule/armor-slot) без получения ее преимуществ (они все еще могут использовать броню для уменьшения урона). Если они не могут отметить Ячейку Брони, они должны отметить дополнительную Рану."
  }],
  "attack_bonus": "-1",
  "attack_range": "melee",
  "damage_type": "magical",
  "damage_bonus": 1,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 1,
  "hp": 2,
  "difficulty": 14,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Крошечная Зелёная Слизь",
  "main_body": null,
  "short_description": "Маленький комок зелёной слизи, подкрадывающийся к жертве.",
  "type_name": "Скрытный",
  "motives": "Маскировка, внезапные атаки",
  "weapon_name": "Придатки слизи",
  "experiences": ""
}, {
  "id": 2374,
  "slug": "jagged-knife-lieutenant",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "leader",
  "image_url": "/image/adversary/jagge-knife-lieutenant-single.png",
  "features": [{
    "id": 1695,
    "name": "Тактик - Действие",
    "main_body": "Когда вы [активируете](/rule/spotlight) лейтенанта, [**отметьте Стресс** ](/rule/marking-stress), чтобы также активировать двух союзников в пределах Средней от него дистанции."
  }, {
    "id": 1696,
    "name": "Ещё Появятся - Действие",
    "main_body": "Призовите трех [Шестёрок «Зазубренного Ножа»](/adversary/jagged-knife-lackey), которые появляются на [Далекой](/rule/far) дистанции."
  }, {
    "id": 1697,
    "name": "Удар Милосердия - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы совершить атаку против [*Уязвимой* ](/rule/vulnerable) цели в пределах Средней дистанции. При успехе нанесите **2d6+12** физического урона и цель должна **отметить Стресс**."
  }, {
    "id": 1698,
    "name": "Импульс - Реакция",
    "main_body": "Когда лейтенант совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "+2",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 6,
  "difficulty": 13,
  "damage_thresholds": [7, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Лейтенант из «Зазубренного Ножа»",
  "main_body": null,
  "short_description": "Закалённый бандит в дорогой коже, с мощным голосом и быстрым умом",
  "type_name": "Лидер",
  "motives": "Давление, командование, нажива, подкрепление",
  "weapon_name": "Копьё",
  "experiences": "Знание местности +2"
}, {
  "id": 2390,
  "slug": "forest-druid",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "support",
  "image_url": "",
  "features": [{
    "id": 1739,
    "name": "Тишина долины - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы прекратить действие заклинания или снять любое [состояние](/rule/condition), влияющее на Друида или союзника, которого он может видеть в пределах [Близкой](/rule/very-close) дистанции."
  }, {
    "id": 1740,
    "name": "Оглушающий шепот - Действие",
    "main_body": "**Отметьте Стресс**, чтобы вызвать ветер в кронах деревьев. Цель в пределах [Средней](/rule/close) дистанции должна успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Инстинкт](/rule/instinct), иначе ее уши наполнит свистящий ветер. Цель не слышит ничего, кроме ветра, должна **отметить Стресс** и становится [*Уязвимой* ](/rule/vulnerable), пока не очистит [Стресс](/rule/stress)."
  }, {
    "id": 1741,
    "name": "Ускоренный Рост - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) и выберите точку в пределах [Далекой](/rule/far) дистанции. Из земли вырываются колючие кусты, заполняя область в пределах Средней дистанции от этой точки. Существо, которое входит в эту область или пытается пройти через нее, получает **2d6+3** физического урона и должно успешно выполнить Бросок Реакции на [Проворность](/rule/agility) или стать *Обездвиженной* до тех пор, пока не выполнит Бросок [Искусности](/rule/finesse) или Друид не получит [Тяжелый урон](/rule/severe-damage)."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "magical",
  "damage_bonus": 2,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 5,
  "hp": 4,
  "difficulty": 11,
  "damage_thresholds": [6, 10],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Лесной Друид",
  "main_body": null,
  "short_description": "Отшельник, говорящий с животными и растениями.\r\n\r\n",
  "type_name": "Поддержка",
  "motives": "Звать природу, не оставлять следов, охранять лес любой ценой",
  "weapon_name": "Дубовый посох",
  "experiences": "Знание животных +2, Знание Местности +3"
}, {
  "id": 2353,
  "slug": "sylvan-soldier",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1637,
    "name": "Стая - Пассивно",
    "main_body": "Если Лесной Солдат совершает стандартную атаку, а другой Лесной Солдат находится Вплотную к цели, нанесите **1d8+5** физического урона вместо стандартного урона."
  }, {
    "id": 1638,
    "name": "Контроль Леса - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы опрокинуть дерево в пределах [Средней](/rule/close) дистанции. Существо, пораженное деревом, должно успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) (15) или получить **1d10** физического урона."
  }, {
    "id": 1639,
    "name": "Слиться с окружением - Реакция",
    "main_body": "Когда Солдат совершает успешную атаку, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы он стал [*Скрытым* ](/rule/hidden) до своей следующей атаки или до тех пор, пока персонаж не выполнит успешный [Бросок Инстинкта](/rule/instinct) (14), чтобы найти Солдата."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 4,
  "difficulty": 11,
  "damage_thresholds": [6, 11],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Лесной Солдат",
  "main_body": null,
  "short_description": "Фея-воин в доспехах из листьев и коры.",
  "type_name": "Рядовой",
  "motives": "Засада, маскировка, подавление, защита, преследование",
  "weapon_name": "Серп",
  "experiences": "Отслеживать +2"
}, {
  "id": 2347,
  "slug": "patchwork-zombie-hulk",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "solo",
  "image_url": "/image/adversary/zombie-patchwork.png",
  "features": [{
    "id": 1618,
    "name": "Разваливающийся - Пассивно",
    "main_body": "Когда Мертвец получает [Ощутимый](/rule/major-damage) или больше урона, он отмечает дополнительную Рану."
  }, {
    "id": 1619,
    "name": "Цепляющие Руки - Пассивно",
    "main_body": "Когда Мертвец совершает стандартную атаку, он может атаковать все цели в Близком радиусе ."
  }, {
    "id": 1620,
    "name": "Ещё Один в Кучу- Действие",
    "main_body": "Когда Мертвец находится в пределах близкой дистанции от трупа, он может поглотить его, очистив одну Рану и Стресс."
  }, {
    "id": 1621,
    "name": "Крики Мучений - Действие",
    "main_body": "[**Отметить Стресс** ](/rule/marking-stress) чтобы заставить всех персонажей в пределах [Далекой](/rule/far) дистанции совершить [Бросок Реакции](/rule/reaction-roll) по [Влиянию](/rule/presence) (13). Цели, которые провалили бросок, теряют [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear) за каждого. Цели, которые успешно прошли проверку, должны **отметить Стресс**."
  }],
  "attack_bonus": "4",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 0,
  "damage_die_size": 20,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 10,
  "difficulty": 13,
  "damage_thresholds": [8, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Лоскутный Зомби-Громила",
  "main_body": null,
  "short_description": "Гниющий великан, сложенный из множества тел, с кулаками размером с голову гнома.",
  "type_name": "Одиночка",
  "motives": "Пожирать мертвецов, махать руками, жаждать, пугать",
  "weapon_name": "Множество Рук",
  "experiences": "Запугивание +2, Разрушение +2"
}, {
  "id": 2383,
  "slug": "dire-wolf",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1717,
    "name": "Стая - Пассивно",
    "main_body": "Если Волк совершает успешную обычную атаку, пока другой Лютоволк находится [Вплотную](/rule/melee) от цели, нанесите **1d6+5** физического урона вместо обычного урона и получите [Страх](/rule/fear)."
  }, {
    "id": 1718,
    "name": "Калечащий Удар - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы совершить атаку против цели, находящийся [Вплотную](/rule/melee). При успехе нанесите **3d4+10** [прямого](/rule/direct-damage) физического урона и сделайте цель [*Уязвимой* ](/rule/vulnerable) до тех пор, пока она не снимет хотя бы 1 [Рану](/rule/hit-points)."
  }],
  "attack_bonus": "2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 4,
  "difficulty": 12,
  "damage_thresholds": [5, 9],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Лютоволк",
  "main_body": null,
  "short_description": "Крупный хищник с угрожающей пастью, редко встречается в одиночку.\r\n\r\n",
  "type_name": "Скрытный",
  "motives": "Охранять территорию, изматывать врага, защищать стаю, окружать, преследовать",
  "weapon_name": "Когти",
  "experiences": "Острые Чувства +3"
}, {
  "id": 2370,
  "slug": "minor-demon",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "solo",
  "image_url": "/image/adversary/minor-demon.png",
  "features": [{
    "id": 1679,
    "name": "Неумолимый (2) - Пассивно",
    "main_body": "Демон может быть активирован до двух раз за ход Мастера. Для его активации, потратьте Страх как обычно."
  }, {
    "id": 1680,
    "name": "Все Должны Пасть - Пассивно",
    "main_body": "Когда персонаж терпит неудачу со [Страхом](/rule/fear) в пределах [Средней](/rule/close) дистанции от Демона, он теряет [Надежду](/rule/hope)."
  }, {
    "id": 1681,
    "name": "Адское пламя - Действие",
    "main_body": "**Потратьте Страх**, чтобы обрушить адский огонь в пределах [Далекой](/rule/far) дистанции. Все цели в этой области должны совершить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility). Цели, провалившие бросок, получают **1d20+3** урона от магии. Цели, прошедшие бросок, получают половину урона."
  }, {
    "id": 1682,
    "name": "Жнец - Реакция",
    "main_body": "Перед броском урона от атаки Демона, вы можете [**отметить Стресс** ](/rule/marking-stress) чтобы получить бонус к броску урона, равный текущему количеству отмеченных Ран Демона."
  }, {
    "id": 1683,
    "name": "Импульс - Реакция",
    "main_body": "Когда демон совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 6,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 8,
  "difficulty": 14,
  "damage_thresholds": [8, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Малый Демон",
  "main_body": null,
  "short_description": "Кроваво-красное порождёние Нижних Кругов, горящий ненавистью ко всем смертным.\r\n\r\n",
  "type_name": "Одиночка",
  "motives": "Действовать непредсказуемо, загонять жертв, наслаждаться болью и муками",
  "weapon_name": "Когти",
  "experiences": ""
}, {
  "id": 2371,
  "slug": "minor-fire-elemental",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "solo",
  "image_url": "/image/adversary/minor-elemental-fire.png",
  "features": [{
    "id": 1684,
    "name": "Неумолимый (2) - Пассивно",
    "main_body": "Элементаль может быть активирован до двух раз за ход Мастера. Для активации элементаля, потратьте Страх как обычно."
  }, {
    "id": 1685,
    "name": "Выжженная земля - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы выбрать точку в пределах Далекой дистанции от элементаля. Земля в пределах [Близкой](/rule/very-close) дистанции от этой точки немедленно вспыхивает пламенем. Все существа в этой области должны совершить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility). Цели, провалившие бросок, получают **2d8** магического урона от пламени. Цели, которые преуспевают, получают половину урона."
  }, {
    "id": 1686,
    "name": "Взрыв пламени - Действие",
    "main_body": "**Потратьте Страх**, чтобы взорваться в огненном взрыве. Совершите атаку против всех целей в пределах [Средней](/rule/close) дистанции. Цели, против которых элементаль добился успеха, получают **1d8** магического урона и отбрасываются на Далекую дистанцию."
  }, {
    "id": 1687,
    "name": "Поглощение топлива - Реакция",
    "main_body": "Три раза за сцену, когда Элементаль перемещается на легко воспламеняющиеся объекты, он поглощает их, чтобы очистить Рану или Стресс."
  }, {
    "id": 1688,
    "name": "Импульс - Реакция",
    "main_body": "Когда элементаль совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "3",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 4,
  "damage_die_size": 10,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 9,
  "difficulty": 13,
  "damage_thresholds": [7, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Малый Огненный Элементаль",
  "main_body": null,
  "short_description": "Живое пламя размером с большой костер.",
  "type_name": "Одиночка",
  "motives": "Окружать врагов огнём, увеличивать размеры, устрашать",
  "weapon_name": "Элементальный взрыв",
  "experiences": ""
}, {
  "id": 2372,
  "slug": "minor-chaos-elemental",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "solo",
  "image_url": "/image/adversary/minor-elemental-chaos.png",
  "features": [{
    "id": 1689,
    "name": "Арканная форма - Пассивно",
    "main_body": "Элементаль обладает [сопротивлением](/rule/resistance) к магическому урону."
  }, {
    "id": 1690,
    "name": "Отравляющий поток - Действие",
    "main_body": "**Отметьте Рану**, чтобы все цели в пределах Средней дистанции [**отметили Стресс** ](/rule/marking-stress) и стали [*Уязвимыми* ](/rule/vulnerable) до следующего отдыха или пока не очистят Рану."
  }, {
    "id": 1691,
    "name": "Преобразовать реальность - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) , чтобы преобразовать область в пределах [близкой](/rule/very-close) дистанции в другую натуральную среду. Все цели в этой области получают **2d6+3** [прямого](/rule/direct-damage) магического урона."
  }, {
    "id": 1692,
    "name": "Магическое отражение - Реакция",
    "main_body": "Когда элементаль получает урон от атаки в пределах Средней дистанции, нанесите ответный урон атакующему, равный половине нанесенного им урона."
  }, {
    "id": 1693,
    "name": "Импульс - Реакция",
    "main_body": "Когда элементаль совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "3",
  "attack_range": "close",
  "damage_type": "magical",
  "damage_bonus": 6,
  "damage_die_size": 12,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 7,
  "difficulty": 14,
  "damage_thresholds": [7, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Малый Элементаль Хаоса",
  "main_body": null,
  "short_description": "Пульсирующая масса неконтролируемой магии, способная нарушать реальность и сеять хаос.\r\n\r\n",
  "type_name": "Одиночка",
  "motives": "Запутывать, дестабилизировать, преобразовать",
  "weapon_name": "Взрыв искривления",
  "experiences": ""
}, {
  "id": 2350,
  "slug": "weaponmaster",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1628,
    "name": "Дразнящий удар - Действие",
    "main_body": "Совершите стандартную атаку против цели. В случае успеха, [**отметьте Стресс** ](/rule/marking-stress) чтобы *Подразнить* цель до ее следующей успешной атаки. В следующий раз, когда *Подразненная* цель атакует, она получает Помеху против всех целей, кроме #{Мастера}# Оружия."
  }, {
    "id": 1629,
    "name": "Всплеск Адреналина - Действие",
    "main_body": "Один раз за сцену, [**потратьте Страх** ](/rule/spending-fear) чтобы снять 2 Раны и 2 Стресса."
  }, {
    "id": 1630,
    "name": "Импульс - Реакция",
    "main_body": "Когда #{Мастер}# Оружия совершает успешную атаку против персонажа игрока, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 12,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 6,
  "difficulty": 14,
  "damage_thresholds": [8, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Мастер Оружия",
  "main_body": null,
  "short_description": "Опытный воин с мечом вдвое больше себя.\r\n\r\n",
  "type_name": "Громила",
  "motives": "Быть первым, выбрать слабого, запугивать",
  "weapon_name": "Клеймор",
  "experiences": ""
}, {
  "id": 2388,
  "slug": "bear",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1732,
    "name": "Переполняющая Сила - Пассивно",
    "main_body": "Цели, которые получают Раны от стандартной атаки Медведя, отбрасываются на [Близкую](/rule/very-close) дистанцию."
  }, {
    "id": 1733,
    "name": "Укус - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы совершить атаку против цели Вплотную. При успехе наносится **3d4+10** физического урона и цель становится [*Обездвиженной* ](/rule/restrained) до тех пор, пока не освободится с помощью успешного [Броска Силы](/rule/strength)."
  }, {
    "id": 1734,
    "name": "Импульс - Реакция",
    "main_body": "Когда Медведь совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 7,
  "difficulty": 14,
  "damage_thresholds": [9, 17],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Медведь",
  "main_body": null,
  "short_description": "Большой медведь с густой шерстью и мощными когтями.",
  "type_name": "Громила",
  "motives": "Лазить, защищать территорию, избивать, преследовать",
  "weapon_name": "Когти",
  "experiences": "Засада +3, Острые чувства +2"
}, {
  "id": 2364,
  "slug": "petty-noble",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1665,
    "name": "Моя земля, мои правила - Пассивно",
    "main_body": "Все социальные действия, совершенные против дворянина на его земле, имеют [помеху](/rule/advantage-and-disadvantage)."
  }, {
    "id": 1666,
    "name": "Стража, схватите их! - Действие",
    "main_body": "Один раз за сцену, [**отметьте Стресс** ](/rule/marking-stress), чтобы вызвать **1d4** [Стражей Мечников](/adversary/bladed-guard), которые появляются на [Далекой](/rule/far) дистанции, чтобы исполнить волю Аристократа."
  }, {
    "id": 1667,
    "name": "Изгнание - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) и выберите цель среди персонажей игроков. Аристократ объявляет, что цель и ее союзники изгнаны с территории аристократа. Во время изгнания цель и ее союзники получают помеху в социальных ситуациях на территории влияния этого аристократа."
  }],
  "attack_bonus": "-3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 5,
  "hp": 3,
  "difficulty": 14,
  "damage_thresholds": [6, 10],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Мелкий Аристократ",
  "main_body": null,
  "short_description": "Щегольски одетый аристократ, полный самодовольства.",
  "type_name": "Социальный",
  "motives": "Злоупотреблять властью, собирать ресурсы, мобилизовать слуг",
  "weapon_name": "Рапира",
  "experiences": "Аристократ +3"
}, {
  "id": 2369,
  "slug": "minor-treant",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "minion",
  "image_url": "/image/adversary/minor-treant.png",
  "features": [{
    "id": 1677,
    "name": "Приспешник (5) - Пассивный",
    "main_body": "Древень побеждён, когда получает любой урон. За каждые 5 единиц урона, нанесённых игроком Древню, уничтожьте дополнительного Приспешника в пределах диапазона, против которого атака будет успешной."
  }, {
    "id": 1678,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы выбрать цель и [активировать](/rule/spotlight) всех Древней в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 1 физическому урону каждая. Объедините этот урон."
  }],
  "attack_bonus": "-2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 10,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Молодой Древень",
  "main_body": null,
  "short_description": "Подвижный саженец, восстающий на защиту леса.",
  "type_name": "Приспешник",
  "motives": "Раздавить, задавить, защитить",
  "weapon_name": "Когтистая ветвь",
  "experiences": ""
}, {
  "id": 2379,
  "slug": "harrier",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1706,
    "name": "Держать дистанцию - Пассивно",
    "main_body": "После совершения стандартной атаки Налётчик может переместиться в любую точку в пределах [Далекой](/rule/far) дистанции."
  }, {
    "id": 1707,
    "name": "Отступление - Реакция",
    "main_body": "Когда существо перемещается Вплотную к Налётчику, чтобы совершить атаку, вы можете [**отметить Стресс** ](/rule/marking-stress) перед броском Атаки, чтобы переместиться в любую точку в пределах Средней дистанции и совершить атаку против этого существа. В случае успеха нанесите **1d10+2** физического урона."
  }],
  "attack_bonus": "1",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 3,
  "difficulty": 12,
  "damage_thresholds": [5, 9],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Налётчик",
  "main_body": null,
  "short_description": "Проворный боец с метательными копьями.",
  "type_name": "Рядовой",
  "motives": "Обходить с фланга, тревожить, выматывать, наживаться",
  "weapon_name": "Метательное копьё",
  "experiences": "Маскировка +2"
}, {
  "id": 2360,
  "slug": "sellsword",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1655,
    "name": "Приспешник (4) - Пассивно",
    "main_body": "Наемник считается побежденным, если он получил любой урон. За каждые 4 единицы урона, нанесенного персонажем наемнику, победите еще одного приспешника в пределах [дистанции](/rule/range), на которой атака была бы успешной."
  }, {
    "id": 1656,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы выбрать цель и [активировать](/rule/spotlight) всех Наемников в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются в зону Вплотную от цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 3 единицы Физического урона. Объедините этот урон."
  }],
  "attack_bonus": "3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 0,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 10,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Наёмник",
  "main_body": null,
  "short_description": "Вооружённый наёмник, испытывающий удачу",
  "type_name": "Приспешник",
  "motives": "Рывок, рвать, задавить, нажиться",
  "weapon_name": "Длинный Меч",
  "experiences": ""
}, {
  "id": 2407,
  "slug": "zombie-pack",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1790,
    "name": "Орда (1d4+2) - Пассивно",
    "main_body": "Когда у Мертвецов отмечены половина или более Ран, их стандартная атака наносит **1d4+2** физического урона."
  }, {
    "id": 1791,
    "name": "Навалиться - Реакция",
    "main_body": "Когда Мертвецы получают Рану в результате атаки от цели Вплотную к ним, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы совершить стандартную атаку против атакующего."
  }],
  "attack_bonus": "-1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 10,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 6,
  "difficulty": 8,
  "damage_thresholds": [6, 12],
  "horde_per_hp": 2,
  "language": "ru",
  "name": "Орда Зомби",
  "main_body": null,
  "short_description": "Толпа мертвецов, идущих на запах живого, как один организм.\r\n\r\n",
  "type_name": "Орда",
  "motives": "Пожирать плоть, голодать, терзать",
  "weapon_name": "Укус",
  "experiences": ""
}, {
  "id": 2387,
  "slug": "cave-ogre",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "solo",
  "image_url": "",
  "features": [{
    "id": 1728,
    "name": "Разгон - Пассивно",
    "main_body": "Вы должны [**потратить Страх** ](/rule/spending-fear) для [активации](/rule/spotlight) Огра. Когда он активирован, он может совершить свою стандартную атаку против всех целей в пределах [дистанции](/rule/range)."
  }, {
    "id": 1729,
    "name": "Костолом - Пассивно",
    "main_body": "Атаки Огра наносят [прямой урон](/rule/direct-damage)."
  }, {
    "id": 1730,
    "name": "Град валунов - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы поднять тяжелые предметы и бросить их во все цели перед Огром в пределах [Далекой](/rule/far) дистанции. Совершите атаку против этих целей. Цели, против которых Огр добился успеха, получают **1d10+2** физического урона. Если он добился успеха против более чем одной цели, вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1731,
    "name": "Бешенство - Реакция",
    "main_body": "Когда Огр отмечает 2 или более Ран, он может впасть в ярость. Переместите Огра в точку в пределах Средней дистанции и нанесите **2d6+3** прямого физического урона всем целям на его пути."
  }],
  "attack_bonus": "1",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 10,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 8,
  "difficulty": 13,
  "damage_thresholds": [8, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Пещерный Огр",
  "main_body": null,
  "short_description": "Огромный гуманоид, считающий всё разумное пищей.",
  "type_name": "Одиночка",
  "motives": "Отрывать головы, пиршествовать, рвать конечности, топтать, кидать врагов",
  "weapon_name": "Булава",
  "experiences": "Метание +2"
}, {
  "id": 2361,
  "slug": "pirate-tough",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1657,
    "name": "Фехтовальщик - Пассивно",
    "main_body": "Когда Здоровяк отмечает 2 или меньше Ран от атаки Вплотную к нему, атакующий должен [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1658,
    "name": "Расчистить палубу - Действие",
    "main_body": "Совершите атаку против цели в пределах [Близкой](/rule/very-close) дистанции. При успехе **отметьте Стресс**, чтобы переместиться Вплотную к цели, нанеся **3d4** физического урона и отбросив цель на [Среднюю](/rule/close) дистанцию."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 0,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 5,
  "difficulty": 13,
  "damage_thresholds": [8, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Пират Громила",
  "main_body": null,
  "short_description": "Мускулистый пират с кулаками размером с дыни.",
  "type_name": "Громила",
  "motives": "Грабить, нападать, крушить, пугать",
  "weapon_name": "Огромные Кулаки",
  "experiences": "Моряк +2"
}, {
  "id": 2362,
  "slug": "pirate-raiders",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1659,
    "name": "Орда (1d4+1) - Пасивно",
    "main_body": "Когда Налётчики отмечают половину или более своего Ран, их стандартная атака наносит **1d4+1** физического урона."
  }, {
    "id": 1660,
    "name": "Фехтовальщик - Пассивно",
    "main_body": "Когда Налётчик отмечает 2 или меньше Ран от атаки Вплотную к нему, атакующий должен [**отметить Стресс** ](/rule/marking-stress)."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 4,
  "difficulty": 12,
  "damage_thresholds": [5, 11],
  "horde_per_hp": 3,
  "language": "ru",
  "name": "Пираты налётчики",
  "main_body": null,
  "short_description": "Морские негодяи, грабящие в стае.",
  "type_name": "Орда",
  "motives": "Объединяться, грабить, нападать",
  "weapon_name": "Сабля",
  "experiences": "Моряк +3"
}, {
  "id": 2385,
  "slug": "courtier",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1721,
    "name": "Насмешка - Действие",
    "main_body": "**Отметьте Стресс*, чтобы сказать что-нибудь насмешливое и заставить цель в пределах [Средней](/rule/close) дистанции совершить [Бросок Реакции](/rule/reaction-roll) на [Влияние](/rule/presence) (14), чтобы увидеть, сможет ли она сохранить лицо. При неудаче цель должна **отметить 2 Стресса** и стать [*Уязвимой* ](/rule/vulnerable) до конца сцены."
  }, {
    "id": 1722,
    "name": "Козёл Отпущения - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) и выберите цель среди персонажей игроков. Придворный убеждает толпу или влиятельного человека, что цель является причиной их текущего конфликта или несчастья."
  }],
  "attack_bonus": "-4",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 3,
  "difficulty": 12,
  "damage_thresholds": [4, 8],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Придворный",
  "main_body": null,
  "short_description": "Амбициозный светский льстец в вычурной одежде.",
  "type_name": "Социальный",
  "motives": "Очернять, заслуживать расположение, маневрировать, интриговать",
  "weapon_name": "Кинжалы",
  "experiences": "Светский лев +3"
}, {
  "id": 2352,
  "slug": "tangle-bramble-swarm",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1634,
    "name": "Орда (1d4+2) - Пассивно",
    "main_body": "Когда Рою нанесли половину или более их Ран, их стандартная атака наносит **1d4+2** физического урона."
  }, {
    "id": 1635,
    "name": "Раздавить - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы нанести **2d6+8** [прямого](/rule/direct-damage) физического урона цели с 3 или более [жетонами](/rule/token) «колючки»."
  }, {
    "id": 1636,
    "name": "Затруднять - Реакция",
    "main_body": "Когда Рой успешно атакует, дайте цели жетон тёрна. Если у цели есть хотя бы один жетон тёрна, она [*Обездвижена* ](/rule/restrained). Если у цели 3 или более жетонов тёрна, она также *[Уязвима](/rule/vulnerable)*. Все жетоны тёрна могут быть удалены при успешном [*Броске Искусности* ](/rule/finesse) (12 + количество жетонов колючек) или нанесении Ощутимого (/rule/major-damage) или большего урона Рою. Если жетоны тёрна сняты с цели с помощью броска на Искусность, в пределах дистанции Вплотную появляется количество [Колючих Тёрнов](/adversary/tangle-bramble), равное количеству снятых жетонов."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 6,
  "difficulty": 12,
  "damage_thresholds": [6, 11],
  "horde_per_hp": 3,
  "language": "ru",
  "name": "Рой Колючих Тёрнов",
  "main_body": null,
  "short_description": "Сгусток оживших кровососущих кустов, размером с большую тыкву",
  "type_name": "Орда",
  "motives": "Переваривать, запутывать, обездвиживать",
  "weapon_name": "Шипы",
  "experiences": "Маскировка +2"
}, {
  "id": 2356,
  "slug": "skeleton-warrior",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "standard",
  "image_url": "/image/adversary/skeleton-warrior.png",
  "features": [{
    "id": 1646,
    "name": "Лишь Кости - Пассивно",
    "main_body": "У воина [сопротивление](/rule/resistance) к физическому урону."
  }, {
    "id": 1647,
    "name": "Не Падёт - Реакция",
    "main_body": "Когда Воин побежден, вы можете его [активировать](/rule/spotlight) и бросить **d6**. При результате 6, если на поле боя есть другие противники, Воин восстанавливается без отмеченных Ран."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 3,
  "difficulty": 10,
  "damage_thresholds": [4, 8],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Скелет Воин",
  "main_body": null,
  "short_description": "Обветренный костлявый боец с потрёпанным мечом, восстающий снова и снова.",
  "type_name": "Рядовой",
  "motives": "Притворяться мёртвым, нападать толпой, красть кожу",
  "weapon_name": "Меч",
  "experiences": ""
}, {
  "id": 2358,
  "slug": "skeleton-dredge",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "minion",
  "image_url": "/image/adversary/skeleton-dredge.png",
  "features": [{
    "id": 1651,
    "name": "Приспешник (4) - Пассивно",
    "main_body": "Гниль побеждена, когда она получает любой урон. За каждые 4 единицы урона, нанесенного Гнили персонажем, победите дополнительного приспешника в пределах дистанции, на которую действует атака."
  }, {
    "id": 1652,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы выбрать цель и [активировать](/rule/spotlight) все Гнили в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 1 физического урону за каждого. Объедините этот урон."
  }],
  "attack_bonus": "-1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 8,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Скелет Гниль",
  "main_body": null,
  "short_description": "Грохочущая куча костей.",
  "type_name": "Приспешник",
  "motives": "Рассыпаться, навалиться числом, притвориться мертвецом, красть кожу",
  "weapon_name": "Костяные когти",
  "experiences": ""
}, {
  "id": 2359,
  "slug": "skeleton-archer",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "ranged",
  "image_url": "/image/adversary/skeleton-archer.png",
  "features": [{
    "id": 1653,
    "name": "Оппортунист - Пассивно",
    "main_body": "Когда два или более противника находятся в пределах [Близкой](/rule/very-close) дистанции от выбранной лучником цели, весь урон, наносимый Лучником этой цели удваивается."
  }, {
    "id": 1654,
    "name": "Смертельный выстрел - Действие",
    "main_body": "Совершите атаку против [*Уязвимой* ](/rule/vulnerable) цели в пределах Далекой дистанции. При успехе, [**отметьте Стресс** ](/rule/marking-stress) для нанесения **3d4+8** физического урона."
  }],
  "attack_bonus": "2",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 3,
  "difficulty": 9,
  "damage_thresholds": [4, 7],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Скелет Лучник",
  "main_body": null,
  "short_description": "Скелет с коротким луком, стрелами и изворотливым прицелом",
  "type_name": "Дальнобойный",
  "motives": "Пробивать отвлёкшихся, притворяться мёртвым, красть кожу",
  "weapon_name": "Короткий лук",
  "experiences": ""
}, {
  "id": 2357,
  "slug": "skeleton-knight",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "bruiser",
  "image_url": "/image/adversary/skeleton-knight.png",
  "features": [{
    "id": 1648,
    "name": "Ужасающее Присутствие - Пассивно",
    "main_body": "Когда Рыцарь совершает успешную атаку, все персонажи в пределах [Средней](/rule/close) дистанции теряют [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1649,
    "name": "Руби До Костей - Действие",
    "main_body": "**Отметьте Стресс**, чтобы совершить атаку против всех целей в пределах [Близкой](/rule/very-close) дистанции. Цели, против которых Рыцарь добился успеха, получают **1d8+2** физического урона и должны **отметить Стресс**."
  }, {
    "id": 1650,
    "name": "Копать Две Могилы - Реакция",
    "main_body": "Когда рыцарь побежден, он совершает атаку против цели в пределах Близкой дистанции (в приоритете — существо, которое его убило). При успехе цель получает **1d4+8** физического урона и теряет **1d4** Надежды."
  }],
  "attack_bonus": "2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 10,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 5,
  "difficulty": 13,
  "damage_thresholds": [7, 13],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Скелет Рыцарь",
  "main_body": null,
  "short_description": "Огромный скелет в тяжёлых доспехах, несущий клинок почти в рост человека.",
  "type_name": "Громила",
  "motives": "Рассекать живых, красть кожу, сеять хаос",
  "weapon_name": "Ржавый Двуручный Меч",
  "experiences": ""
}, {
  "id": 2373,
  "slug": "jagged-knife-sniper",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "ranged",
  "image_url": "",
  "features": [{
    "id": 1694,
    "name": "Незримый выстрел - Пассивно",
    "main_body": "Если Снайпер [*Скрыт* ](/rule/hidden) при совершении успешной стандартной атаки против цели, он наносит **1d10+4** физического урона вместо своего стандартного урона."
  }],
  "attack_bonus": "-1",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 10,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 3,
  "difficulty": 13,
  "damage_thresholds": [4, 7],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Снайпер из «Зазубренного Ножа»",
  "main_body": null,
  "short_description": "Тощий бандит с коротким луком, прячущийся в тенях и бьющий издалека.",
  "type_name": "Дальнобойный",
  "motives": "Засада, укрытие, нажива, смена позиции",
  "weapon_name": "Короткий Лук",
  "experiences": "Скрытность +2"
}, {
  "id": 2396,
  "slug": "village-elder",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1759,
    "name": "Возраст учит - Пассивно",
    "main_body": "Все [броски действия](/rule/action-roll) с целью обмануть Старейшину имеют [помеху](/rule/advantage-and-disadvantage)."
  }, {
    "id": 1760,
    "name": "Без Гостеприимства - Действие",
    "main_body": "**Отметьте стресс**, чтобы запретить любому союзнику Старейшины продавать или оказывать помощь цели или ее союзникам в течение следующих **2d6** дней."
  }, {
    "id": 1761,
    "name": "Пусть будет мир - Реакция",
    "main_body": "Когда существо атакует кого-то в деревне, кого видит Старейшина, вы можете [**потратить 2 Страха**](/rule/spending-fear). Это существо теряет всю [Надежду](/rule/hope), **получает 2d4 Стресса** и должен успешно пройти [Бросок Реакции](/rule/reaction-roll) (15) на [Влияние](/rule/presence), или падает *Без сознания* на **1d4** часов. Пока цель находится *Без сознания*, она не может совершать броски Действия, не может говорить и автоматически проваливает все броски Реакции. После того как Старейшина использует эту реакцию, он больше не может этого сделать."
  }],
  "attack_bonus": "-2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 2,
  "difficulty": 14,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Старейшина Деревни",
  "main_body": null,
  "short_description": "Мудрый старец лесного поселения, владеющий природной магией.",
  "type_name": "Социальный",
  "motives": "Забота о сообществе, судить, говорить тихо, чтить традиции",
  "weapon_name": "Кинжал",
  "experiences": "История +2, Друг природы +3, Опора общины +3"
}, {
  "id": 2354,
  "slug": "swarm-of-rats",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1640,
    "name": "Орда (1d4+1) - Пассивно",
    "main_body": "Когда Стае нанесли половину или более Ран, её стандартная атака наносит **1d4+1** физического урона."
  }, {
    "id": 1641,
    "name": "В Лицо - Пассивно",
    "main_body": "Все цели, находящиеся Вплотную к стае, получают [помеху](/rule/advantage-and-disadvantage) при атаке целей, отличных неё."
  }],
  "attack_bonus": "-3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 6,
  "difficulty": 10,
  "damage_thresholds": [6, 10],
  "horde_per_hp": 10,
  "language": "ru",
  "name": "Стая Крыс",
  "main_body": null,
  "short_description": "Толпа крысиных тел, мчащихся, чтобы загрызть добычу или скрыть союзников.",
  "type_name": "Орда",
  "motives": "Пожирать, заслонять, окружать",
  "weapon_name": "Когти",
  "experiences": ""
}, {
  "id": 2380,
  "slug": "glass-snake",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "standard",
  "image_url": "/image/adversary/glass-snake.png",
  "features": [{
    "id": 1708,
    "name": "Осколки, рвущие доспех - Пассивно",
    "main_body": "После успешной атаки [Вплотную](/rule/melee) против Змеи, атакующий должен отметить [Ячейку Брони](/rule/armor-slot). Если он не может отметить Ячейку Брони, он отмечает Рану."
  }, {
    "id": 1709,
    "name": "Вихрь змеи - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы совершить атаку против всех целей в пределах Близкой дистанции . Цели, против которых Змея преуспела, получают **1d6+1** физического урона."
  }, {
    "id": 1710,
    "name": "Плевок - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы ввести **d6** Кость Плевка. Когда Змея [активирована](/rule/spotlight), бросьте эту кость. При результате 5 или выше, все цели перед Змеёй в пределах [Далекой](/rule/far) дистанции должны успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) или получить **1d4** физического урона. Змея может быть активирована во второй раз в этом ходу Мастера."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 5,
  "difficulty": 14,
  "damage_thresholds": [6, 10],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Стеклянная Змея",
  "main_body": null,
  "short_description": "Прозрачная змея с огромной головой, оставляющая за собой стеклянные осколки",
  "type_name": "Рядовой",
  "motives": "Лазать, кормиться, держать дистанцию, пугать",
  "weapon_name": "Стеклянные клыки",
  "experiences": ""
}, {
  "id": 2378,
  "slug": "archer-guard",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "ranged",
  "image_url": "",
  "features": [{
    "id": 1705,
    "name": "Выстрел в Колено - Действие",
    "main_body": "Совершите атаку против цели в пределах Далекой дистанции. При успехе, [**отметьте Стресс** ](/rule/marking-stress) для нанесения **1d12+3** физического урона. Если цель отмечает Рану от этой атаки, она получает [помеху](/rule/advantage-and-disadvantage) на [Броски Проворности](/rule/agility) до тех пор, пока не очистит как минимум 1 Рану."
  }],
  "attack_bonus": "1",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 3,
  "difficulty": 10,
  "damage_thresholds": [4, 8],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Стражник-Лучник",
  "main_body": null,
  "short_description": "Высокий стражник с длинным луком и колчаном со стрелами, оперенными в цвета поселения.",
  "type_name": "Дальнобойный",
  "motives": "Арест, закрытие ворот, выжить, прижимать",
  "weapon_name": "Длинный лук",
  "experiences": "Местные знания +3"
}, {
  "id": 2393,
  "slug": "bladed-guard",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1748,
    "name": "Стена щитов - Пассивно",
    "main_body": "Существо, пытающееся приблизиться к Стражнику на [Близкое](/rule/very-close) расстояние, должно успешно выполнить [Проверку Проворности](/rule/agility). Если рядом с первым Стражником стоят другие Стражники-Мечники, и каждый из них находится Вплотную друг к другу в одной шеренге, [Сложность](/rule/difficulty) увеличивается на общее количество Стражников в этой линии."
  }, {
    "id": 1749,
    "name": "Задержание - Действие",
    "main_body": "Совершите атаку против цели, находящейся на Близкой дистанции. При успехе, [**отметьте Стресс** ](/rule/marking-stress) и [*Обездвижьте* ](/rule/restrained) цель, пока она не освободится с помощью успешной атаки, [Броска Искусности](/rule/finesse) или [Броска Силы](/rule/strength)."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 5,
  "difficulty": 12,
  "damage_thresholds": [5, 9],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Стражник-Мечник",
  "main_body": "Бронированный стражник с мечом и щитом, окрашенными в цвета поселения.",
  "short_description": "Бронированный стражник с мечом и щитом, окрашенными в цвета поселения.",
  "type_name": "Рядовой",
  "motives": "Арестовывать, закрывать ворота, дожить до вечера, прижимать к стенке",
  "weapon_name": "Длинный Меч",
  "experiences": "Местные знания +3"
}, {
  "id": 2399,
  "slug": "jagged-knife-shadow",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1768,
    "name": "Удар в спину - Пассивно",
    "main_body": "Если Тень успешно выполняет стандартную атаку, которая имеет [преимущество](/rule/advantage-and-disadvantage), она наносит **1d6+6** физического урона вместо своего стандартного урона."
  }, {
    "id": 1769,
    "name": "Покров Теней - Действие",
    "main_body": "Станьте [*Скрытым* ](/rule/hidden) до следующей атаки Тенью. Атаки, совершенные будучи *Скрытым* из-за этого свойства, имеют преимущество."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 3,
  "difficulty": 12,
  "damage_thresholds": [4, 8],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Тень из «Зазубренного Ножа»",
  "main_body": null,
  "short_description": "Юркий головорез с проклятым клинком и чарами, что отрывают цель от союзников.\r\n",
  "type_name": "Скрытный",
  "motives": "Засада, сокрытие, изоляция, нажива",
  "weapon_name": "Кинжалы",
  "experiences": "Внедрение +3"
}, {
  "id": 2404,
  "slug": "briarwhip",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1782,
    "name": "Свирепая защита - Пассивно",
    "main_body": "Когда атака Тернового Хлыста наносит урон по цели, тот получает бонус +1 к [Сложности](/rule/difficulty), пока он не отметит себе 1 или более Ран."
  }, {
    "id": 1783,
    "name": "В Чащу - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) для активации до 1d4 союзников в пределах [Далекой](/rule/far) дистанции. Они перемещаются в укрытие в пределах [Средней](/rule/close) дистанции и становятся [*Скрытыми* ](/rule/hidden) до тех пор, пока не будет выполнена их следующая атака или персонаж не успешно выполнит [Бросок Инстинкта](/rule/instinct), чтобы их обнаружить."
  }, {
    "id": 1784,
    "name": "Подготовка - Реакция",
    "main_body": "Когда Терновый Хлыст отмечает 1 или более Ран, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы отметить на 1 меньше Ран."
  }],
  "attack_bonus": "3",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 10,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 6,
  "difficulty": 14,
  "damage_thresholds": [9, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Терновый Хлыст",
  "main_body": "Хитрый и способный рейнджер, который берется за самые опасные миссии.",
  "short_description": "Хитрый следопыт, берущийся за опасные задания.\r\n\r\n",
  "type_name": "Лидер",
  "motives": "Исследовать, планировать, защищать, красть",
  "weapon_name": "Ядовитый Терновый Хлыст",
  "experiences": "Маскировка +2, Запугивание +2, Следопыт +3"
}, {
  "id": 2397,
  "slug": "merchant",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1762,
    "name": "Привилегии - Пассивно",
    "main_body": "Персонаж, который успешно прошел Проверку на [Влияние](/rule/presence) против Торговца, получает скидку на покупки. Персонаж, который провалил Проверку на Влияние против Торговца, должен заплатить больше и получает [Помеху](/rule/advantage-and-disadvantage) на будущие Проверки на Влияние против Торговца."
  }, {
    "id": 1763,
    "name": "Отговорки - Пассивно",
    "main_body": "Когда персонаж игрока бросает 14 или меньше на броске Влияния, совершенном против Торговца, он должен [**отметить Стресс** ](/rule/marking-stress)."
  }],
  "attack_bonus": "-4",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 3,
  "difficulty": 12,
  "damage_thresholds": [4, 8],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Торговец",
  "main_body": null,
  "short_description": "Изысканный купец с острым глазом на прибыль.",
  "type_name": "Социальный",
  "motives": "Купить дешево, продать дорого, создавать спрос, нагнетать цены",
  "weapon_name": "Дубинка",
  "experiences": "Проницательный переговорщик +3"
}, {
  "id": 2375,
  "slug": "jagged-knife-lackey",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1699,
    "name": "Приспешник (3) - Пассивно",
    "main_body": "Шестёрка побеждена, когда получает любой урон. За каждые 3 единицы урона, нанесенного Шестёрке, победите дополнительного Приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1700,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы выбрать цель и [активировать](/rule/spotlight) всех Шестёрок «Зазубренного Ножа» в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 2 единицы физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "-2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 9,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Шестёрка из «Зазубренного Ножа»",
  "main_body": null,
  "short_description": "Молодой вор с простым оружием и рвением к признанию.",
  "type_name": "Приспешник",
  "motives": "Побег, нажива, дымовая завеса",
  "weapon_name": "Кинжалы",
  "experiences": "Воровство +2"
}, {
  "id": 2349,
  "slug": "young-dryad",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 1,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1625,
    "name": "Голос Леса - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) для [активации](/rule/spotlight) **1d4** союзников в пределах [дистанции](/rule/range) цели, которую они могут атаковать без перемещения. При успехе их атаки наносят половину урона."
  }, {
    "id": 1626,
    "name": "Терновая Клетка - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы сформировать клетку вокруг цели в пределах [Близкой](/rule/very-close) дистанции и [*Обездвижить* ](/rule/restrained) ее до тех пор, пока она не будет освобождена успешным [Броском Силы](/rule/strength). Когда существо совершает бросок действия против клетки, она должна **отметить Стресс**."
  }, {
    "id": 1627,
    "name": "Импульс - Реакция",
    "main_body": "Когда Дриада совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 5,
  "damage_die_size": 8,
  "damage_die_count": 1,
  "stress": 2,
  "hp": 6,
  "difficulty": 11,
  "damage_thresholds": [6, 11],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Юная Дриада",
  "main_body": null,
  "short_description": "Властная лесная сущность, ведёт защиту своего леса.\r\n\r\n",
  "type_name": "Лидер",
  "motives": "Командовать, взращивать, нарезать неприглашенных",
  "weapon_name": "Серп",
  "experiences": "Лидерство +3"
}, {
  "id": 2391,
  "slug": "cult-adept",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "support",
  "image_url": "",
  "features": [{
    "id": 1742,
    "name": "Ослабляющий взрыв - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы совершить стандартную атаку против цели в пределах [дистанции](/rule/range). В случае успеха цель должна [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1743,
    "name": "Покров павших - Действие",
    "main_body": "**Отметьте Стресс**, чтобы обернуть союзника в пределах [Средней](/rule/close) дистанции покровом *Защиты*, пока Адепт не отметит свою последнюю Рану. Пока цель находится под действием *Защиты*, она имеет [устойчивость](/rule/resistance) ко всему урону."
  }, {
    "id": 1744,
    "name": "Теневые оковы - Действие",
    "main_body": "**Потратьте Страх** и выберите точку в пределах Далекой дистанции. Все цели в пределах Средней дистанции от этой точки [*Обездвижены* ](/rule/restrained) в дымящихся цепях, пока не освободятся с помощью успешного броска [Силы](/rule/strength) или [Инстинкта](/rule/instinct). Цель, *Обездвиженная* этим свойством, должна потратить [Надежду](/rule/hope), чтобы совершить бросок действия."
  }, {
    "id": 1745,
    "name": "Страх есть Толпиво - Реакция",
    "main_body": "Дважды за сцену, когда персонаж игрока совершает неудачный бросок со [Страхом](/rule/fear), снимите один Стресс."
  }],
  "attack_bonus": "2",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 3,
  "damage_die_size": 4,
  "damage_die_count": 2,
  "stress": 6,
  "hp": 4,
  "difficulty": 14,
  "damage_thresholds": [9, 18],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Адепт Культа",
  "main_body": null,
  "short_description": "Опытный маг, владеющий тенью и страхом.",
  "type_name": "Поддержка",
  "motives": "Получить благосклонность, мешать врагам, открывать знания",
  "weapon_name": "Рунный жезл",
  "experiences": "Запретное знание +2, Ритуалы +2"
}, {
  "id": 2319,
  "slug": "shark",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1538,
    "name": "Ужасающий - Пассивный",
    "main_body": "Когда Акула совершает успешную атаку, все персонажи игроков в пределах [Далекой](/rule/far) дистанции теряют [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1539,
    "name": "Разрывающий Укус - Пассивный",
    "main_body": "Когда Акула совершает успешную атаку, цель должна отметить [Ячейку Брони](/rule/armor-slot) без получения ее преимуществ (она все еще может использовать броню для уменьшения урона). Если она не может отметить Ячейку Брони, она должна отметить дополнительную Рану."
  }, {
    "id": 1540,
    "name": "Кровь в Воде - Реакция",
    "main_body": "Когда существо в пределах [Средней](/rule/close) дистанции от Акулы получает Рану от атаки другого существа, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы немедленно [активировать](/rule/spotlight) Акулу, переместив её [Вплотную](/rule/melee) к цели и совершив стандартную атаку."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 12,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 7,
  "difficulty": 14,
  "damage_thresholds": [14, 28],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Акула",
  "main_body": null,
  "short_description": "Крупный водный хищник, всегда находится в движении.",
  "type_name": "Громила",
  "motives": "Найти кровь, изолировать добычу, предпочитать слабых",
  "weapon_name": "Зубастая пасть",
  "experiences": "Обоняние +3"
}, {
  "id": 2340,
  "slug": "battle-box",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "solo",
  "image_url": "/image/adversary/battle-box.png",
  "features": [{
    "id": 1598,
    "name": "Неумолимый (2) - Пассивный",
    "main_body": "Куб может быть активирован до двух раз за ход Мастера. Для активации потратьте Страх как обычно."
  }, {
    "id": 1599,
    "name": "Случайные тактики - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) и бросьте **d6**. Куб использует соответствующее движение:\r\n\r\n- **Луч Маны.** Куб выпускает обжигающий луч. Совершите атаку против цели в пределах [Далекой](/rule/far) дистанции. При успехе нанесите **2d10+2** урона магией.\r\n\r\n- **Огненные струи.** Куб взмывает в воздух, вращаясь и выпуская струи пламени. Совершите атаку против всех целей в пределах [Близкой](/rule/close) дистанции. Цели, против которых Куб преуспел, получают **2d8** физического урона.\r\n\r\n- **Раздавить.** Куб летит по непредсказуемой траектории. Совершите атаку против всех персонажей в пределах Средней дистанции . Цели, против которых Куб успешно совершил атаку, получают **1d6+5** физического урона и становятся [*Уязвимыми* ](/rule/vulnerable) до следующего броска с [Надеждой](/rule/hope).\r\n\r\n- **Шокирующий Газ.** Куб распыляет серебристый газ, искрящийся молниями. Все цели в пределах Средней дистанции должны успешно выполнить [Бросок Реакции](/rule/finesse) на [Искусность](/rule/finesse) или отметить 3 Стресса.\r\n \r\n- **Оглушающий хлопок.** Куб подпрыгивает, и его боковые стороны хлопают, создавая небольшой звуковой взрыв. Все цели в пределах [Близкой](/rule/very-close) дистанции должны успешно совершить Бросок Реакции на Силу или стать *Уязвимыми* до тех пор, пока куб не будет побежден.\r\n\r\n- **Псионический Визг.** Куб выпускает рой механических пчел, чей гул оглушает смертных. Все цели в пределах Средней дистанции должны успешно выполнить Бросок Реакции на [Силу](/rule/presence) или получить **2d4+9** [прямого](/rule/direct-damage) магического урона."
  }, {
    "id": 1600,
    "name": "Перегрузка - Реакция",
    "main_body": "Перед броском урона вы можете **отметить Стресс**, чтобы добавить **d6** к броску урона. Кроме того, вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1601,
    "name": "Смертельная Дрожь - Реакция",
    "main_body": "Когда Куб отмечает свою последнюю Рану, магия, питающая его, разрывается в могучем взрыве. Все цели в пределах Средней дистанции должны успешно выполнить Бросок Реакции на [Инстинкт](/rule/instinct) или получить **2d8+1** урона от магии."
  }],
  "attack_bonus": "2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 6,
  "hp": 8,
  "difficulty": 15,
  "damage_thresholds": [10, 20],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Боевой Куб",
  "main_body": null,
  "short_description": "Кубическая конструкция с разными рунами на каждой из шести граней.",
  "type_name": "Одиночка",
  "motives": "Менять тактику, давить врагов, ждать в засаде",
  "weapon_name": "Удар",
  "experiences": "Камуфляж +2"
}, {
  "id": 2401,
  "slug": "war-wizard",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "ranged",
  "image_url": "/image/adversary/war-wizard.png",
  "features": [{
    "id": 1773,
    "name": "Боевая Телепортация - Пассивный",
    "main_body": "Перед или после совершения стандартной атаки вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы телепортироваться в место в пределах Далёкой дистанции."
  }, {
    "id": 1774,
    "name": "Обновление защитной сферы - Действие",
    "main_body": "**Отметить Стресс**, чтобы обновить реакцию «Защитная Сфера» Мастера."
  }, {
    "id": 1775,
    "name": "Извержение - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) и выберите точку в пределах Далекой дистанции. Вся область, находящаяся в пределах [Близкой](/rule/very-close) дистанции от этой точки превращается в непроходимую местность. Все цели в этой области должны совершить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) (14). Цели, провалившие бросок, получают **2d10** физического урона и выбрасываются из области. Цели, прошедшие бросок, получают половину урона и не перемещаются."
  }, {
    "id": 1776,
    "name": "Мистическая артиллерия - Действие",
    "main_body": "**Потратьте Страх**, чтобы вызвать точный град магических взрывов. Все цели в сцене должны совершить Бросок Реакции на Проворность. Цели, провалившие бросок, получают **2d12** урона от магии. Цели, прошедшие бросок, получают половину урона."
  }, {
    "id": 1777,
    "name": "Защитная Сфера - Реакция",
    "main_body": "Когда волшебник получает урон от атаки в пределах [Средней](/rule/close) дистанции, нанесите нападающему **2d6** урона магией. Эта реакция не может быть использована снова, пока маг не обновит ее с помощью действия «Обновить защитную сферу»."
  }],
  "attack_bonus": "4",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 4,
  "damage_die_size": 10,
  "damage_die_count": 2,
  "stress": 6,
  "hp": 5,
  "difficulty": 16,
  "damage_thresholds": [11, 23],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Боевой Маг",
  "main_body": null,
  "short_description": "Закаленный в боях маг, обученный разрушительной магии.",
  "type_name": "Дальнобойный",
  "motives": "Разрабатывать новые заклинания, Искать силу, разрушать формации",
  "weapon_name": "Посох",
  "experiences": "Магические знания +2, Стратегия +2"
}, {
  "id": 2329,
  "slug": "giant-brawler",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "bruiser",
  "image_url": "/image/adversary/giant-brawler.png",
  "features": [{
    "id": 1571,
    "name": "Таран - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы Боец бросился на неодушевленный объект в пределах [Средней](/rule/close) дистанции, который он может разбить (например, стену, тележку или рыночный прилавок), и уничтожил его. Все цели в пределах близкой Дистанции от объекта должны успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) или получить **2d4+3** физического урона от осколков."
  }, {
    "id": 1572,
    "name": "Кровавая расправа - Реакция",
    "main_body": "Когда Боец отмечает 2 или более Ран от атаки, исходящей в пределах Близкой дистанции, вы можете совершить стандартную атаку против нападающего. При успехе Боец наносит **2d6+15** физического урона вместо своего стандартного урона."
  }, {
    "id": 1573,
    "name": "Импульс - Реакция",
    "main_body": "Когда Боец совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 12,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 7,
  "difficulty": 15,
  "damage_thresholds": [14, 28],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Великан Боец",
  "main_body": null,
  "short_description": "Невероятно мускулистый великан, вооруженный боевым молотом, превосходящим по размеру человека.",
  "type_name": "Громила",
  "motives": "Зарабатывать на жизнь, подавлять, сбивать с ног, свергать",
  "weapon_name": "Боевой Молот",
  "experiences": "Вторжение +2"
}, {
  "id": 2330,
  "slug": "giant-beastmaster",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1574,
    "name": "Двое за Одного - Пассивный",
    "main_body": "Когда Укротитель активируется, вы также можете [активировать](/rule/spotlight) животного-противника 1-го ранга, находящегося под его контролем."
  }, {
    "id": 1575,
    "name": "Сковывающий Удар - Действие",
    "main_body": "Совершите стандартную атаку против цели. В случае успеха вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы прижать цель к ближайшей поверхности. Прижатая цель [*Обездвижена* ](/rule/restrained) до тех пор, пока не освободится с помощью успешного броска [Искусности](/rule/finesse) или [Силы](/rule/strength)."
  }, {
    "id": 1576,
    "name": "Смертельный компаньон - Действие",
    "main_body": "Дважды за сцену призовите [Медведя](/adversary/bear), [Лютоволка](/adversary/dire-wolf) или другого животного-противника 1-го ранга под контролем Укротителя. Противник появляется на [Средней](/rule/close) дистанции и сразу активируется."
  }],
  "attack_bonus": "2",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 5,
  "hp": 6,
  "difficulty": 16,
  "damage_thresholds": [12, 24],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Великан Укротитель Зверей",
  "main_body": null,
  "short_description": "Одетый в кожу воин, вооружённый кнутом и массивным луком",
  "type_name": "Лидер",
  "motives": "Командовать, зарабатывать на жизнь, маневрировать, прижимать, защищать животных-спутников",
  "weapon_name": "Длинный Лук",
  "experiences": "Уход за Животными +3"
}, {
  "id": 2324,
  "slug": "masked-thief",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1554,
    "name": "Быстрые руки - Действие",
    "main_body": "Совершите атаку против цели Вплотную. При успехе нанесите **1d8+2** физического урона, и вор украдет один предмет или [потребляемый предмет](/rule/consumable) из инвентаря цели."
  }, {
    "id": 1555,
    "name": "План Побега - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы раскрыть ловушку, установленную где-либо на поле боя Вором. Все цели в пределах [Близкой](/rule/very-close) дистанции от ловушки должны успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) (13) или быть сбиты с ног и подвешены вниз головой. Цель [*Обездвижена* ](/rule/restrained) и [*Уязвима* ](/rule/vulnerable) до тех пор, пока не освободится, прекратив оба состояния сразу, успешным броском [Искусности](/rule/finesse) или [Силы](/rule/strength) (13)."
  }],
  "attack_bonus": "3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 5,
  "hp": 4,
  "difficulty": 14,
  "damage_thresholds": [8, 17],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Вор в Маске",
  "main_body": null,
  "short_description": "Хитрый вор с акробатическими навыками и склонностью к драматизму.",
  "type_name": "Скрытный",
  "motives": "Уклоняться, прятаться, воровать, наживаться",
  "weapon_name": "Палаш",
  "experiences": "Акробатика +3"
}, {
  "id": 2328,
  "slug": "giant-recruit",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1569,
    "name": "Приспешник (7) - Пассивный",
    "main_body": "Новобранец считается побежденным, если он получил любой урон. За каждые 7 урона, нанесенного персонажем новобранцу, победите еще одного приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1570,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы выбрать цель и [активировать](/rule/spotlight) всех Гигантов Новобранцев в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются [Вплотную](/rule/melee) к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 5 единиц физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "1",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 5,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 2,
  "hp": 1,
  "difficulty": 13,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Гигант Новобранец",
  "main_body": null,
  "short_description": "Гигантский боец в одолженных доспехах.",
  "type_name": "Приспешник",
  "motives": "Избивать, зарабатывать на жизнь, подавлять, пугать",
  "weapon_name": "Боевой Молот",
  "experiences": ""
}, {
  "id": 2326,
  "slug": "gorgon",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "solo",
  "image_url": "/image/adversary/gorgon.png",
  "features": [{
    "id": 1560,
    "name": "Неумолимый (2) - Пассивный",
    "main_body": "Горгона может быть активирована до двух раз за ход Мастера. Для активации тратьте Страх как обычно."
  }, {
    "id": 1561,
    "name": "Солнечные Стрелы - Пассивный",
    "main_body": "Когда Горгона совершает успешную стандартную атаку, цель *Светится* до конца сцены и не может стать [*Скрытой* ](/rule/hidden). Броски Атаки, совершенные против *Светящейся* цели, имеют преимущество."
  }, {
    "id": 1562,
    "name": "Венец из Змей - Действие",
    "main_body": "Совершите [бросок атаки](/rule/attack-roll) против цели [Вплотную](/rule/melee) к вам, используя защитные змеи Горгоны. При успехе [**отметьте Стресс** ](/rule/marking-stress), чтобы нанести **2d10+4** физического урона, и цель должна **отметить Стресс**."
  }, {
    "id": 1563,
    "name": "Окаменяющий Взгляд - Реакция",
    "main_body": "Когда Горгона получает урон от атаки в пределах [Средне](/rule/close) дистанции, вы можете **потратить Страх**, чтобы заставить атакующего совершить [Бросок Реакции](/rule/reaction-roll) на [Инстинкт](/rule/instinct). При неудачном броске он начинает превращаться в камень, получая Рану и запуская Отсчёт до Окаменения (4). Этот [отсчёт](/rule/countdown) уменьшается при каждой атаке Горгоны. Когда он достигает нуля, цель должна совершить [Предсмертный Ход](/rule/death-move). Если Горгона побеждена, все отсчёты до окаменения заканчиваются."
  }, {
    "id": 1564,
    "name": "Импульс - Реакция",
    "main_body": "Когда Горгона совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "4",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 20,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 9,
  "difficulty": 15,
  "damage_thresholds": [13, 25],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Горгона",
  "main_body": null,
  "short_description": "Человекоподобное существо с головой змеи и чешуей, вооруженное позолоченным луком, разъяренное тем, что его покой был нарушен.",
  "type_name": "Одиночка",
  "motives": "Прятаться за угол, бить и убегать, превращать в камень, искать мести",
  "weapon_name": "Солнечный Короткий Лук",
  "experiences": "Скрытность +3"
}, {
  "id": 2394,
  "slug": "malefacted-giant",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "solo",
  "image_url": "",
  "features": [{
    "id": 1750,
    "name": "Узри свой конец - Пассивный",
    "main_body": "Прежде чем персонаж совершит [бросок действия](/rule/action-roll), который повлияет на Великана, он должен совершить [Бросок Реакции](/rule/reaction-roll) на [Знание](/rule/knowledge). При провале персонаж теряет [Надежду](/rule/hope). При успехе персонаж навсегда теряет влияние этого свойства."
  }, {
    "id": 1751,
    "name": "Крик в пустоту - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы издать психический крик. Все цели в пределах Средней дистанции должны успешно пройти Бросок Реакции на [Влияние](/rule/presence) или получить **3d10** [прямого](/rule/direct-damage) магического урона и [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1752,
    "name": "Разрушитель разума - Действие",
    "main_body": "Совершите стандартную атаку. В случае успеха, **отметьте Стресс**, чтобы добавить **d8** к [броску урона](/rule/damage-roll). Если цель получает [Рану](/rule/hit-points) от этой атаки, она получает [помеху](/rule/advantage-and-disadvantage) на свой следующий бросок действия."
  }, {
    "id": 1753,
    "name": "Всеобъемлющий страх - Реакция",
    "main_body": "*Отсчёт (Цикл 1d4)*. Когда Великан впервые видит враждебную цель, активируйте отсчёт. Он уменьшается, когда персонаж бросает кубик со [Страхом](/rule/fear). Когда отсчёт заканчивается, Великан совершает стандартную атаку против трёх целей в пределах Средней дистанции. Цели, против которых Великан преуспел, теряют одну Надежду."
  }, {
    "id": 1754,
    "name": "Отвергнуть реальность - Реакция",
    "main_body": "Когда существо в пределах [Далекой](/rule/far) дистанции от Великана выполняет бросок действия с критическим успехом, Великан снимает весь [Стресс](/rule/stress)."
  }],
  "attack_bonus": "3",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 12,
  "damage_die_count": 2,
  "stress": 5,
  "hp": 10,
  "difficulty": 15,
  "damage_thresholds": [16, 26],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Искажённый Гигант",
  "main_body": null,
  "short_description": "Гигантский гуманоид, сделанный из скрученного металла и расплавленной плоти, слитых вместе неестественным образом.",
  "type_name": "Одиночка",
  "motives": "Собирать секреты, разрывать реальность, менять судьбу",
  "weapon_name": "Извивающиеся конечности",
  "experiences": ""
}, {
  "id": 2313,
  "slug": "stonewraith",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "skulk",
  "image_url": "/image/adversary/stonewraith.png",
  "features": [{
    "id": 1522,
    "name": "Каменный Хищник - Пассивный",
    "main_body": "Каменный призрак может проходить сквозь камень и землю так же легко, как сквозь воздух. Находясь внутри камня или земли, он [*Скрыт* ](/rule/hidden) и [невосприимчив](/rule/immunity) ко всему урону."
  }, {
    "id": 1523,
    "name": "Каменная засада - Действие",
    "main_body": "Пока Призрак *Скрыт*, [**отметьте Стресс** ](/rule/marking-stress) чтобы прыгнуть в пределах [Близкой](/rule/very-close) дистанции Вплотную к цели. Цель должна успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) или [Инстинкт](/rule/instinct) (15) или получить **2d8** физического урона и временно стать [*Обездвиженной* ](/rule/restrained)."
  }, {
    "id": 1524,
    "name": "Рев лавины - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы зарычать в пещере и вызвать обвал. Все цели в пределах [Средней](/rule/close) дистанции должны успешно выполнить Бросок Реакции на Проворность (14) или получить **2d10** физического урона. Обломки можно убрать с помощью Отсчёта (Прогресс 8)"
  }, {
    "id": 1525,
    "name": "Импульс - Реакция",
    "main_body": "Когда Каменный Призрак совершает успешную атаку против персонажа игрока, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 6,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 6,
  "difficulty": 13,
  "damage_thresholds": [11, 22],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Каменный Призрак",
  "main_body": null,
  "short_description": "Скрытный охотник, подобный крадущейся пуме, с телом цвета серого камня.",
  "type_name": "Скрытный",
  "motives": "Защищать территорию, изолировать добычу, преследовать",
  "weapon_name": "Клыки и Когти",
  "experiences": "Чувство камня +3"
}, {
  "id": 2336,
  "slug": "cult-fang",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1589,
    "name": "Объятие тени - Пассивный",
    "main_body": "Клык может лазать и ходить по вертикальным поверхностям. [**Отметьте Стресс** ](/rule/marking-stress) для перемещения из одной тени в другую в пределах [Далекой](/rule/far) дистанции."
  }, {
    "id": 1590,
    "name": "Устранить Отстающих - Действие",
    "main_body": "**Отметьте Стресс**, чтобы заставить цель Вплотную к вам совершить [Бросок Реакции](/rule/reaction-roll) на [Инстинкт](/rule/instinct). При провале цель должна отметить 2 Стресса и телепортироваться с Клыком в тень в пределах Далекой дистанции, и стать [*Уязвимой* ](/rule/vulnerable). При успехе цель должна **отметить Стресс**."
  }],
  "attack_bonus": "2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 4,
  "difficulty": 15,
  "damage_thresholds": [9, 17],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Клык Культа",
  "main_body": null,
  "short_description": "Профессиональный убийца, ставший сектантом.",
  "type_name": "Скрытный",
  "motives": "Захватить жертвы, изолировать добычу, подниматься в рангах",
  "weapon_name": "Длинный Нож",
  "experiences": ""
}, {
  "id": 2321,
  "slug": "royal-advisor",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1545,
    "name": "Разрушительный ответ - пассивный",
    "main_body": "Игрок, сделавший [бросок действия](/rule/action-roll) против Советника меньше 17, должен [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1546,
    "name": "Шепнуть на Ушко - Действие",
    "main_body": "**Отметить Стресс**, чтобы повлиять на неигрового персонажа [Вплотную](/rule/melee) к советнику с помощью шепота. Мнение цели по одному вопросу смещается в сторону предпочтений Советника, если это не противоречит мотивам цели."
  }, {
    "id": 1547,
    "name": "Козёл Отпущения - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы убедить толпу или известного человека в том, что один человек или группа людей ответственны за проблему, с которой столкнулась цель. Цель становится враждебной по отношению к козлу отпущения, пока не убедится в его невиновности с помощью успешного [броска на Влияние](/rule/presence) (17)."
  }],
  "attack_bonus": "-3",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 3,
  "difficulty": 14,
  "damage_thresholds": [8, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Королевский Советник",
  "main_body": null,
  "short_description": "Высокопоставленный придворный, имеющий влияние на местную знать.",
  "type_name": "Социальный",
  "motives": "Потакать, сфабриковать улики, строить козни",
  "weapon_name": "Волшебная Палочка",
  "experiences": "Администрирование +3, Придворный +3"
}, {
  "id": 2320,
  "slug": "secret-keeper",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1541,
    "name": "Лови Момент - Действие",
    "main_body": "[**Потратьте 2 Страха** ](/rule/spending-fear) на [активацию](/rule/spotlight) **1d4** союзников. Атаки, которые они совершают, находясь в состоянии активации, наносят половину урона."
  }, {
    "id": 1542,
    "name": "Воля нашего Господина - Реакция",
    "main_body": "Когда вы активируете союзника в пределах Далекой дистанции, [**отметьте Стресс** ](/rule/marking-stress) для получения [Страха](/rule/fear)."
  }, {
    "id": 1543,
    "name": "Ритуал Призыва - Реакция",
    "main_body": "*Отсчёт (6)*. Когда Хранитель Тайн впервые активирован, активируйте [отсчёт](/rule/countdown). Когда он отмечает Рану, уменьшите отсчёт на количество отмеченных Ран. Когда отсчёт завершён, вызовите [Малого Демона](/adversary/minor-demon), который появляется на [Средней](/rule/close) дистанции."
  }, {
    "id": 1544,
    "name": "Адские Псы - Реакция",
    "main_body": "Один раз за сцену, когда Хранитель Тайн имеет 2 или более отмеченных Ран, вы можете **отметить Стресс**, чтобы вызвать [Стаю Адских Псов](/adversary/demonic-hound-pack), которая появляется на Средней дистанции и сразу активируется."
  }],
  "attack_bonus": "3",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 0,
  "damage_die_size": 12,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 7,
  "difficulty": 16,
  "damage_thresholds": [13, 26],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Культист - Хранитель Тайн",
  "main_body": null,
  "short_description": "Тайный лидер, имеющий прямой контакт связи с Падшими Богами.",
  "type_name": "Лидер",
  "motives": "Накопить огромную силу, строить планы, взять командование в свои руки",
  "weapon_name": "Посох с Печатью",
  "experiences": "Принуждение +2, Запретное знание +2"
}, {
  "id": 2337,
  "slug": "courtesan",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1591,
    "name": "Обжигающий Взгляд - Реакция",
    "main_body": "Когда персонаж в пределах Средней дистанции совершает [Бросок Влияния](/rule/presence), вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы предугадать последствия. При неудаче цели, она должна отметить 2 Стресса и стать [*Уязвимой* ](/rule/vulnerable) до конца сцены или до успешного социального действия против Куртизанки. При успехе цели, она должна **отметить Стресс**."
  }],
  "attack_bonus": "-3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 4,
  "damage_die_count": 1,
  "stress": 4,
  "hp": 3,
  "difficulty": 13,
  "damage_thresholds": [7, 13],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Куртизанка",
  "main_body": null,
  "short_description": "Искушенный манипулятор и мастер социальных искусств.",
  "type_name": "Социальный",
  "motives": "Привлекать, маневрировать, удерживать клиентов",
  "weapon_name": "Кинжал",
  "experiences": "Манипуляция +3, Общительность +3"
}, {
  "id": 2409,
  "slug": "minotaur-wrecker",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "bruiser",
  "image_url": "/image/adversary/minotaur-wrecker.png",
  "features": [{
    "id": 1794,
    "name": "Ускорение - Пассивный",
    "main_body": "Вы должны [**потратить Страх** ](/rule/spending-fear) для [активации](/rule/spotlight) Минотавра. Пока он активирован, он может совершить свою стандартную атаку против всех целей в пределах [дистанции](/rule/range)."
  }, {
    "id": 1795,
    "name": "Атакующий Бык - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы прорваться через группу в пределах [Средней](/rule/close) дистанции и совершить атаку против всех целей на пути Минотавра. Цели, против которых Минотавр добился успеха, получают **2d6+8** физического урона и отбрасываются на [Очень Далекую](/rule/very-far) дистанцию. Если цель отбрасывается на твердый объект или другое существо, она получает дополнительный урон **1d6** (объедините урон)."
  }, {
    "id": 1796,
    "name": "Бодать - Действие",
    "main_body": "Совершите атаку против цели в пределах Близкой дистанции, переместив Минотавра [Вплотную](/rule/melee) к ней. При успехе нанесите **2d8** [прямого](/rule/direct-damage) физического урона."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 5,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 5,
  "hp": 7,
  "difficulty": 16,
  "damage_thresholds": [14, 27],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Минотавр Крушитель",
  "main_body": null,
  "short_description": "Огромный фирболг с головой быка и вспыльчивым характером.",
  "type_name": "Громила",
  "motives": "Потреблять, кровоточить, перемещаться, подавлять, преследовать",
  "weapon_name": "Секира",
  "experiences": "Навигация +2"
}, {
  "id": 2395,
  "slug": "juvenile-flickerfly",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "solo",
  "image_url": "/image/adversary/flickerfly-juvenile.png",
  "features": [{
    "id": 1755,
    "name": "Неумолимый (3) - Пассивный",
    "main_body": "Мерцекрылку можно [активировать](/rule/spotlight) до трех раз за ход Мастера. [**Потратьте Страх** ](/rule/spending-fear)  как обычно, чтобы активировать её."
  }, {
    "id": 1756,
    "name": "Непревзойденная точность - Пассивный",
    "main_body": "Прежде чем Мерцекрылка совершит атаку, бросьте **d6**. При результате 4 или выше, [Уклонение](/rule/evasion) цели против этой атаки уменьшается вдвое."
  }, {
    "id": 1757,
    "name": "Танец Разума - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы создать магическое ослепительное зрелище, которое захватывает умы ближайших врагов. Все цели в пределах [Средней](/rule/close) дистанции должны совершить [Бросок Реакции](/rule/reaction-roll) на [Инстинкт](/rule/instinct). За каждую провалившую цель вы [**получаете Страх** ](/rule/gaining-fear), а Мерцекрылка узнает один из страхов цели."
  }, {
    "id": 1758,
    "name": "Галлюциногенное Дыхание - Реакция",
    "main_body": "*Отсчёт (*[*Цикл* ](/rule/loop-countdown) *1d6)*. Когда Мерцекрылка получает урон впервые, активируйте отсчёт. Когда он срабатывает, Мерцекрылка выдыхает галлюциногенный газ на всех целей перед собой в пределах Далекой дистанции. Цели должны успешно пройти Бросок Реакции на Инстинкт или будут мучиться страшными галлюцинациями. Цели, чьи страхи известны Мерцекрылке, получают [помеху](/rule/advantage-and-disadvantage) на этот бросок. Цели, провалившие бросок, должны **отметить Стресс** и потерять [Надежду](/rule/hope)."
  }],
  "attack_bonus": "3",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 10,
  "damage_die_count": 2,
  "stress": 5,
  "hp": 10,
  "difficulty": 14,
  "damage_thresholds": [13, 26],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Молодая Мерцекрылка",
  "main_body": null,
  "short_description": "Насекомое размером с лошадь с радужными чешуйками и кристаллическими крыльями, движущееся быстрее, чем может увидеть глаз.",
  "type_name": "Одиночка",
  "motives": "Собирать блестяшки, охотиться, пикировать",
  "weapon_name": "Удар крылом",
  "experiences": ""
}, {
  "id": 2327,
  "slug": "giant-eagle",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1565,
    "name": "Полёт - Пассивный",
    "main_body": "Во время полета Орел получает бонус +3 к [Сложности](/rule/difficulty)."
  }, {
    "id": 1566,
    "name": "Смертельное Пикирование - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) для атаки цели в пределах [Далекой](/rule/far) дистанции. При успехе нанесите **2d10+2** физического урона, а цель сбивается с ног, становясь [*Уязвимой* ](/rule/vulnerable) до следующего своего действия."
  }, {
    "id": 1567,
    "name": "Захватить - Действие",
    "main_body": "Совершите атаку против цели, находящейся в Близкой дистанции. При успехе нанесите **2d4+3** физического урона, и цель должна успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility), иначе она временно станет [*Обездвиженной* ](/rule/restrained) в колоссальных когтях Орла. Если цель *Обездвижена*, Орел немедленно поднимается в воздух на [Очень Далекую](/rule/very-far) дистанцию над полем боя, удерживая ее."
  }, {
    "id": 1568,
    "name": "Смертельное Падение - Действие",
    "main_body": "Во время полета Орел может выбросить *Обездвиженную* цель, которую он держит. После выброса цель больше не является *Обездвиженной*, но начинает падать. Если ее падение не будет предотвращено во время следующего действия персонажей, цель получает **2d20** физического урона при приземлении."
  }],
  "attack_bonus": "1",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 4,
  "difficulty": 14,
  "damage_thresholds": [8, 19],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Огромный Орёл",
  "main_body": null,
  "short_description": "Гигантская хищная птица с окровавленными когтями.",
  "type_name": "Скрытный",
  "motives": "Охотиться на добычу, оставаться подвижными, наносить решительные удары",
  "weapon_name": "Клюв и Когти",
  "experiences": ""
}, {
  "id": 2344,
  "slug": "archer-squadron",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1611,
    "name": "Орда (1d6+3) - Пассивный",
    "main_body": "Когда отряд отмечает половину или более Ран, его стандартная атака наносит **1d6+3** физического урона."
  }, {
    "id": 1612,
    "name": "Сфокусированный Залп - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы отметить точку в пределах Далекой дистанции. Совершите атаку с преимуществом против всех целей в пределах дистанции [Средне](/rule/close) от этой точки. Цели, против которых отряд добился успеха, получают **1d10+4** физического урона."
  }, {
    "id": 1613,
    "name": "Подавление Огнём- Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы выбрать цель в пределах Далекой дистанции. До следующего броска с [Страхом](/rule/fear), существо которое перемещается в пределы Средней дистанции от этой точки, должно совершить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility). При провале, оно получает **2d6+3** физического урона. При успехе оно получает половину урона."
  }],
  "attack_bonus": "0",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 4,
  "difficulty": 13,
  "damage_thresholds": [8, 16],
  "horde_per_hp": 2,
  "language": "ru",
  "name": "Отряд Лучников",
  "main_body": null,
  "short_description": "Группа обученных лучников с массивными луками.",
  "type_name": "Орда",
  "motives": "Держаться вместе, выживать, вести залповый огонь",
  "weapon_name": "Длинный Лук",
  "experiences": ""
}, {
  "id": 2400,
  "slug": "icewaste-hunter",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "ranged",
  "image_url": "",
  "features": [{
    "id": 1770,
    "name": "Устойчивый прицел - Пассивный",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы дать Охотнику [Преимущество](/rule/advantage-and-disadvantage) при следующей атаке."
  }, {
    "id": 1771,
    "name": "Снежная ловушка - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы нацелиться на группу в пределах Средней [дистанции](/rule/range). Все цели должны успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) или попасть в ловушку, становясь [*Уязвимыми* ](/rule/vulnerable) до тех пор, пока не сбегут, успешно выполнив бросок на [Силу](/rule/strength) или [Искусность](/rule/finesse) (14). Вы получаете [Страх](/rule/fear), когда цель, попавшая в эту ловушку, совершает бросок Действия."
  }, {
    "id": 1772,
    "name": "Укрыться! - Реакция",
    "main_body": "**Отметьте Стресс**, чтобы дать Помеху на атаку по Охотнику. Если атака все же удалась, уменьшите тяжесть полученного урона на один порог."
  }],
  "attack_bonus": "3",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 6,
  "damage_die_size": 12,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 5,
  "difficulty": 13,
  "damage_thresholds": [7, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Охотник Ледяных Пустошей",
  "main_body": null,
  "short_description": "Выживальщик, который путешествует по ледяным пустошам в поисках опасной дичи.",
  "type_name": "Дальнобойный",
  "motives": "Охотиться, настойчиво искать, спасать, выслеживать",
  "weapon_name": "Длинный Лук",
  "experiences": "Навигация +2, Выживание +3"
}, {
  "id": 2322,
  "slug": "mortal-hunter",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1548,
    "name": "Ужасающий - Пассивный",
    "main_body": "Когда Охотник совершает успешную атаку, все персонажи в пределах [Далекой](/rule/far) дистанции теряют [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1549,
    "name": "Метка Смерти - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы проклясть цель в пределах Близкой Дистанции некротической *Меткой Смерти* до конца сцены. Атаки, совершенные Охотником против цели под действием *Метки Смерти*, наносят [прямой урон](/rule/direct-damage). Охотник может поддерживать только одну *Метку Смерти* одновременно."
  }, {
    "id": 1550,
    "name": "Неизбежная смерть - Действие",
    "main_body": "[**Отметить Стресс** ](/rule/marking-stress) для [активации](/rule/spotlight) **1d4** союзников. Атаки, которые они совершают, находясь в состоянии активации, наносят половину урона."
  }, {
    "id": 1551,
    "name": "Безумство - Реакция",
    "main_body": "*Отсчёт ([Цикл](/rule/loop-countdown) 1d6)*. Когда Охотник впервые активирован, активируйте отсчёт. Когда он срабатывает, переместите Охотника по прямой линии в точку в пределах Далекой дистанции и совершите атаку против всех целей на его пути. Цели, против которых Охотник добился успеха, получают **2d8+2** физического урона."
  }],
  "attack_bonus": "5",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 12,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 6,
  "difficulty": 16,
  "damage_thresholds": [15, 27],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Охотник на Живых",
  "main_body": null,
  "short_description": "Нежить в тяжелом кожаном плаще, с пристальным взглядом и непринужденно жестоким поведением.",
  "type_name": "Лидер",
  "motives": "Пожирать, охотиться, выслеживать",
  "weapon_name": "Разрыв плоти",
  "experiences": "Гончая +3"
}, {
  "id": 2335,
  "slug": "cult-initiate",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1587,
    "name": "Приспешник (6) - Пассивный",
    "main_body": "Посвященный считается побежденным, если он получил любой урон. За каждые 6 урона, нанесенного персонажем игрока Посвященному, победите еще одного Приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1588,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) чтобы выбрать цель и [активировать](/rule/spotlight) всех Посвященных в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 5 единиц Физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 5,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 13,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Посвящённый Культа",
  "main_body": null,
  "short_description": "Низкопоставленный культист в простых одеждах, жаждущий власти.",
  "type_name": "Приспешник",
  "motives": "Выполнять приказы, приобретать силу, искать запретные знания",
  "weapon_name": "Ритуальный Кинжал",
  "experiences": ""
}, {
  "id": 2316,
  "slug": "spectral-captain",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1530,
    "name": "Призрак - Пассивный",
    "main_body": "Командир имеет [Устойчивость](/rule/resistance) физическому урону. [**Отметьте Стресс** ](/rule/marking-stress), чтобы переместиться на дистанцию до [Средне](/rule/close) через твердые объекты."
  }, {
    "id": 1531,
    "name": "Нескончаемая битва - Действие",
    "main_body": "[**Потратьте 2 Страха** ](/rule/spending-fear), чтобы вернуть до **1d4+1** побежденных союзников-призраков в бой в местах, где они впервые появились (без отмеченных Ран или Стресса)."
  }, {
    "id": 1532,
    "name": "Не Сдаваться - Реакция",
    "main_body": "Когда союзники Командира вынуждены совершить [бросок реакции](/rule/reaction-roll), вы можете **отметить Стресс**, чтобы дать этим союзникам бонус +2 к броску."
  }, {
    "id": 1533,
    "name": "Импульс - Реакция",
    "main_body": "Когда Капитан совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "3",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 10,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 6,
  "difficulty": 16,
  "damage_thresholds": [13, 26],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Призрачный Командующий",
  "main_body": null,
  "short_description": "Призрачный командир, ведущий свои войска за пределы смерти.",
  "type_name": "Лидер",
  "motives": "Проходить сквозь твердые предметы, собирать войска, переживать старые сражения",
  "weapon_name": "Длинный Лук",
  "experiences": "Древние знания +3"
}, {
  "id": 2317,
  "slug": "spectral-archer",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "ranged",
  "image_url": "",
  "features": [{
    "id": 1534,
    "name": "Призрак - Пассивный",
    "main_body": "Лучник имеет [Устойчивость](/rule/resistance) физическому урону. [**Отметьте Стресс** ](/rule/marking-stress), чтобы переместиться на дистанцию до [Средне](/rule/close) через твердые объекты."
  }, {
    "id": 1535,
    "name": "Выбери свою Цель - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы совершить атаку на Далеком расстоянии против персонажа, который находится в пределах [Близкого](/rule/very-close) расстояния от как минимум двух других персонажей. В случае успеха цель получает **2d8+12** физического урона."
  }],
  "attack_bonus": "3",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 10,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 3,
  "difficulty": 13,
  "damage_thresholds": [6, 14],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Призрачный Лучник",
  "main_body": "Призрачный боец с эфирным луком, неспособный двигаться, пока его цель уязвима.",
  "short_description": "Призрачный боец с эфирным луком, неспособный двигаться, пока его цель уязвима.",
  "type_name": "Дальнобойный",
  "motives": "Проходить сквозь твердые предметы, держаться подальше от сражений, переживать старые битвы",
  "weapon_name": "Длинный Лук",
  "experiences": "Знание Древностей +2"
}, {
  "id": 2315,
  "slug": "spectral-guardian",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1528,
    "name": "Призрак - Пассивный",
    "main_body": "Страж имеет [Устойчивость](/rule/resistance) физическому урону. [**Отметьте Стресс** ](/rule/marking-stress), чтобы переместиться на дистанцию до [Средне](/rule/close) через твердые объекты."
  }, {
    "id": 1529,
    "name": "Могильный Клинок - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы совершить атаку против цели в пределах Близкой дистанции. При успехе нанесите **2d10+6** физического урона, и цель должна **отметить Стресс**."
  }],
  "attack_bonus": "1",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 4,
  "difficulty": 15,
  "damage_thresholds": [7, 15],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Призрачный Страж",
  "main_body": null,
  "short_description": "Призрачный боец с копьями и мечами, свявязанный долгом.",
  "type_name": "Рядовой",
  "motives": "Проходить сквозь твердые предметы, защищать сокровища, переживать старые сражения",
  "weapon_name": "Копьё",
  "experiences": "Древние знания +2"
}, {
  "id": 2338,
  "slug": "conscript",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1592,
    "name": "Приспешник (6) - Пассивный",
    "main_body": "Призывник считается побежденным, если он получил любой урон. За каждые 6 урона, нанесенного призывнику персонажем, победите еще одного приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1593,
    "name": "Групповая атака - Действие",
    "main_body": "**Потратьте Страх**, чтобы выбрать цель и активировать всех Призывников в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются [Вплотную](/rule/melee) к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 6 единиц Физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "0",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 6,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 12,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Призывник",
  "main_body": "Плохо обученный гражданский, втянутый в войну",
  "short_description": "Плохо обученный гражданский, втянутый в войну.",
  "type_name": "Приспешник",
  "motives": "Выполняйте приказы, объединяйтесь, выживайте",
  "weapon_name": "Копья",
  "experiences": ""
}, {
  "id": 2331,
  "slug": "failed-experiment",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1577,
    "name": "Искривленная стойкость - Пассивный",
    "main_body": "Эксперимент [устойчив](/rule/resistance) к физическому урону."
  }, {
    "id": 1578,
    "name": "Перегрузка - Пассивный",
    "main_body": "Когда рядом с целью атаки Эксперимента есть другие противники в пределах [Близкой](/rule/very-close) дистанции, Эксперимент наносит двойной урон."
  }, {
    "id": 1579,
    "name": "Шаткий Выпад - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) для [активации](/rule/spotlight) Эксперимента в качестве дополнительного действия Мастера вместо траты [Страха](/rule/fear)."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 5,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 3,
  "difficulty": 13,
  "damage_thresholds": [12, 23],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Провальный Эксперимент",
  "main_body": null,
  "short_description": "Магический эксперимент некроманта, который пошел не так, оставив существо уродливым и нелепым.",
  "type_name": "Рядовой",
  "motives": "Пожирать, охотиться, выслеживать",
  "weapon_name": "Клыки и Когти",
  "experiences": "Подражатель +3"
}, {
  "id": 2325,
  "slug": "knight-of-the-realm",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "leader",
  "image_url": "/image/adversary/knightofthe-realm.png",
  "features": [{
    "id": 1556,
    "name": "Кавалер - Пассивный",
    "main_body": "Пока рыцарь находится на скакуне, он получает бонус +2 к [Сложности](/rule/difficulty). При получении [Тяжелого урона](/rule/severe-damage) он сбрасывается со скакуна и теряет это преимущество до следующей [активации](/rule/spotlight)."
  }, {
    "id": 1557,
    "name": "Тяжело Бронированный - Пассивный",
    "main_body": "Когда рыцарь получает физический урон, уменьшите его на 3."
  }, {
    "id": 1558,
    "name": "Кавалерийская атака - Действие",
    "main_body": "Если Рыцарь находится в седле, переместитесь в пределах [Далекой](/rule/far) дистанции и совершите стандартную атаку против цели. В случае успеха нанесите **2d8+4** физического урона, и цель должна [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1559,
    "name": "За королевство! - Действие",
    "main_body": "**Отметьте Стресс** для активации **1d4+1** союзников. Атаки, которые они совершают, находясь в состоянии активации, наносят половину урона."
  }],
  "attack_bonus": "4",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 10,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 6,
  "difficulty": 15,
  "damage_thresholds": [13, 26],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Рыцарь Короны",
  "main_body": null,
  "short_description": "Удостоенный наград солдат в тяжелых доспехах на мощном коне.",
  "type_name": "Лидер",
  "motives": "Бежать, искать славы, показать свое превосходство",
  "weapon_name": "Длинный Меч",
  "experiences": "Древние знания +3, Высшее общество +2, Тактика +2"
}, {
  "id": 2398,
  "slug": "glitterwyrm",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1764,
    "name": "Арктическая птица - Пасивный",
    "main_body": "Во время полета Змей может перемещаться до [Далекой](/rule/far) Дистанции."
  }, {
    "id": 1765,
    "name": "Отражающие Чешуйки - Пассивный",
    "main_body": "Существа, которые не находятся в пределах Близкой дистанции от Сверкающего Змея, имеют [помеху](/rule/advantage-and-disadvantage) при атаках против него."
  }, {
    "id": 1766,
    "name": "Быстрые когти - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы выбрать точку в пределах Далекой дистанции. Змей перемещается в эту точку и совершает атаку против цели в пределах Близкой дистанции. При успехе наносится **2d10+5** физического урона, и цель должна успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Силу](/rule/strength) или быть отброшенной на [Среднюю](/rule/close) Дистанцию."
  }, {
    "id": 1767,
    "name": "Ледяные Шипы - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы совершить атаку против группы в Средней дистанции. Цели, против которых Змей преуспел, получают **2d4** физического урона и становятся [*Обездвиженными* ](/rule/restrained) благодаря шипам, пока не освободятся с помощью успешного [Броска Искусности](/rule/finesse)."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 5,
  "difficulty": 14,
  "damage_thresholds": [9, 18],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Сверкающий Змей",
  "main_body": null,
  "short_description": "Змей, покрытый сверкающими чешуйками льда.",
  "type_name": "Скрытный",
  "motives": "Засада, кормление, спячка, налет",
  "weapon_name": "Укус",
  "experiences": "Воздушный Хищник +2, Острое Зрение +3"
}, {
  "id": 2318,
  "slug": "siren",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1536,
    "name": "Зависимая Аудитория - Пассивный",
    "main_body": "Если сирена совершает стандартную атаку против цели, *очарованной* ее песней, атака наносит **2d10+1** урона вместо стандартного урона."
  }, {
    "id": 1537,
    "name": "Чарующа Песня - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы спеть песню, которая влияет на все цели в пределах [Средней](/rule/close) дистанции. Цели должны успешно пройти [Бросок Реакции](/rule/reaction-roll) на [Инстинкт](/rule/instinct) или стать *Очарованными*, пока не [отметят 2 Стресса](/rule/marking-stress). Другие Сирены в пределах Средней дистанции от цели могут **отметить Стресс**, чтобы добавить +1 бонус к [Сложности](/rule/difficulty) броска реакции. Пока цель *Очарована*, она не может действовать и является [*Уязвимой* ](/rule/vulnerable)."
  }],
  "attack_bonus": "2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 5,
  "difficulty": 14,
  "damage_thresholds": [9, 18],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Сирена",
  "main_body": null,
  "short_description": "Получеловек-полурыба с мерцающими чешуйками и неотразимым голосом.",
  "type_name": "Скрытный",
  "motives": "Потреблять, привлекать добычу, подчинять песней",
  "weapon_name": "Укус растянутой челюсти",
  "experiences": "Музыкальный Репертуар +3"
}, {
  "id": 2334,
  "slug": "demonic-hound-pack",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1584,
    "name": "Орда (2d4+1) - Пассивный",
    "main_body": "Когда у стаи отмечено половина или более Ран, их стандартная атака наносит **2d4+1** физического урона."
  }, {
    "id": 1585,
    "name": "Ужасающий Вой - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы все цели в пределах [Близкой](/rule/very-close) дистанции потеряли [Надежду](/rule/hope). Если цель не может потерять Надежду, она должна вместо этого отметить 2 Стресса."
  }, {
    "id": 1586,
    "name": "Импульс - Реакция",
    "main_body": "Когда Стая совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 6,
  "difficulty": 15,
  "damage_thresholds": [11, 23],
  "horde_per_hp": 1,
  "language": "ru",
  "name": "Стая Адских Псов",
  "main_body": null,
  "short_description": "Сверхъестественные гончие, освещенные изнутри адским пламенем.",
  "type_name": "Орда",
  "motives": "Вызывать страх, пожирать плоть, угождать хозяевам",
  "weapon_name": "Клыки и Когти",
  "experiences": "Уловить След +3"
}, {
  "id": 2333,
  "slug": "electric-eels",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1582,
    "name": "Орда (2d4+1) - Пассивный",
    "main_body": "Когда у Угрей отмечено половина или более Ран, их стандартная атака наносит **2d4+1** физического урона."
  }, {
    "id": 1583,
    "name": "Парализующий разряд - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы совершить стандартную атаку против всех целей в пределах [Близкой](/rule/very-close) дистанции. Вы получаете [Страх](/rule/fear) за каждую цель, которая отмечает Рану."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 5,
  "difficulty": 14,
  "damage_thresholds": [10, 20],
  "horde_per_hp": 2,
  "language": "ru",
  "name": "Стая Электрических Угрей",
  "main_body": null,
  "short_description": "Рой угрей, которые окружают и поражают электрическим током.",
  "type_name": "Орда",
  "motives": "Избегать крупных хищников, оглушать добычу, разрывать на части",
  "weapon_name": "Укус с разрядом",
  "experiences": ""
}, {
  "id": 2323,
  "slug": "merchant-baron",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1552,
    "name": "У каждого есть цена - Действие",
    "main_body": "[**Потратьте Страх**](/rule/spending-fear), чтобы предложить цели опасную сделку за то, что она хочет или в чем нуждается. Если это используется на персонаже игрока, он должен совершить [Бросок Реакции](/rule/presence) [Влияния](/rule/presence) (17). При провале он должен [**отметить 2 Стресса** ](/rule/marking-stress) или принять сделку."
  }, {
    "id": 1553,
    "name": "Лучшие мышцы, которые можно купить за деньги - Действие",
    "main_body": "Один раз за сцену, **отметьте Стресс**, чтобы вызвать **1d4+1** противников 1-го ранга, которые появляются на [Далекой](/rule/far) дистанции, чтобы исполнить волю Барона."
  }],
  "attack_bonus": "-2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 6,
  "damage_die_count": 1,
  "stress": 3,
  "hp": 5,
  "difficulty": 15,
  "damage_thresholds": [9, 19],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Торговый Барон",
  "main_body": null,
  "short_description": "Опытный торговец, управляющий крупным предприятием.",
  "type_name": "Социальный",
  "motives": "Злоупотреблять властью, собирать ресурсы, мобилизовать приспешников",
  "weapon_name": "Рапира",
  "experiences": "Благородство +2, Торговля +2"
}, {
  "id": 2341,
  "slug": "master-assassin",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "leader",
  "image_url": "/image/adversary/assassin-master.png",
  "features": [{
    "id": 1602,
    "name": "Не увидишь, как прилетит - Пассивный",
    "main_body": "Убийца наносит [прямой урон](/rule/direct-damage), пока он [*Скрыт* ](/rule/hidden)."
  }, {
    "id": 1603,
    "name": "Удар в Унисон - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) для [активации](/rule/spotlight) нескольких других убийц, равного количеству неотмеченного Стресса убийцы."
  }, {
    "id": 1604,
    "name": "Тонкое Лезвие - Реакция",
    "main_body": "Когда убийца успешно совершает стандартную атаку против [*Уязвимой* ](/rule/vulnerable) цели, вы можете [**потратить Страх** ](/rule/spending-fear), чтобы нанести [Тяжелый урон](/rule/severe-damage) вместо стандартного урона."
  }, {
    "id": 1605,
    "name": "Импульс - Реакция",
    "main_body": "Когда убийца совершает успешную атаку против персонажа игрока, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "5",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 10,
  "damage_die_count": 2,
  "stress": 5,
  "hp": 7,
  "difficulty": 15,
  "damage_thresholds": [12, 25],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Убийца Мастер",
  "main_body": null,
  "short_description": "Опытный убийца с угрожающим голосом и смертоносным клинком.",
  "type_name": "Лидер",
  "motives": "Засада, выбраться живым, убить, продумать все сценарии",
  "weapon_name": "Зубчатый кинжал",
  "experiences": "Командир +3, Вторжение +3"
}, {
  "id": 2342,
  "slug": "assassin-poisoner",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "skulk",
  "image_url": "/image/adversary/assassinpoisoner.png",
  "features": [{
    "id": 1606,
    "name": "Яд Скрежетозуба - Пассивный",
    "main_body": "Цели, которые отмечают Рану от атак Убийцы, становятся [*Уязвимыми* ](/rule/vulnerable), пока не очистят Рану."
  }, {
    "id": 1607,
    "name": "Из Ниоткуда - Пассивный",
    "main_body": "У Убийцы есть [преимущество](/rule/advantage-and-disadvantage) на атаках, если он [*Скрыт* ](/rule/hidden)."
  }, {
    "id": 1608,
    "name": "Дымовая Завеса - Действие",
    "main_body": "Бросьте дымовую гранату, которая заполняет воздух в пределах Средней дистанции дымом, *Ошеломляя* всех целей в этой области. *Ошеломленные* цели получают Помеху на следующий Бросок Действия, затем [состояние](/rule/condition) снимается."
  }],
  "attack_bonus": "3",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 4,
  "difficulty": 14,
  "damage_thresholds": [8, 16],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Убийца Отравитель",
  "main_body": null,
  "short_description": "Хитрый негодяй, искусный в ядах и засадах.",
  "type_name": "Скрытный",
  "motives": "Предвидеть, требовать оплаты, убить, отравить еду и воду",
  "weapon_name": "Отравленный Метательный Нож",
  "experiences": "Вторжение +2"
}, {
  "id": 2343,
  "slug": "apprentice-assassin",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "minion",
  "image_url": "/image/adversary/assassin-apprentice.png",
  "features": [{
    "id": 1609,
    "name": "Приспешник (6) - Пассивный",
    "main_body": "Убийца считается побежденным, если он получил любой урон. За каждые 6 урона, нанесенного Убийце персонажем, победите дополнительного Приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1610,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы выбрать цель и активировать всех Учеников-Убийц в пределах Средней дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий бросок Атаки. При успехе они наносят по 4 единицы Физического урона за каждого. Объедините этот урон."
  }],
  "attack_bonus": "-1",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 13,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Убийца Ученик",
  "main_body": null,
  "short_description": "Молодой стажер, стремящийся проявить себя.",
  "type_name": "Приспешник",
  "motives": "Действовать безрассудно, убивать, доказывать свою ценность, выставлять себя напоказ",
  "weapon_name": "Метательный Нож",
  "experiences": "Вторжение +2"
}, {
  "id": 2339,
  "slug": "chaos-skull",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "ranged",
  "image_url": "/image/adversary/chaos-skull.png",
  "features": [{
    "id": 1594,
    "name": "Левитация - Пассивный",
    "main_body": "Череп парит в воздухе на расстоянии нескольких футов от земли и не может быть [*Обездвижен* ](/rule/restrained)."
  }, {
    "id": 1595,
    "name": "Мерцающая Защита- Пассивное",
    "main_body": "Череп [устойчив](/rule/resistance) к магическому урону."
  }, {
    "id": 1596,
    "name": "Магический взрыв - Действие",
    "main_body": "[**Отметьте Стресс**](/rule/marking-stress), чтобы совершить атаку против всех целей в пределах Средней дистанции. Цели, против которых Череп преуспел, получают **2d6+4** магического урона."
  }, {
    "id": 1597,
    "name": "Магическое Выкачивание - Действие",
    "main_body": "[**Потратьте Страх**](/rule/spending-fear), чтобы совершить атаку против персонажа с Характеристикой Заклинателя в пределах [Близкой](/rule/very-close) дистанции. При успехе цель отмечает **1d4** Стресса, а Череп очищает себе столько же Стресса. Кроме того, при успехе Череп может быть немедленно [активирован](/rule/spotlight) снова."
  }],
  "attack_bonus": "2",
  "attack_range": "close",
  "damage_type": "magical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 4,
  "hp": 5,
  "difficulty": 15,
  "damage_thresholds": [8, 16],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Череп Хаоса",
  "main_body": null,
  "short_description": "Парящий человеческий череп, оживленный мерцающей магией.",
  "type_name": "Дальнобойный",
  "motives": "Смеяться, поглощать магию, служить создателю",
  "weapon_name": "Энергетический взрыв",
  "experiences": ""
}, {
  "id": 2314,
  "slug": "spy",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1526,
    "name": "Сбор Секретов - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) , чтобы описать, как Шпион узнал секрет одного из персонажей в сцене."
  }, {
    "id": 1527,
    "name": "Незаметный наблюдатель - Реакция",
    "main_body": "Когда персонаж или группа обсуждают что-то важное, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы показать, что Шпион присутствует на сцене и наблюдает за ними. Если Шпион покидает сцену, чтобы доложить о своих наблюдениях, вы получаете **1d4** [Страх](/rule/fear)."
  }],
  "attack_bonus": "-2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 4,
  "difficulty": 15,
  "damage_thresholds": [8, 17],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Шпион",
  "main_body": null,
  "short_description": "Опытный шпион, обладающий талантом попадать в нужное место в нужное время, чтобы подслушать секреты.",
  "type_name": "Социальный",
  "motives": "Удирать, Изменять внешность, Подслушивать",
  "weapon_name": "Кинжал",
  "experiences": "Шпионаж +3"
}, {
  "id": 2332,
  "slug": "elite-soldier",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 2,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1580,
    "name": "Подкрепление - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы переместиться [Вплотную](/rule/melee) к союзнику и совершить стандартную атаку против цели в пределах Близкой дистанции. При успехе наносится **2d10+2** физического урона, и союзник может снять Стресс."
  }, {
    "id": 1581,
    "name": "Верность вассала - Реакция",
    "main_body": "Когда Солдат находится в пределах Близкой Дистанции от рыцаря или другого дворянина, который получил бы урон, вы можете **отметить Стресс**, чтобы переместиться Вплотную к ним и получить урон вместо них."
  }],
  "attack_bonus": "1",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 8,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 4,
  "difficulty": 15,
  "damage_thresholds": [9, 18],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Элитный Солдат",
  "main_body": null,
  "short_description": "Бронированный оруженосец или опытный простолюдин, стремящийся к продвижению по службе.",
  "type_name": "Рядовой",
  "motives": "Завоевать славу, поддерживать порядок, совершать союзы",
  "weapon_name": "Копьё",
  "experiences": ""
}, {
  "id": 2402,
  "slug": "idolizing-imp",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1778,
    "name": "Приспешник (8) - Пассивный",
    "main_body": "Бес считается побежденным, когда он получает любой урон. За каждые 8 урона, нанесенного персонажем Бесу, победите дополнительного Приспешника в пределах [дистанции](/rule/range), на которую действует атака"
  }, {
    "id": 1779,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы выбрать цель и [активировать](/rule/spotlight) всех Бесов в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 7 единиц Физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 7,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 17,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Бес Почитатель",
  "main_body": "Демон, который кланяется в знак почтения своему господину.",
  "short_description": "Демон, который кланяется в знак почтения своему господину.",
  "type_name": "Приспешник",
  "motives": "Защищать, обманывать, поклоняться",
  "weapon_name": "Когти",
  "experiences": ""
}, {
  "id": 2294,
  "slug": "vampire",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1452,
    "name": "Осушающий укус - Действие",
    "main_body": "Совершите атаку против цели Вплотную к вампиру. При успехе нанесите **5d4** физического урона. Цель, которая отмечает Рану от этой атаки, теряет [Надежду](/rule/hope) и должна [**отметить Стресс** ](/rule/marking-stress). Затем Вампир очищает Рану."
  }, {
    "id": 1453,
    "name": "Туманная форма - Реакция",
    "main_body": "Когда Вампир получает физический урон, вы можете [**потратить Страх** ](/rule/spending-fear) чтобы получить половину урона."
  }],
  "attack_bonus": "3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 0,
  "damage_die_size": 8,
  "damage_die_count": 3,
  "stress": 4,
  "hp": 5,
  "difficulty": 16,
  "damage_thresholds": [18, 35],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Вампир",
  "main_body": null,
  "short_description": "Умная нежить с окровавленными губами и хищной улыбкой.",
  "type_name": "Рядовой",
  "motives": "Кусать, очаровывать, обманывать, кормить, запугивать",
  "weapon_name": "Рапира",
  "experiences": "Ночной охотник +3"
}, {
  "id": 2302,
  "slug": "greater-water-elemental",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "support",
  "image_url": "",
  "features": [{
    "id": 1479,
    "name": "Водная Струя - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) для атаки цели в пределах Близкой дистанции. При успехе наносится **2d4+7** физического урона, и цель получает [помеху](/rule/advantage-and-disadvantage) на следующее действие. При провале цель должна **отметить Стресс**."
  }, {
    "id": 1480,
    "name": "Захлёбывающие Объятия - Действие",
    "main_body": "[**Потратьте Страх**](/rule/spending-fear), чтобы совершить атаку против всех целей в пределах Близкой дистанции. Цели, против которых элементаль добился успеха, становятся [*Обездвиженными* ](/rule/restrained) и [*Уязвимыми*](/rule/vulnerable), так как они начинают тонуть. Цель может освободиться, прекратив оба состояния, с помощью успешного броска [Силы](/rule/strength) или [Инстинкта](/rule/instinct)."
  }, {
    "id": 1481,
    "name": "Прилив - Реакция",
    "main_body": "Когда элементаль совершает успешную стандартную атаку, вы можете **отметить Стресс**, чтобы отбросить цель на [Среднюю](/rule/close) дистанцию."
  }],
  "attack_bonus": "3",
  "attack_range": "veryclose",
  "damage_type": "magical",
  "damage_bonus": 1,
  "damage_die_size": 4,
  "damage_die_count": 3,
  "stress": 5,
  "hp": 5,
  "difficulty": 17,
  "damage_thresholds": [17, 34],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Великий Водный Элементаль",
  "main_body": null,
  "short_description": "Огромная живая волна, обрушивающаяся на врагов.",
  "type_name": "Поддержка",
  "motives": "Наводнить, рассеять, утопить",
  "weapon_name": "Разбивающаяся волна",
  "experiences": ""
}, {
  "id": 2303,
  "slug": "greater-earth-elemental",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "bruiser",
  "image_url": "/image/adversary/greater-earth-elemental.png",
  "features": [{
    "id": 1482,
    "name": "Медленный - Пассивный",
    "main_body": "Когда вы [активируете](/rule/spotlight) элементаля, и у него нет [жетона](/rule/token) в блоке характеристик, он еще не может действовать. Поместите жетон в его блок характеристик и опишите, что он готовится сделать. Когда вы активируете элементаля, и у него есть жетон в блоке характеристик, снимите жетон, и он может действовать."
  }, {
    "id": 1483,
    "name": "Сокрушительные удары - Пассивный",
    "main_body": "Когда элементаль совершает успешную атаку, цель должна отметить [Ячейку Брони](/rule/armor-slot) без получения ее преимуществ (они все еще могут использовать броню для уменьшения урона). Если они не могут отметить Ячейку Брони, они должны отметить дополнительную Рану."
  }, {
    "id": 1484,
    "name": "Неподвижный Объект - Пассивный",
    "main_body": "Атака, которая перемещает элементаля, перемещает его на две дистанции меньше (например, [Далекое](/rule/far) становится Близким). Когда элементаль получает физический урон, уменьшите его на 7."
  }, {
    "id": 1485,
    "name": "Камнепад - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы создать камнепад, который засыпает землю перед Элементалем в пределах [Средней](/rule/close) дистанции. Все цели в этой области должны совершить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) (19). Цели, провалившие бросок, получают **2d12+5** физического урона и становятся [*Уязвимыми* ](/rule/vulnerable) до следующего броска [Надежды](/rule/hope). Цели, преуспевшие в броске, получают половину урона."
  }, {
    "id": 1486,
    "name": "Импульс - Реакция",
    "main_body": "Когда элементаль совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "7",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 10,
  "damage_die_count": 3,
  "stress": 4,
  "hp": 10,
  "difficulty": 17,
  "damage_thresholds": [22, 40],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Великий Земляной Элементаль",
  "main_body": null,
  "short_description": "Живой оползень из валунов и пыли, размером с дом.",
  "type_name": "Громила",
  "motives": "Устраивать Лавину, сбивать, избивать",
  "weapon_name": "Каменный кулак",
  "experiences": ""
}, {
  "id": 2312,
  "slug": "adult-flickerfly",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "solo",
  "image_url": "/image/adversary/flickerfly-adult.png",
  "features": [{
    "id": 1515,
    "name": "Неумолимый (4) - Пассивный",
    "main_body": "Мерцекрылку можно [активировать](/rule/spotlight) до четырёх раз за ход Мастера. [**Потратьте Страх** ](/rule/spending-fear) как обычно, чтобы активировать её."
  }, {
    "id": 1516,
    "name": "Без Промаха - Пассивный",
    "main_body": "Когда Мерцекрылка совершает атаку, [Уклонение](/rule/evasion) цели против этой атаки уменьшается вдвое."
  }, {
    "id": 1517,
    "name": "Смертельный Полёт - Пассивный",
    "main_body": "Во время полета Мерцекрылка может перемещаться на [Далекое](/rule/far) расстояние вместо [Среднего](/rule/close) перед выполнением действия."
  }, {
    "id": 1518,
    "name": "Вихрь - Действие",
    "main_body": "**Потратьте Страх**, чтобы совершить атаку против всех целей в пределах близкой дистанции. Цели, против которых Мерцекрылка преуспела, получают **3d8** [прямого](/rule/direct-damage) физического урона."
  }, {
    "id": 1519,
    "name": "Танец Разума - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы создать магическое ослепительное зрелище, которое захватывает умы ближайших врагов. Все цели в пределах Средней дистанции должны совершить [Бросок Реакции](/rule/reaction-roll) на [Инстинкт](/rule/instinct). За каждую цель, которая провалила бросок, вы получаете [Страх](/rule/fear), а Мерцекрылка узнает один из страхов цели."
  }, {
    "id": 1520,
    "name": "Галлюциногенное Дыхание - Реакция",
    "main_body": "*Отсчёт (*[*Цикл* ](/rule/loop-countdown) *1d6)*. Когда Мерцекрылка впервые получает урон, активируйте отсчёт. Когда он срабатывает, Мерцекрылка выдыхает галлюциногенный газ на всех целей перед собой в пределах Далекой дистанции. Цели должны успешно пройти Бросок Реакции на Инстинкт или будут мучиться страшными галлюцинациями. Цели, чьи страхи известны Мерцекрылке, получают [помеху](/rule/advantage-and-disadvantage) на этот бросок. Цели, провалившие бросок, должны **отметить Стресс** и потерять [Надежду](/rule/hope)."
  }, {
    "id": 1521,
    "name": "Необычные рефлексы - Реакция",
    "main_body": "Когда Мерцекрылка получает урон от атаки в пределах Средней дистанции, вы можете **отметить Стресс**, чтобы получить половину урона."
  }],
  "attack_bonus": "3",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 0,
  "damage_die_size": 20,
  "damage_die_count": 3,
  "stress": 6,
  "hp": 12,
  "difficulty": 17,
  "damage_thresholds": [20, 35],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Взрослая Мерцекрылка",
  "main_body": null,
  "short_description": "Крылатое насекомое размером с большой дом с радужными чешуйками и крыльями, которые двигаются слишком быстро, чтобы их можно было уследить.",
  "type_name": "Одиночка",
  "motives": "Собирать блестяшки, охотиться, вить гнездо, пикировать",
  "weapon_name": "Удар крылом",
  "experiences": ""
}, {
  "id": 2295,
  "slug": "head-vampire",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "leader",
  "image_url": "/image/adversary/head-vampire.png",
  "features": [{
    "id": 1454,
    "name": "Ужасающий - Пассивный",
    "main_body": "Когда Вампир совершает успешную атаку, все персонажи в пределах [Далекой](/rule/far) дистанции теряют [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1455,
    "name": "Взгляни в мои глаза - Пассивный",
    "main_body": "Существо, которое перемещается Вплотную к Вампиру, должно совершить [Бросок Реакции](/rule/reaction-roll) на [Инстинкт](/rule/instinct). При провале вы получаете **1d4** Страха."
  }, {
    "id": 1456,
    "name": "Питаться Последователями - Действие",
    "main_body": "Когда вампир находится Вплотную к союзнику, он может заставить союзника отметить Рану. Затем вампир очищает Рану."
  }, {
    "id": 1457,
    "name": "Охота Началась - Действие",
    "main_body": "[**Потратьте 2 Страха** ](/rule/spending-fear), чтобы вызвать **1d4** [Вампиров](/adversary/vampire), которые появляются на Далекой дистанции и сразу же [активируются](/rule/spotlight)."
  }, {
    "id": 1458,
    "name": "Вытягивание Жизни - Реакция",
    "main_body": "Когда вампир активирован, бросьте **d8**. При результате 6 или выше все цели в пределах Близкой дистанции должны отметить Рану."
  }],
  "attack_bonus": "5",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 20,
  "damage_die_count": 2,
  "stress": 6,
  "hp": 6,
  "difficulty": 17,
  "damage_thresholds": [22, 42],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Владыка Вампиров",
  "main_body": null,
  "short_description": "Очаровательная нежить, одетая в аристократические наряды.",
  "type_name": "Лидер",
  "motives": "Создавать рабов, очаровывать, командовать, летать, запугивать",
  "weapon_name": "Рапира",
  "experiences": "Аристократ +3"
}, {
  "id": 2300,
  "slug": "hydra",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "solo",
  "image_url": "/image/adversary/hydra.png",
  "features": [{
    "id": 1470,
    "name": "Многоголовая угроза - Пасивный",
    "main_body": "Гидра начинает с тремя головами и может иметь до пяти. Когда Гидра получает [Ощутимый](/rule/major-damage) урон или больше, она теряет голову."
  }, {
    "id": 1471,
    "name": "Неумолимый (X) - Пассивный",
    "main_body": "Гидра может быть активирована X раз за ход Мастера, где X равно количеству голов Гидры. [**Потратьте Страх** ](/rule/spending-fear) как обычно, чтобы активировать ее."
  }, {
    "id": 1472,
    "name": "Регенерация - Действие",
    "main_body": "Если у Гидры есть отмеченные Раны, **потратьте Страх**, чтобы очистить Рану и вырастить две головы."
  }, {
    "id": 1473,
    "name": "Ужасающий хор - Действие",
    "main_body": "Все персонажи в пределах Далекой дистанции теряют 2 [Надежды](/rule/hope)."
  }, {
    "id": 1474,
    "name": "Магическая слабость - Реакция",
    "main_body": "Когда Гидра получает магический урон, она становится *Ошеломленной* до следующего броска со [Страхом](/rule/fear). Пока она *Ошеломлена*, она не может использовать действие Регенерация, но имеет иммунитет к магическому урону."
  }],
  "attack_bonus": "3",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 12,
  "damage_die_count": 2,
  "stress": 5,
  "hp": 10,
  "difficulty": 18,
  "damage_thresholds": [19, 35],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Гидра",
  "main_body": null,
  "short_description": "Четвероногое чешуйчатое чудовище с несколькими длинношеими головами, каждая из которых усыпана угрожающими клыками.",
  "type_name": "Одиночка",
  "motives": "Пожирать, восстанавливаться, терроризировать",
  "weapon_name": "Укус",
  "experiences": ""
}, {
  "id": 2311,
  "slug": "demon-of-avarice",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "support",
  "image_url": "/image/adversary/demon-of-avarice.png",
  "features": [{
    "id": 1512,
    "name": "Деньги Решают - Пассивный",
    "main_body": "Атаки против Демона совершаются с [помехой](/rule/advantage-and-disadvantage), если атакующий не тратит горсть [золота](/rule/gold). Этот Демон начинает с количеством горстей, равным количеству персонажей. Когда цель получает Рану от стандартной атаки Демона, она может **потратить горсть золота** вместо Раны (1 горсть за 1 Рану). Добавьте Демону одну горсть золота за каждую горсть золота, потраченную персонажами на это свойство."
  }, {
    "id": 1513,
    "name": "Числа должны расти - Пассивный",
    "main_body": "Добавьте бонус к [броскам атаки](/rule/attack-roll) Демона, равный количеству горстей золота, которые у него есть."
  }, {
    "id": 1514,
    "name": "Время - деньги - Действие",
    "main_body": "**Потратьте 3 горсти** **золота (или** [Страх](/rule/fear)**)** для активации **1d4+1** союзников."
  }],
  "attack_bonus": "2",
  "attack_range": "melee",
  "damage_type": "magical",
  "damage_bonus": 5,
  "damage_die_size": 6,
  "damage_die_count": 3,
  "stress": 5,
  "hp": 6,
  "difficulty": 17,
  "damage_thresholds": [15, 29],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Демон Алчности",
  "main_body": null,
  "short_description": "Величественное чудовище в плаще, с круглыми рогами, украшенными сокровищами.",
  "type_name": "Поддержка",
  "motives": "Потреблять, подпитывать жадность, сеять раздор",
  "weapon_name": "Голодная пасть",
  "experiences": "Манипуляция +3"
}, {
  "id": 2307,
  "slug": "demon-of-wrath",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "bruiser",
  "image_url": "/image/adversary/demon-of-wrath.png",
  "features": [{
    "id": 1495,
    "name": "Неумолимый гнев - Пассивный",
    "main_body": "Атаки Демона наносят [прямой урон](/rule/direct-damage)."
  }, {
    "id": 1496,
    "name": "Жажда битвы - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы заставить кровь всех персонажей в пределах [Далекой](/rule/far) дистанции закипеть. Они используют кубик d20 в качестве кубика Страха до конца сцены."
  }, {
    "id": 1497,
    "name": "Возмездие - Реакция",
    "main_body": "Когда Демон получает урон от атаки в пределах [Средней](/rule/close) дистанции, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы совершить стандартную атаку против атакующего."
  }, {
    "id": 1498,
    "name": "Кровь и души - Реакция",
    "main_body": "*Отсчёт(Цикл 6)*. Активируйте при первой атаке, совершенной в поле зрения Демона. Отсчёт срабатывает, когда персонаж совершает агрессивное действие. При срабатывании вызывается **1d4** [Малых Демонов](/adversary/minor-demon), которые появляются на Средней дистанции."
  }],
  "attack_bonus": "3",
  "attack_range": "veryclose",
  "damage_type": "magical",
  "damage_bonus": 1,
  "damage_die_size": 8,
  "damage_die_count": 3,
  "stress": 5,
  "hp": 7,
  "difficulty": 17,
  "damage_thresholds": [22, 40],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Демон Гнева",
  "main_body": null,
  "short_description": "Огромный демон с кулаками размером с валуны, движимый бесконечным гневом.",
  "type_name": "Громила",
  "motives": "Разжигать гнев, впечатлять соперников, сеять хаос",
  "weapon_name": "Кулаки",
  "experiences": "Запугивание +2"
}, {
  "id": 2309,
  "slug": "demon-of-hubris",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "leader",
  "image_url": "/image/adversary/demon-of-hubris.png",
  "features": [{
    "id": 1503,
    "name": "Ужасающий - Пассивный",
    "main_body": "Когда Демон совершает успешную атаку, все персонажи в пределах Далекой дистанции теряют [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1504,
    "name": "Удваиваю - Пассивный",
    "main_body": "Когда персонаж игрока в пределах Далекой дистанции проваливает бросок, он может перебросить кость Страха и принять новый результат. Если он снова проваливает, он [**отмечает 2 Стресса** ](/rule/marking-stress), а Демон очищает Стресс."
  }, {
    "id": 1505,
    "name": "Непревзойденное мастерство - Действие",
    "main_body": "**Отметьте Стресс**, чтобы нанести стандартный урон от атаки Демона цели в пределах [Средней](/rule/close) дистанции."
  }, {
    "id": 1506,
    "name": "Корень Зла - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) на [активацию](/rule/spotlight) двух других Демонов в пределах Далекой дистанции."
  }, {
    "id": 1507,
    "name": "Ты меркнешь на фоне - Реакция",
    "main_body": "Когда персонаж не проходит проверку в пределах Средней дистанции от Демона, он должен **отметить Стресс**."
  }],
  "attack_bonus": "4",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 0,
  "damage_die_size": 10,
  "damage_die_count": 3,
  "stress": 5,
  "hp": 7,
  "difficulty": 18,
  "damage_thresholds": [18, 36],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Демон Гордыни",
  "main_body": null,
  "short_description": "Идеально красивый и бесконечно жестокий демон с блестящим копьем и элегантными одеждами.",
  "type_name": "Лидер",
  "motives": "Снисходительно относиться, объявлять о преждевременной победе, доказывать превосходство",
  "weapon_name": "Идеальное копье",
  "experiences": "Манипуляция +2"
}, {
  "id": 2308,
  "slug": "demon-of-jealousy",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "ranged",
  "image_url": "/image/adversary/demon-of-jealousy.png",
  "features": [{
    "id": 1499,
    "name": "Незащищенный разум - Пассивный",
    "main_body": "Стандартная атака Демона наносит [прямой урон](/rule/direct-damage)."
  }, {
    "id": 1500,
    "name": "Моя Очередь - Реакция",
    "main_body": "Когда Демон отмечает Рану в результате атаки, потратьте количество **Страха**, равное количеству Ран, нанесенных Демону**, чтобы заставить атакующего **нанести такое же** количество Ран себе."
  }, {
    "id": 1501,
    "name": "Соперничество - Реакция",
    "main_body": "Когда существо в пределах [Средней](/rule/close) дистанции получает урон от другого противника, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы добавить **d4** к [броску урона](/rule/damage-roll)."
  }, {
    "id": 1502,
    "name": "Что твое, то и мое - Реакция",
    "main_body": "Когда персонаж получает [Тяжелый урон](/rule/severe-damage) в пределах [Близкой](/rule/very-close) дистанции от Демона, вы можете **потратить Страх**, чтобы заставить цель совершить [Бросок Реакции](/rule/reaction-roll) на [Искусность](/rule/finesse). В случае неудачи демон захватывает один предмет или расходной материал по своему выбору из инвентаря цели."
  }],
  "attack_bonus": "4",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 3,
  "stress": 6,
  "hp": 6,
  "difficulty": 17,
  "damage_thresholds": [17, 30],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Демон Зависти",
  "main_body": null,
  "short_description": "Изменчивое существо с тонкими конечностями и ненасытными желаниями.",
  "type_name": "Дальнобойный",
  "motives": "Присоединяться к успеху других, забирать то, что принадлежит другим, держать злобу",
  "weapon_name": "Психическая Атака",
  "experiences": "Манипуляция +3"
}, {
  "id": 2310,
  "slug": "demon-of-despair",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "skulk",
  "image_url": "/image/adversary/demon-of-despair.png",
  "features": [{
    "id": 1508,
    "name": "Глубины отчаяния - Пассивный",
    "main_body": "Демон наносит двойной урон персонажам у которых 0 [Надежды](/rule/hope)."
  }, {
    "id": 1509,
    "name": "Ваша борьба бессмысленна - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы понизить боевой дух всех персонажей в пределах Далекой дистанции. Все затронутые цели заменяют свой кубик Надежды на **d8** до тех пор, пока не выпадет успешный бросок с Надеждой или не наступит следующий отдых."
  }, {
    "id": 1510,
    "name": "Ваши друзья подведут вас - Реакция",
    "main_body": "Когда персонаж проваливает бросок со [Страхом](/rule/fear), вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы все остальные персонажи в пределах [Средней](/rule/close) дистанции потеряли Надежду."
  }, {
    "id": 1511,
    "name": "Импульс - Реакция",
    "main_body": "Когда демон совершает успешную атаку против персонажа, вы получаете Страх."
  }],
  "attack_bonus": "3",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 1,
  "damage_die_size": 6,
  "damage_die_count": 3,
  "stress": 5,
  "hp": 6,
  "difficulty": 17,
  "damage_thresholds": [18, 35],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Демон Уныния",
  "main_body": null,
  "short_description": "Укрытый плащом демон с длинным конечностями, из которых сочятся тени",
  "type_name": "Скрытный",
  "motives": "Сделать страх заразительным, держаться в тени, подрывать решимость",
  "weapon_name": "Взрыв Миазм",
  "experiences": "Манипуляция +3"
}, {
  "id": 2305,
  "slug": "dryad",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1489,
    "name": "Терновое Поле - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы выбрать точку в пределах Далекой дистанции. Создайте участок с колючками, который покрывает область в пределах [Средней](/rule/close) дистанции от этой точки. Все цели в этой области получают **2d6+2** физического урона, когда они действуют. Цель должна успешно выполнить [Бросок Искусности](/rule/finesse) или нанести более 20 урона Дриаде атакой, чтобы покинуть область."
  }, {
    "id": 1490,
    "name": "Выращивание саженцев - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы призвать трех [Трэнтов Саженцев](/adversary/treant-sapling), которые появляются на Средней дистанции и сразу же [активируются](/rule/spotlight)."
  }, {
    "id": 1491,
    "name": "Мы все едины - Реакция",
    "main_body": "Когда союзник погибает в Средней дистанции, вы можете **потратить Страх**, чтобы очистить 2 Раны и 2 Стресса, поскольку жизненная сила погибшего союзника возвращается в лес."
  }],
  "attack_bonus": "4",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 10,
  "damage_die_count": 3,
  "stress": 5,
  "hp": 8,
  "difficulty": 16,
  "damage_thresholds": [24, 38],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Дриада",
  "main_body": null,
  "short_description": "Дух природы в виде человекоподобного дерева.",
  "type_name": "Лидер",
  "motives": "Командовать, возделывать, изгонять, сохранять лес",
  "weapon_name": "Короткий Лук Капканов",
  "experiences": "Знание леса +4"
}, {
  "id": 2297,
  "slug": "oak-treant",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1461,
    "name": "Всего лишь дерево - Пассивный",
    "main_body": "До того, как они совершают свою первую атаку в бою или после того, как они становятся [Скрытыми](/rule/hidden), Тренты неотличимы от других деревьев до тех пор, пока они не совершат следующее действие или персонаж не выполнит успешно [Бросок Инстинкта](/rule/instinct), чтобы их идентифицировать."
  }, {
    "id": 1462,
    "name": "Шквал Семян - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) и совершите атаку против до трех целей в пределах [Средней](/rule/close) дистанции, засыпая их гигантскими желудями. Цели, против которых Трент добился успеха, получают **2d10+5** физического урона."
  }, {
    "id": 1463,
    "name": "Пустить Корни - Действие",
    "main_body": "**Отметьте Стресс**, чтобы *Укоренить* Древо на месте. Древо находится в состоянии [*Обездвижен* ](/rule/restrained) пока *Укоренено*, и может прекратить действие этого эффекта вместо перемещения, когда будет  [активирован](/rule/spotlight). Пока оно *Укоренено*, Древо имеет [сопротивление](/rule/resistance) физическому урону."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 8,
  "damage_die_count": 3,
  "stress": 4,
  "hp": 7,
  "difficulty": 17,
  "damage_thresholds": [22, 40],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Дубовый Трэнт",
  "main_body": null,
  "short_description": "Крепкое, живое старое дерево.",
  "type_name": "Громила",
  "motives": "Скрыться на виду, сохранить лес, укорениться, раскачивать ветви",
  "weapon_name": "Ветки",
  "experiences": "Знание леса +3"
}, {
  "id": 2406,
  "slug": "covetous-miners",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1788,
    "name": "Орда (3d6+5) - Пассивный",
    "main_body": "Когда Шахтёры отметили половину или более своих [Ран](/rule/hit-points), их стандартная атака наносит **3d6+5** магического урона."
  }, {
    "id": 1789,
    "name": "Жажда Золота - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы совершить стандартную атаку с [преимуществом](/rule/advantage-and-disadvantage) против всех целей, несущих [золото](/rule/gold) в пределах [Близкой](/rule/very-close) дистанции."
  }],
  "attack_bonus": "1",
  "attack_range": "melee",
  "damage_type": "magical",
  "damage_bonus": 10,
  "damage_die_size": 12,
  "damage_die_count": 3,
  "stress": 3,
  "hp": 6,
  "difficulty": 16,
  "damage_thresholds": [15, 25],
  "horde_per_hp": 5,
  "language": "ru",
  "name": "Жадные Призраки Шахтёров",
  "main_body": null,
  "short_description": "Призрачная группа шахтеров, поглощенных своей ненасытной жадностью.",
  "type_name": "Орда",
  "motives": "Освободиться, обрести богатство, заплатить долги",
  "weapon_name": "Призрачная Мотыга",
  "experiences": ""
}, {
  "id": 2290,
  "slug": "young-ice-dragon",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "solo",
  "image_url": "/image/adversary/young-ice-dragon.png",
  "features": [{
    "id": 1435,
    "name": "Неумолимый (3) - Пассивный",
    "main_body": "Дракон может быть активирован до трех раз за ход Мастера. [**Потратьте Страх** ](/rule/spending-fear) как обычно, чтобы активировать его."
  }, {
    "id": 1436,
    "name": "Разрывать и сокрушать - Пассивный",
    "main_body": "Если цель, получившая урон от Дракона, не отмечает [Ячейку Брони](/rule/armor-slot) для уменьшения урона, она должна [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1437,
    "name": "Надежды нет - Пассивный",
    "main_body": "Когда персонаж выбрасывает кости со [Страхом](/rule/fear), находясь в пределах Далекой дистанции от Дракона, он теряет [Надежду](/rule/hope)."
  }, {
    "id": 1438,
    "name": "Дыхание метели - Действие",
    "main_body": "**Потратьте 2 Страха**, чтобы выпустить ледяной вихрь перед Драконом в пределах Средней дистанции. Все цели в этой области должны сделать [Бросок реакции](/rule/reaction-roll) на [Проворность](/rule/agility). Цели, которые провалили бросок, получают **4d6+5** магического урона и [*Обездвиживаются* ](/rule/restrained) льдом, пока не вырвутся на свободу с помощью успешного [Броска силы](/rule/strength). Цели, которые преуспели, должны отметить 2 Стресса или получить половину урона."
  }, {
    "id": 1439,
    "name": "Лавина - Действие",
    "main_body": "**Потратьте Страх**, чтобы Дракон обрушил огромный поток снега и льда, покрывающий всех существ в пределах Далекой дистанции. Все цели в этой области должны успешно пройти Бросок Реакции на [Инстинкт](/rule/instinct) или быть погребенными под снегом и камнями, став [*Уязвимыми* ](/rule/vulnerable) до тех пор, пока не выберутся из-под обломков. За каждого персонажа, провалившего бросок реакции, вы получаете один Страх."
  }, {
    "id": 1440,
    "name": "Ледяные Чешуйки - Реакция",
    "main_body": "Когда существо совершает успешную атаку против Дракона в пределах Близкой дистанции, оно должно **отметить Стресс** и стать *Замерзшим* до следующего отдыха или до снятия Стресса. Пока существо *Замерзшее*, оно имеет **Помеху** на броски Атаки."
  }, {
    "id": 1441,
    "name": "Импульс - Реакция",
    "main_body": "Когда Дракон совершает успешную атаку против персонажа, вы получаете Страх."
  }],
  "attack_bonus": "7",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 0,
  "damage_die_size": 10,
  "damage_die_count": 4,
  "stress": 6,
  "hp": 10,
  "difficulty": 18,
  "damage_thresholds": [21, 41],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Молодой Ледяной Дракон",
  "main_body": null,
  "short_description": "Ледяной дракон с четырьмя мощными конечностями и крыльями, покрытыми инеем.",
  "type_name": "Одиночка",
  "motives": "Лавина, защищать логово, летать, замораживать, защищать свое, избивать",
  "weapon_name": "Укусы и когти",
  "experiences": "Защищать свое +3"
}, {
  "id": 2299,
  "slug": "monarch",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "social",
  "image_url": "",
  "features": [{
    "id": 1467,
    "name": "Казнить Их! - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) за каждого персонажа в группе, чтобы группа была осуждена за реальные или вымышленные преступления. Персонаж, который успешно прошел бросок на [Влияние](/rule/presence), может потребовать суда в виде поединка или другой особой формы суда."
  }, {
    "id": 1468,
    "name": "Королевская гвардия - Действие",
    "main_body": "Один раз за сцену, [**отметьте Стресс** ](/rule/marking-stress) чтобы вызвать шесть Приспешников 3-го Ранга, которые появляются на [Средней](/rule/close) дистанции, чтобы исполнить волю Монарха."
  }, {
    "id": 1469,
    "name": "Повод для Войны - Реакция",
    "main_body": "*Долгосрочный отсчёт (8)*. **Потратьте Страх**, чтобы активировать после того, как желание монарха вести войну будет впервые раскрыто. Когда он срабатывает, монарх получает повод для мобилизации нации на войну и поддержку для действий по этому поводу. Вы получаете **1d4** [Страха](/rule/fear)."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 6,
  "damage_die_count": 3,
  "stress": 5,
  "hp": 6,
  "difficulty": 16,
  "damage_thresholds": [16, 32],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Монарх",
  "main_body": null,
  "short_description": "Суверенный правитель нации, обладающий привилегиями традиций и беспрекословной властью в своих владениях.",
  "type_name": "Социальный",
  "motives": "Управлять вассалами, уничтожать соперников, создавать наследие",
  "weapon_name": "Боевой Молот",
  "experiences": "История +3, Благородство +3"
}, {
  "id": 2301,
  "slug": "huge-green-ooze",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "skulk",
  "image_url": "",
  "features": [{
    "id": 1475,
    "name": "Медленный - Пассивный",
    "main_body": "Когда вы [активируете](/rule/spotlight) Слизь, и у него нет [жетона](/rule/token) в блоке характеристик, оно еще не может действовать. Поместите жетон в её блок характеристик и опишите, что оно готовится сделать. Когда вы активируете Слизь, и у неё есть жетон в блоке характеристик, снимите жетон, и оно может действовать."
  }, {
    "id": 1476,
    "name": "Кислотная Форма - Пассивный",
    "main_body": "Когда Слизь совершает успешную атаку, цель должна отметить [Ячейку Брони](/rule/armor-slot) без получения ее преимуществ (она все еще может использовать броню для уменьшения урона). Если она не может отметить Ячейку Брони, она должна отметить дополнительную Рану."
  }, {
    "id": 1477,
    "name": "Обволакивание - Действие",
    "main_body": "Совершите стандартную атаку против цели Вплотную. При успехе, Слизь обволакивает цель, и она должна [отметить 2 Стресса](/rule/marking-stress). Цель должна отметить дополнительный Стресс, когда совершает Бросок Действия. Если Слизь получает [Тяжелый урон](/rule/severe-damage), цель освобождается."
  }, {
    "id": 1478,
    "name": "Деление - Реакция",
    "main_body": "Когда у Слизи 4 или более Ран, вы можете [**потратить Страх** ](/rule/spending-fear), чтобы разделить ее на две [Зеленые Слизи](/adversary/green-ooze) (без отмеченных Ран или Стресса). Немедленно активируйте обе."
  }],
  "attack_bonus": "3",
  "attack_range": "melee",
  "damage_type": "magical",
  "damage_bonus": 1,
  "damage_die_size": 8,
  "damage_die_count": 3,
  "stress": 4,
  "hp": 7,
  "difficulty": 15,
  "damage_thresholds": [15, 30],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Огромная Зелёная Слизь",
  "main_body": null,
  "short_description": "Прозрачный зеленый сгусток кислоты, выше большинства людей.",
  "type_name": "Скрытный",
  "motives": "Маскироваться, красться, окружать, размножаться",
  "weapon_name": "Придатки слизи",
  "experiences": "Смешиваться +3"
}, {
  "id": 2298,
  "slug": "stag-knight",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1464,
    "name": "Удар Сверху - Пассивный",
    "main_body": "Когда рыцарь успешно наносит стандартный удар сверху по цели, он наносит **3d12+3** физического урона вместо стандартного урона."
  }, {
    "id": 1465,
    "name": "Клинок леса - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы совершить атаку против всех целей в пределах [Близкой](/rule/very-close) дистанции. Цели, против которых Рыцарь преуспел, получают физический урон, равный **3d4** + Порог [Ощутимого](/rule/major-damage) Урона цели."
  }, {
    "id": 1466,
    "name": "Колючая броня - Реакция",
    "main_body": "Когда Рыцарь получает урон от атаки Вплотную, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы нанести **1d10+5** физического урона атакующему."
  }],
  "attack_bonus": "3",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 3,
  "damage_die_size": 8,
  "damage_die_count": 3,
  "stress": 5,
  "hp": 7,
  "difficulty": 17,
  "damage_thresholds": [19, 36],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Рыцарь-Олень",
  "main_body": null,
  "short_description": "Рыцарь с огромными, величественными оленьими рогами, одетый в доспехи из опасных шипов.",
  "type_name": "Рядовой",
  "motives": "Изолировать, маневрировать, защищать лес, выпалывать сорняки",
  "weapon_name": "Терновый меч",
  "experiences": "Знание леса +3"
}, {
  "id": 2304,
  "slug": "elemental-spark",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1487,
    "name": "Приспешник (9) - Пассивный",
    "main_body": "Искра побеждена, когда получает любой урон. За каждые 9 урона, нанесенного Искрой персонажем, победите дополнительного Приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1488,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы выбрать цель и [активировать](/rule/spotlight) все Искры в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 5 единиц Физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "0",
  "attack_range": "close",
  "damage_type": "magical",
  "damage_bonus": 5,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 15,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Стихийная Искра",
  "main_body": null,
  "short_description": "Пылающая частица элементального огня.",
  "type_name": "Приспешник",
  "motives": "Взрывать, потреблять, набирать объём",
  "weapon_name": "Вспышки огня",
  "experiences": ""
}, {
  "id": 2292,
  "slug": "vault-guardian-sentinel",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1446,
    "name": "Кинетический Удар - Пассивный",
    "main_body": "Цели, получившие урон от стандартной атаки Стража, отбрасываются на Близкую Дистанцию."
  }, {
    "id": 1447,
    "name": "Загнать в Угол - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы выбрать цель в пределах Близкой дистанции, на которой он сможет сосредоточить внимание. Эта цель получает [Помеху](/rule/advantage-and-disadvantage) на [броски Атаки](/rule/attack-roll), когда находится в пределах Близкой дистанции от Стража. Страж может сосредоточить внимание только на одной цели за раз."
  }, {
    "id": 1448,
    "name": "Взрыв Маны - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы устроить взрыв магии в точке в пределах Далекой дистанции. Все цели в пределах Близкой дистанции от этой точки должны совершить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility). Цели, провалившие бросок, получают **2d8+20** урона от магии и отбрасываются на [Среднюю](/rule/close) дистанцию. Цели, прошедшие бросок, получают половину урона и не отбрасываются."
  }, {
    "id": 1449,
    "name": "Импульс - Реакция",
    "main_body": "Когда Страж совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "3",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 1,
  "damage_die_size": 12,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 6,
  "difficulty": 17,
  "damage_thresholds": [21, 40],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Страж Хранилища — Дозорный",
  "main_body": null,
  "short_description": "Покрытый пылью золотистый конструкт с угловатыми конечностями и огромной булавой вместо руки.",
  "type_name": "Громила",
  "motives": "Уничтожить любой ценой, стереть, защитить",
  "weapon_name": "Заряженная булава",
  "experiences": ""
}, {
  "id": 2291,
  "slug": "vault-guardian-turret",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "ranged",
  "image_url": "/image/adversary/vault-guardian-turret.png",
  "features": [{
    "id": 1442,
    "name": "Медленная стрельба - Пассивный",
    "main_body": "Когда вы [активируете](/rule/spotlight) Турель, и у неё нет [жетона](/rule/token) в блоке характеристик, она не может совершить стандартную атаку. Поместите жетон в её блок характеристик и опишите, что она готовится. Когда вы активируете Турель, и у неё есть жетон в блоке характеристик, удалите жетон, и она может атаковать."
  }, {
    "id": 1443,
    "name": "Пометить цель - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы *Пометить* цель в пределах Далекой дистанции, пока Турель не будет уничтожена или *Помеченная* цель не станет [*Скрытой* ](/rule/hidden). Пока цель *Помечена*, ее [Уклонение](/rule/evasion) уменьшается вдвое."
  }, {
    "id": 1444,
    "name": "Концентрированный огонь - Реакция",
    "main_body": "Когда другой противник наносит урон цели, находящейся в пределах Далекой дистанции от Турели, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы добавить стандартный урон Турели к [броску урона](/rule/damage-roll)."
  }, {
    "id": 1445,
    "name": "Взрыв - Реакция",
    "main_body": "Когда турель уничтожена, она взрывается. Все цели в Средней дистанции должны совершить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) . Цели, которые проваливают, получают **3d20** физического урона. Цели, которые преуспевают, получают половину урона."
  }],
  "attack_bonus": "3",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 3,
  "damage_die_size": 10,
  "damage_die_count": 3,
  "stress": 4,
  "hp": 5,
  "difficulty": 16,
  "damage_thresholds": [20, 32],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Страж Хранилища — Турель",
  "main_body": null,
  "short_description": "Огромная живая турель с усиленной броней и двенадцатью механическими ногами, приводимыми в движение поршневым механизмом.",
  "type_name": "Дальнобойный",
  "motives": "Сосредоточить огонь, заблокировать, отметить, защитить",
  "weapon_name": "Магическая пушка",
  "experiences": ""
}, {
  "id": 2293,
  "slug": "vault-guardian-gaoler",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "support",
  "image_url": "",
  "features": [{
    "id": 1450,
    "name": "Сдерживающий Щит - Пассивный",
    "main_body": "Существа, находящиеся [Вплотную](/rule/melee) к Тюремщику, получают [помеху](/rule/advantage-and-disadvantage) на [броски Атаки](/rule/attack-roll) против него. Существа, оказавшиеся в ловушке внутри Тюремщика, [невосприимчивы](/rule/immunity) к этому свойству."
  }, {
    "id": 1451,
    "name": "Запереть - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы совершить атаку против цели в пределах Близкой дистанции. При успехе цель [*Обездвижена* ](/rule/restrained) внутри Тюремщика до тех пор, пока не будет освобождена успешным [Броском Силы](/rule/strength) (18). Пока цель *Обездвижена*, она может атаковать только Тюремщика."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 2,
  "damage_die_size": 6,
  "damage_die_count": 3,
  "stress": 3,
  "hp": 5,
  "difficulty": 16,
  "damage_thresholds": [19, 33],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Страж Хранилища — Тюремщик",
  "main_body": null,
  "short_description": "Коробчатая, покрытая пылью конструкция с толстыми металлическими распашными дверями на туловище.",
  "type_name": "Поддержка",
  "motives": "Уносить, заманивать в ловушку, защищать, избивать",
  "weapon_name": "Удар Телом",
  "experiences": ""
}, {
  "id": 2296,
  "slug": "treant-sapling",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1459,
    "name": "Приспешник (6) - Пассивный",
    "main_body": "Саженец считается побежденным, когда он получает любой урон. За каждые 6 урона, нанесенного персонажем Саженцу, победите дополнительного Приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1460,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы выбрать цель и [активировать](/rule/spotlight) всех Саженцев в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 8 единиц Физического урона каждый. Урон суммируется."
  }],
  "attack_bonus": "0",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 8,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 14,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Трэнт Саженец",
  "main_body": null,
  "short_description": "Небольшой, разумный саженец дерева.",
  "type_name": "Приспешник",
  "motives": "Сливаться, сохранять лес, избивать, окружать",
  "weapon_name": "Ветки",
  "experiences": ""
}, {
  "id": 2306,
  "slug": "dire-bat",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "skulk",
  "image_url": "/image/adversary/dire-bat.png",
  "features": [{
    "id": 1492,
    "name": "Полёт - Пасивный",
    "main_body": "Во время полета летучая мышь получает бонус +3 к [Сложности](/rule/difficulty)."
  }, {
    "id": 1493,
    "name": "Визг - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы послать высокочастотный визг в направлении всех целей перед Летучей мышью в пределах Далекой дистанции. Эти цели должны отметить 1d4 Стресса."
  }, {
    "id": 1494,
    "name": "Защитник - Реакция",
    "main_body": "Когда союзный вампир отмечает Рану, вы можете **отметить Стресс**, чтобы переместиться Вплотную к атакующему и совершить атаку с [преимуществом](/rule/advantage-and-disadvantage) против него. В случае успеха нанесите **2d6+2** физического урона."
  }],
  "attack_bonus": "2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 7,
  "damage_die_size": 6,
  "damage_die_count": 2,
  "stress": 3,
  "hp": 5,
  "difficulty": 14,
  "damage_thresholds": [16, 30],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Ужасная летучая мышь",
  "main_body": null,
  "short_description": "Ширококрылый питомец, бесконечно преданный своему вампиру-хозяину.",
  "type_name": "Скрытный",
  "motives": "Пикировать, прятаться, защищать лидера",
  "weapon_name": "Когти и зубы",
  "experiences": "Кровожадный +3"
}, {
  "id": 2408,
  "slug": "dire-wight",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 3,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1792,
    "name": "Ужасающий Размах - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы заставить все цели в пределах Близкой дистанции [**отметить Стресс**](/rule/marking-stress), затем совершите атаку против них. Цели, против которых Умертвие преуспело, получают **3d10+1** физического урона."
  }, {
    "id": 1793,
    "name": "Разрывающайся Кожи - Реакция",
    "main_body": "Когда Умертвие получает Ощутимый урон или больше, вы можете **отметить Стресс**, чтобы заставить все цели в пределах Близкой дистанции совершить [Бросок Реакции](/rule/reaction-roll) на [Влияние](/rule/presence). Цели, которые не прошли проверку, [теряют Надежду](/rule/hope) и отбрасываются на Среднюю дистанцию."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 5,
  "damage_die_size": 12,
  "damage_die_count": 3,
  "stress": 4,
  "hp": 8,
  "difficulty": 15,
  "damage_thresholds": [26, 42],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Ужасное Умертвие",
  "main_body": null,
  "short_description": "Нежить-огр, защищающий свою территорию.",
  "type_name": "Громила",
  "motives": "Убивать, подчиняться, защищать, терроризировать",
  "weapon_name": "Когти и зубы",
  "experiences": "Бросить +3"
}, {
  "id": 2289,
  "slug": "arch-necromancer",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "leader",
  "image_url": "/image/adversary/arch-necromancer.png",
  "features": [{
    "id": 1430,
    "name": "Танец Смерти - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) для [активации](/rule/spotlight) **1d4** союзников. Атаки, которые они совершают, находясь в состоянии активации, наносят половину урона, или полный урон, если вы [**потратите Страх** ](/rule/spending-fear)."
  }, {
    "id": 1431,
    "name": "Луч Распада - Действие",
    "main_body": "**Отметьте 2 Стресса**, чтобы заставить все цели в пределах Далекой дистанции совершить [Бросок Реакции](/rule/reaction-roll) на [Силу](/rule/strength) . Цели, провалившие бросок, получают **2d20+12** магического урона, а вы получаете [Страх](/rule/fear). Цели, которые преуспели, получают половину урона. Цель, которая отмечает 2 или более Раны, также должна **отметить 2 Стресса** и становится [*Уязвимой* ](/rule/vulnerable), пока не совершит бросок с [Надеждой](/rule/hope)."
  }, {
    "id": 1432,
    "name": "Откройте врата смерти - Действие",
    "main_body": "**Потратьте Страх**, чтобы вызвать [Легион зомби](/adversary/zombie-legion), который появляется на [Средней](/rule/close) дистанции и сразу же активируется."
  }, {
    "id": 1433,
    "name": "Не сегодня, дорогие мои - Реакция",
    "main_body": "Когда Некромант отметил себе 7 или более Ран, вы можете **потратить Страх**, чтобы телепортировать его в безопасное место для восстановления. Персонаж, успешно прошедший бросок на Инстинкт, может отследить магию телепортации до места назначения."
  }, {
    "id": 1434,
    "name": "Твоя жизнь принадлежит мне - Реакция",
    "main_body": "*Отсчёт ([Цикл ](/rule/loop-countdown)2d6)*. Когда Некромант отметил 6 или более своих Ран, активируйте отсчёт. Когда он срабатывает, нанесите **2d10+6** [прямого](/rule/direct-damage) магического урона цели в пределах Средней дистанции. Затем Некромант **очищает количество Стресса или Ран**, равное количеству Ран, отмеченных целью от этой атаки."
  }],
  "attack_bonus": "6",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 8,
  "damage_die_size": 12,
  "damage_die_count": 4,
  "stress": 8,
  "hp": 9,
  "difficulty": 21,
  "damage_thresholds": [33, 66],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Архинекромант",
  "main_body": null,
  "short_description": "Разлагающийся маг, одетый в темные, рваные одежды.",
  "type_name": "Лидер",
  "motives": "Искажать, разлагать, бежать чтобы сразить в другой раз, воскрешать",
  "weapon_name": "Некротический луч",
  "experiences": "Запретное знание +3, Мудрость веков +3"
}, {
  "id": 2276,
  "slug": "volcanic-dragon-obsidian-predator",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "solo",
  "image_url": "/image/adversary/volcanic-obsidian-predator.png",
  "features": [{
    "id": 1375,
    "name": "Неумолимый (2) - Пассивный",
    "main_body": "Обсидиановый Хищник может быть активирован до двух раз за ход Мастера. [**Потратьте Страх** ](/rule/spending-fear) как обычно, чтобы активировать его."
  }, {
    "id": 1376,
    "name": "Полёт - Пассивный",
    "main_body": "Во время полета Обсидиановый Хищник получает бонус +3 к [Сложности](/rule/difficulty)."
  }, {
    "id": 1377,
    "name": "Обсидиановые чешуйки - Пассивный",
    "main_body": "Обсидиановый хищник имеет сопротивление к физическому урону."
  }, {
    "id": 1378,
    "name": "Хвост, Создающий Лавины - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы совершить атаку против всех целей в пределах Средней дистанции. Цели, против которых Обсидиановый Хищник добился успеха, получают **4d6+4** физического урона и отбрасываются на [Далекую](/rule/far) дистанцию и становятся [*Уязвимыми* ](/rule/vulnerable) до следующего броска [Надежды](/rule/hope)."
  }, {
    "id": 1379,
    "name": "Пикирующая бомба - Действие",
    "main_body": "Если Обсидиановый Хищник летит, **отметьте Стресс**, чтобы выбрать точку в пределах дистанции Далеко. Переместитесь в эту точку и совершите атаку против всех целей в пределах [Близкой](/rule/very-close) дистанции. Цели, против которых Обсидиановый Хищник добился успеха, получают **2d10+6** физического урона, а также должны **отметить Стресс** и потерять Надежду."
  }, {
    "id": 1380,
    "name": "Вспышка ярости (изменение фазы) — реакция",
    "main_body": "Когда Обсидиановый Хищник отмечает свою последнюю Рану, замените его на [Расплавленная Кара](/adversary/volcanic-dragon-molten-scourge) и немедленно активируйте его."
  }],
  "attack_bonus": "8",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 10,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 6,
  "difficulty": 19,
  "damage_thresholds": [33, 65],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Вулканический Дракон: Обсидиановый Хищник",
  "main_body": null,
  "short_description": "Огромное крылатое существо с обсидиановыми чешуйками и невероятно острыми когтями.",
  "type_name": "Одиночка",
  "motives": "Защищайте логово, пикируйте, летайте, охотьтесь, запугивайте",
  "weapon_name": "Обсидиановые когти",
  "experiences": "Охота с высоты +5"
}, {
  "id": 2274,
  "slug": "volcanic-dragon-ashen-tyrant",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "solo",
  "image_url": "/image/adversary/volcanic-ashen-tyrant.png",
  "features": [{
    "id": 1361,
    "name": "Неумолимый (4) - Пассивный",
    "main_body": "Пепельный Тиран может быть активирован до четырех раз за ход Мастера. Для активации тратьте Страх как обычно."
  }, {
    "id": 1362,
    "name": "Загнанный в угол - Пассивный",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) вместо того, чтобы тратить Страх на активацию Пепельного Тирана."
  }, {
    "id": 1363,
    "name": "Поврежденные крылья - Пассивный",
    "main_body": "Во время полета Пепельный Тиран получает бонус +1 к [Сложности](/rule/difficulty)."
  }, {
    "id": 1364,
    "name": "Прах к праху - Пассивный",
    "main_body": "Когда персонаж совершает неудачный бросок в пределах Средней дистанции от Пепельного Тирана, он теряет [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear). Если персонаж не может потерять Надежду, он должен отметить Рану."
  }, {
    "id": 1365,
    "name": "Отчаянное буйство - Действие",
    "main_body": "**Отметьте Стресс**, чтобы совершить атаку против всех целей в пределах Средней дистанции. Цели, против которых Пепельный Тиран добился успеха, получают **2d20+2** физического урона, отбрасываются на Среднюю дистанцию от того места, где они находились, и должны **отметить Стресс**."
  }, {
    "id": 1366,
    "name": "Пепельное облако - Действие",
    "main_body": "**Потратьте Страх**, чтобы ударить по земле и поднять облако пепла в пределах [Далекой](/rule/far) дистанции. Находясь в облаке пепла, цель получает [Помеху](/rule/advantage-and-disadvantage) на Броски Действия. Облако пепла рассеивается, когда противник в следующий раз активируется."
  }, {
    "id": 1367,
    "name": "Апокалиптический разгром - Действие",
    "main_body": "*Отсчёт (1d12)*. **Потратьте Страх**, чтобы активировать. Он отсчитывается, когда персонаж бросает со Страхом. Когда отчёт срабатывает, Пепельный Тиран начинает метаться, нанося урон окружающей среде (например, землетрясение, лавина или обрушение стен). Все цели в пределах Далекой дистанции должны совершить [Бросок Реакции](/rule/reaction-roll) на [Силу](/rule/strength). Цели, провалившие бросок, получают **2d10+10** физического урона и [*Обездвижены* ](/rule/restrained) обломками, пока не освободятся с помощью успешного броска Силы. Цели, преуспевшие в проверке, получают половину урона. Если Пепельный Тиран побежден до завершения [отсчёта](/rule/countdown), немедленно запустите отсчёт как разрушение, вызванное его агонией."
  }],
  "attack_bonus": "10",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 15,
  "damage_die_size": 12,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 8,
  "difficulty": 18,
  "damage_thresholds": [29, 55],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Вулканический Дракон: Пепельный Тиран",
  "main_body": null,
  "short_description": "Ни один враг никогда не имел наглости так ранить дракона. Когда лава остывает, она превращается в пепел, как и прошлые враги дракона.",
  "type_name": "Одиночка",
  "motives": "Задыхаться, летать, запугивать, убить или быть убитым",
  "weapon_name": "Когти и зубы",
  "experiences": "Охота с высоты +5"
}, {
  "id": 2275,
  "slug": "volcanic-dragon-molten-scourge",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "solo",
  "image_url": "/image/adversary/volcanic-molten-sourge.png",
  "features": [{
    "id": 1368,
    "name": "Неумолимый (3) - Пассивный",
    "main_body": "Дракон может быть активирован до трех раз за ход Мастера. Для активации используйте Страх как обычно."
  }, {
    "id": 1369,
    "name": "Треснутые чешуйки - Пассивный",
    "main_body": "Когда Расплавленная Кара получает урон, брось количество **d6**, равное количеству отмеченных Ран. За каждый результат 4 или выше, ты получаешь [Страх](/rule/fear)."
  }, {
    "id": 1370,
    "name": "Разрушительная сила - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress) чтобы совершить атаку против цели в пределах [Близкой](/rule/very-close) дистанции. В случае успеха цель получает **4d8+1** физического урона, теряет [Надежду](/rule/hope) и отбрасывается на Среднюю дистанцию. Расплавленная Кара снимает один Стресс."
  }, {
    "id": 1371,
    "name": "Извержение - Действие",
    "main_body": "**Потратьте Страх**, чтобы извергнуть лаву из-под чешуек Расплавленной Кары, заполнив область в пределах Близкой Дистанции расплавленной лавой. Все цели в этой области должны успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) или получить **4d6+6** физического урона и быть отброшенными на Среднюю Дистанцию. Эта область остается лавой. Когда существо, кроме Расплавленного Бича, входит в эту область или действует, находясь в ней, оно должно отметить 6 Ран."
  }, {
    "id": 1372,
    "name": "Вулканическое дыхание - Реакция",
    "main_body": "Когда Расплавленная Кара получает [Ощутимый урон](/rule/major-damage), бросьте **d10**. При результате 8 или выше, Расплавленная Кара выдыхает поток лавы перед собой на дистанции [Далеко](/rule/far). Все цели в этой области должны совершить Бросок Реакции на Проворность. Цели, которые не справятся, получают **2d10+4** физического урона, **отмечают 1d4 Стресса** и становятся *Уязвимыми*, пока не снимут Стресс. Цели, которые справятся, получают половину урона и должны **отметить Стресс**."
  }, {
    "id": 1373,
    "name": "Брызги лавы - Реакция",
    "main_body": "Когда Расплавленная Кара получает [Тяжелый урон](/rule/severe-damage) от атаки в ближнем бою, из раны хлещет расплавленная кровь, нанося нападающему **2d10+4** [прямого](/rule/direct-damage) физического урона."
  }, {
    "id": 1374,
    "name": "Пепельная месть (изменение фазы) — реакция",
    "main_body": "Когда Расплавленная Кара отмечает последнюю Рану, замените его на [Пепельного Тирана](/adversary/volcanic-dragon-ashen-tyrant) и немедленно активируйте его."
  }],
  "attack_bonus": "9",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 4,
  "damage_die_size": 12,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 7,
  "difficulty": 20,
  "damage_thresholds": [30, 58],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Вулканический Дракон: Расплавленная Кара",
  "main_body": null,
  "short_description": "В ярости от ран дракон взрывается, превратившись в расплавленную лаву.",
  "type_name": "Одиночка",
  "motives": "Облить лавой, сжечь, отразить захватчиков, переместить",
  "weapon_name": "Покрытые Лавой Когти",
  "experiences": "Охота с высоты +5"
}, {
  "id": 2282,
  "slug": "high-seraph",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "leader",
  "image_url": "",
  "features": [{
    "id": 1400,
    "name": "Неумолимый (3) - Пассивный",
    "main_body": "Серафим может быть активирован до трех раз за ход Мастера. [**Потратьте Страх** ](/rule/spending-fear) как обычно, чтобы активировать его."
  }, {
    "id": 1401,
    "name": "Божественный полет - Пассивный",
    "main_body": "Пока Серафим летит, **потратьте Страх**, чтобы переместиться на [Далекую](/rule/far) дистанцию вместо [Средней](/rule/close) перед тем, как совершить действие."
  }, {
    "id": 1402,
    "name": "Обвинение - Действие",
    "main_body": "**Потратьте Страх**, чтобы сделать цель *Виновной* в глазах бога Серафима до тех пор, пока Серафим не будет побежден. Пока цель *Виновна*, она не получает [Надежду](/rule/hope) при результате с Надеждой. Когда Серафим успешно наносит стандартный удар по *Виновной* цели, он наносит [Тяжелый урон](/rule/severe-damage) вместо своего стандартного урона. Серафим может помечать только одну цель за раз."
  }, {
    "id": 1403,
    "name": "Божественные лучи - Действие",
    "main_body": "[Отметьте Стресс](/rule/marking-stress), чтобы направить частицу божественности в виде жгучего луча света, который поражает до двадцати целей в пределах дистанции [Очень Далеко](/rule/very-far). Цели должны совершить [Бросок Реакции](/rule/presence) на [Влияние](/rule/presence), с помехой, если они помечены как *Виновные*. Цели, провалившие бросок, получают **4d6+12** урона от магии. Цели, прошедшие бросок, получают половину урона."
  }, {
    "id": 1404,
    "name": "Мы Едины - Действие",
    "main_body": "Один раз за сцену, **потратьте Страх**, чтобы активировать всех противников в пределах Далекой дистанции. Атаки, которые они совершают, находясь будучи активными, наносят в два раза меньше урона."
  }],
  "attack_bonus": "8",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 10,
  "damage_die_size": 10,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 7,
  "difficulty": 20,
  "damage_thresholds": [37, 70],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Высший Серафим",
  "main_body": null,
  "short_description": "Божественный воин, глава священного отряда воинов, исполняющих волю своего бога.",
  "type_name": "Лидер",
  "motives": "Применять догмы, летать, выносить приговоры, наказывать",
  "weapon_name": "Священный меч",
  "experiences": "Божественное знание +3"
}, {
  "id": 2278,
  "slug": "outer-realms-corrupter",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "support",
  "image_url": "",
  "features": [{
    "id": 1383,
    "name": "Удар, сокрушающий волю - Пассивный",
    "main_body": "Когда персонаж получает урон от Искусителя, он теряет [Надежду](/rule/hope)."
  }, {
    "id": 1384,
    "name": "Извергнуть обломки реальности - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы извергнуть частично переваренные фрагменты потребленной реальности на все цели в пределах [Средней](/rule/close) дистанции. Цели должны успешно пройти [Бросок Реакции](/rule/reaction-roll) на [Знание](/rule/knowledge) или **отметить 2 Стресса**."
  }],
  "attack_bonus": "7",
  "attack_range": "veryclose",
  "damage_type": "magical",
  "damage_bonus": 5,
  "damage_die_size": 8,
  "damage_die_count": 4,
  "stress": 3,
  "hp": 4,
  "difficulty": 19,
  "damage_thresholds": [27, 47],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Искуситель из внешних миров",
  "main_body": null,
  "short_description": "Меняющаяся, бесформенная масса, словно сделанная из хроматического света.",
  "type_name": "Поддержка",
  "motives": "Сбивать с толку, отвлекать, подавлять",
  "weapon_name": "Разъедающая ложноножка",
  "experiences": ""
}, {
  "id": 2281,
  "slug": "kraken",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "solo",
  "image_url": "/image/adversary/kraken.png",
  "features": [{
    "id": 1395,
    "name": "Неумолимый (3) - Пассивный",
    "main_body": "Кракен может быть активирован до трех раз за ход Мастера. Для активации тратьте Страх как обычно."
  }, {
    "id": 1396,
    "name": "Множество щупалец - Пассивный",
    "main_body": "Пока у Кракена 7 или менее отмеченных Ран, он может совершить свою стандартную атаку против двух целей в пределах [дистанции](/rule/range)."
  }, {
    "id": 1397,
    "name": "Хватать и топить - Действие",
    "main_body": "Совершите Бросок Атаки против цели в пределах Средней дистанции. При успехе, [**отметьте Стресс** ](/rule/marking-stress), чтобы схватить цель щупальцем и потащить под воду. Цель [*Обездвижена* ](/rule/restrained) и [*Уязвима* ](/rule/vulnerable) до тех пор, пока не освободится с помощью успешного [Броска Силы](/rule/strength) или пока Кракен не получит Ощутимый урон или больше. Пока цель *Обездвижена* и *Уязвима* таким образом, она должна **отметить Стресс**, когда совершает Бросок Действия."
  }, {
    "id": 1398,
    "name": "Кипящий взрыв - Действие",
    "main_body": "**Потратьте Страх**, чтобы выплеснуть струю кипятка на любое количество целей в линии в пределах Далекой дистанции. Все цели должны успешно совершить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) или получить **4d6+9** физического урона. Если цель отмечает [Ячейку Брони](/rule/armor-slot) для уменьшения урона, она также должна **отметить Стресс**."
  }, {
    "id": 1399,
    "name": "Импульс - Реакция",
    "main_body": "Когда Кракен совершает успешную атаку против персонажа, вы получаете [Страх](/rule/fear)."
  }],
  "attack_bonus": "7",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 10,
  "damage_die_size": 12,
  "damage_die_count": 4,
  "stress": 8,
  "hp": 11,
  "difficulty": 20,
  "damage_thresholds": [35, 70],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Кракен",
  "main_body": null,
  "short_description": "Легендарное морское чудовище, больше самого большого галеона, с щупальцами, покрытыми присосками, и ужасающей пастью.",
  "type_name": "Одиночка",
  "motives": "Потреблять, сокрушать, топить, бороться",
  "weapon_name": "Щупальца",
  "experiences": "Плавание +3"
}, {
  "id": 2272,
  "slug": "zombie-legion",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "horde",
  "image_url": "",
  "features": [{
    "id": 1353,
    "name": "Орда (2d6+5) - Пассивный",
    "main_body": "Когда Легион отметил половину или более Ран, его стандартная атака наносит **2d6+5** физического урона."
  }, {
    "id": 1354,
    "name": "Неуступчивый - Пассивный",
    "main_body": "Легион обладает сопротивлением к физическому урону."
  }, {
    "id": 1355,
    "name": "Неумолимый (2) - Пассивный",
    "main_body": "Легион может быть активирован до двух раз за ход Мастера. Для активации Легиона потратьте Страх как обычно."
  }, {
    "id": 1356,
    "name": "Подавить - Реакция",
    "main_body": "Когда Легион получает [Легкий урон](/rule/minor-damage) от атаки [Вплотную](/rule/melee) к нему, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы совершить стандартную атаку с [преимуществом](/rule/advantage-and-disadvantage) против атакующего."
  }],
  "attack_bonus": "2",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 10,
  "damage_die_size": 6,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 8,
  "difficulty": 17,
  "damage_thresholds": [25, 45],
  "horde_per_hp": 3,
  "language": "ru",
  "name": "Легион Зомби",
  "main_body": null,
  "short_description": "Большая стая нежити, по-прежнему сильной, несмотря на гниющее тело.",
  "type_name": "Орда",
  "motives": "Пожирать мозг, разрывать плоть, окружать",
  "weapon_name": "Руки мертвецов",
  "experiences": ""
}, {
  "id": 2279,
  "slug": "outer-realms-abomination",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1385,
    "name": "Хаотическая форма - Пассивный",
    "main_body": "Когда Мерзость атакует, бросьте **2d4** и используйте результат в качестве модификатора атаки."
  }, {
    "id": 1386,
    "name": "Дезориентирующее присутствие - Пассивный",
    "main_body": "Когда цель получает урон от Мерзости, она должна совершить [Бросок Реакции](/rule/instinct) на [Инстинкт](/rule/instinct). При провале она получает [Помеху](/rule/advantage-and-disadvantage) на свой следующий [бросок действия](/rule/action-roll), а вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1387,
    "name": "Дрожь Реальности - Действие",
    "main_body": "[**Потратьте Страх**](/rule/spending-fear), чтобы сотрясти границы реальности в пределах [Далекой](/rule/far) дистанции от Мерзости. Все цели в этой области должны успешно выполнить Бросок Реакции через [Знание](/rule/knowledge) или стать *Оторванными* от реальности до конца сцены. Когда *Оторванная* цель тратит [Надежду](/rule/hope) или отмечает [Ячейки Брони](/rule/armor-slot), Рану или Стресс, она должна удвоить потраченное или отмеченное количество."
  }, {
    "id": 1388,
    "name": "Нереальная форма - Реакция",
    "main_body": "Когда Мерзость получает урон, уменьшите его на **1d20**. Если Мерзость получает 1 или менее Раны от успешной атаки против него, вы получаете Страх."
  }],
  "attack_bonus": "2d4",
  "attack_range": "veryclose",
  "damage_type": "magical",
  "damage_bonus": 13,
  "damage_die_size": 6,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 7,
  "difficulty": 19,
  "damage_thresholds": [35, 71],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Мерзость из внешних миров",
  "main_body": null,
  "short_description": "Хаотичная постоянно меняющаяся пародия на жизнь.",
  "type_name": "Громила",
  "motives": "Разрушать, пожирать, подрывать",
  "weapon_name": "Массивная ложноножка",
  "experiences": ""
}, {
  "id": 2280,
  "slug": "oracle-of-doom",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "solo",
  "image_url": "/image/adversary/oracle-of-doom.png",
  "features": [{
    "id": 1389,
    "name": "Ужасающий - Пассивный",
    "main_body": "Когда Оракул совершает успешную атаку, все персонажи в пределах [Далёкой дистанции](/rule/far) теряют [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1390,
    "name": "Стены сближаются - Пассивный",
    "main_body": "Когда существо терпит неудачу в пределах [Очень Далёкой дистанции](/rule/very-far) от Оракула, оно должно [**отметить Стресс** ](/rule/marking-stress)."
  }, {
    "id": 1391,
    "name": "Предречь судьбу - Действие",
    "main_body": "[**Потратьте Страх**](/rule/spending-fear), чтобы показать цели в пределах [Далёкой дистанции](/rule/far) видение ее личного кошмара. Цель должна совершить [Бросок Реакции](/rule/reaction-roll) на [Знание](/rule/knowledge). При провале она теряет всю Надежду и получает **2d20+4** [прямого](/rule/direct-damage) магического урона. При успехе она получает половину урона и теряет Надежду."
  }, {
    "id": 1392,
    "name": "Призыв мучителей - Действие",
    "main_body": "Один раз в день, **потратив 2 Страха**, вызовите **2d4** Приспешников 2-го Ранга или ниже, связанных с одним из личных кошмаров персонажа. Они появляются на [Средней](/rule/close) дистанции от этого персонажа."
  }, {
    "id": 1393,
    "name": "Зловещее Знание - Реакция",
    "main_body": "Когда Оракул видит смертное существо, он мгновенно узнает один из личных кошмаров этого смертного."
  }, {
    "id": 1394,
    "name": "Мстительная судьба - Реакция",
    "main_body": "Когда Оракул отмечает Рану от атаки в пределах [Близкой](/rule/very-close) дистанции, вы можете **отметить Стресс**, чтобы отбросить атакующего на дистанцию Далеко и нанести **2d10+4** физического урона."
  }],
  "attack_bonus": "8",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 9,
  "damage_die_size": 8,
  "damage_die_count": 4,
  "stress": 10,
  "hp": 11,
  "difficulty": 20,
  "damage_thresholds": [38, 68],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Оракул Погибели",
  "main_body": null,
  "short_description": "Высоченный бессмертный являющийся воплощением судьбы, проклятый видеть только плохие исходы.",
  "type_name": "Одиночка",
  "motives": "Изменить окружение, осудить, обескуражить, отбросить",
  "weapon_name": "Психическая атака",
  "experiences": "Безграничные знания +4"
}, {
  "id": 2288,
  "slug": "fallen-shock-troop",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1427,
    "name": "Приспешник (12) - Пассивный",
    "main_body": "Пехотинец считается побежденным, если он получил любой урон. За каждые 12 урона, нанесенного персонажем Пехотинцу, победите дополнительного Приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1428,
    "name": "Аура Погибели - Пассивный",
    "main_body": "Когда персонаж отмечает Рану от атаки Пехотинца, он теряет [Надежду](/rule/hope)."
  }, {
    "id": 1429,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы выбрать цель и [активировать](/rule/spotlight) всех Пехотинцев в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются[Вплотную](/rule/melee) к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 12 единиц физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "2",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 12,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 18,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Падший Пехотинец",
  "main_body": null,
  "short_description": "Проклятая душа, подчиненная воле Падшего.",
  "type_name": "Приспешник",
  "motives": "Разрушать, подчинять, заслужить облегчение, наказывать",
  "weapon_name": "Проклятая Секира",
  "experiences": ""
}, {
  "id": 2287,
  "slug": "fallen-sorcerer",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "support",
  "image_url": "",
  "features": [{
    "id": 1423,
    "name": "Сожжение - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear) , чтобы вызвать всепоглощающий огненный шквал и совершить атаку против всех целей в пределах [Средней](/rule/close) дистанции. Цели, против которых чародей добился успеха, получают **2d10+6** [прямого](/rule/direct-damage) урона от магии."
  }, {
    "id": 1424,
    "name": "Ночной кошмар - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы заманить цель в пределах Далекой дистанции в мощную иллюзию ее худших страхов. Пока цель находится в ловушке, она [*Обездвижена* ](/rule/restrained) и [*Уязвима* ](/rule/vulnerable) пока не вырвется, совершив [Бросок Инстинкта](/rule/instinct), что отменит оба состояния."
  }, {
    "id": 1425,
    "name": "Скользкий - Реакция",
    "main_body": "Когда чародей получает урон от атаки, он может телепортироваться на расстояние до Далекого."
  }, {
    "id": 1426,
    "name": "Оковы вины - Реакция",
    "main_body": "*Отсчёт ([Цикл](/rule/loop-countdown) 2d6)*. Когда Чародей [активирован](/rule/spotlight), активируйте отсчёт. Когда он срабатывает, все цели в пределах Далекой дистанции становятся *Уязвимыми* и должны **отметить Стресс**, переживая свои самые большие сожаления. Цель может освободиться от своего сожаления, успешно выполнив бросок на [Влияние](/rule/presence) или [Силу](/rule/strength). Если персонаж не смог освободиться, он теряет [Надежду](/rule/hope)."
  }],
  "attack_bonus": "4",
  "attack_range": "far",
  "damage_type": "magical",
  "damage_bonus": 10,
  "damage_die_size": 6,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 6,
  "difficulty": 19,
  "damage_thresholds": [26, 42],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Падший Чародей",
  "main_body": null,
  "short_description": "Мощный маг, связанный сделками, которые он совершил при жизни.",
  "type_name": "Поддержка",
  "motives": "Завоевывать, обескураживать, доминировать, мучить",
  "weapon_name": "Проклятый Посох",
  "experiences": "Знание древних +2"
}, {
  "id": 2286,
  "slug": "fallen-warlord-realm-breaker",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "solo",
  "image_url": "/image/adversary/fallen-realm-breaker.png",
  "features": [{
    "id": 1417,
    "name": "Неумолимый (2) - Пассивный",
    "main_body": "Губитель Миров может быть активирован до двух раз за ход Мастера. **Потратьте Страх**, как обычно, чтобы активировать его."
  }, {
    "id": 1418,
    "name": "Броня Огненного Духа - Пассивный",
    "main_body": "Когда Губитель Миров получает урон, уменьшите его на **2d10**."
  }, {
    "id": 1419,
    "name": "Плеть мучений - Действие",
    "main_body": "**Отметьте Стресс**, чтобы совершить стандартную атаку против всех целей в пределах Близкой дистанции. Когда цель использует броню для уменьшения урона от этой атаки, она должна **отметить 2 Ячейки Брони**."
  }, {
    "id": 1420,
    "name": "Всепоглощающая Ярость - Реакция",
    "main_body": "*Отсчёт (Убывающий 8)*. Когда Губитель Миров впервые активирован, активируйте отсчёт. Когда он срабатывает, создайте поток воплощённой ярости, разрывающий плоть с костей. Все цели в пределах Далекой дистанции должны совершить Бросок Реакции на Влияние. Цели, провалившие бросок, получают **2d6+10** прямого магического урона. Цели, успешно прошедшие бросок, получают половину урона. За каждую Рану, отмеченную этим уроном, вызывайте Падшего Пехотинца в Близкой дистанции от цели, которая отметила эту Рану. Если отсчёт уменьшает своё максимальное значение до 0, Губитель Миров отмечает свои оставшиеся Раны, и все цели в пределах Дистанции Далеко должны **отметить все оставшийся** Раны и совершить Предсмертный Ход."
  }, {
    "id": 1421,
    "name": "Вестник смерти - Реакция",
    "main_body": "Когда цель отмечает Рану от атаки Губителя Миров, все персонажи в пределах Далекой дистанции от цели теряют Надежду."
  }, {
    "id": 1422,
    "name": "Я не знаю поражений (Смена фазы) - Реакция",
    "main_body": "Когда Губитель Миров отмечает последнюю Рану, замените его [Непобеждённым Чемпионом](/adversary/fallen-warlord-undefeated-champion) и немедленно активируйте его."
  }],
  "attack_bonus": "7",
  "attack_range": "close",
  "damage_type": "physical",
  "damage_bonus": 7,
  "damage_die_size": 8,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 8,
  "difficulty": 20,
  "damage_thresholds": [36, 66],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Полководец Падших: Губитель Миров",
  "main_body": null,
  "short_description": "Падший бог, охваченный яростью и обидой, обладающий тысячелетним опытом в ломании духа героев.",
  "type_name": "Одиночка",
  "motives": "Искажать, доминировать, наказывать, ломать слабых",
  "weapon_name": "Шипастый кнут",
  "experiences": "Завоевание +3, История +2, Запугивание +3"
}, {
  "id": 2285,
  "slug": "fallen-warlord-undefeated-champion",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "solo",
  "image_url": "/image/adversary/fallen-undefeated-champion.png",
  "features": [{
    "id": 1410,
    "name": "Неумолимый (3) - Пассивный",
    "main_body": "Непобеждённый Чемпион может быть активирован до трех раз за ход Мастера. [**Потратьте Страх** ](/rule/spotlight) как обычно, чтобы активировать его."
  }, {
    "id": 1411,
    "name": "Неустойчивая броня — Пассивный",
    "main_body": "Когда Непобеждённый Чемпион получает урон, уменьшите его на **1d10**."
  }, {
    "id": 1412,
    "name": "Разрушающий удар - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы совершить стандартную атаку против всех целей в пределах Близкой дистанции. Персонажи, против которых Чемпион преуспел, теряют количество [Надежды](/rule/hope) равное Ранам, которые они отметили от этой атаки."
  }, {
    "id": 1413,
    "name": "Бесконечные легионы - Действие",
    "main_body": "**Потратьте Страх**, чтобы вызвать количество [Падших Пехотинцев](/adversary/fallen-shock-troop), равное удвоенному количеству персонажей. Пехотинцы появляются на дистанции [Далеко](/rule/far)."
  }, {
    "id": 1414,
    "name": "Круг осквернения - Реакция",
    "main_body": "*Отсчёт (1d8)*. Когда Непобеждённый Чемпион впервые активирован, активируйте [отсчёт](/rule/countdown). Когда он срабатывает, активируйте магический круг, покрывающий область в пределах дистанции Далеко от Чемпиона. Цель в этой области становится [*Уязвимой* ](/rule/vulnerable), пока не покинет круг. Круг можно удалить, нанеся Непобеждённому Чемпиону [Тяжелый урон](/rule/severe-damage)."
  }, {
    "id": 1415,
    "name": "Импульс - Реакция",
    "main_body": "Когда Непобеждённый Чемпион совершает успешную атаку против персонажа игрока, вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1416,
    "name": "Громовержец - Реакция",
    "main_body": "Когда цель получает Ран от атаки Непобеждённого Чемпиона, все персонажи в пределах Далекой дистанции от цели теряют Надежду."
  }],
  "attack_bonus": "8",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 13,
  "damage_die_size": 12,
  "damage_die_count": 4,
  "stress": 5,
  "hp": 11,
  "difficulty": 18,
  "damage_thresholds": [35, 58],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Полководец Падших: Непобеждённый Чемпион",
  "main_body": null,
  "short_description": "То, чего могут бояться только самые смелые.",
  "type_name": "Одиночка",
  "motives": "Нанести безжалостный удар, наказать непокорных, обеспечить победу любой ценой",
  "weapon_name": "Разрушительный меч",
  "experiences": "Завоевание +3, История +2, Запугивание +3"
}, {
  "id": 2277,
  "slug": "outer-realms-thrall",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1381,
    "name": "Приспешник (13) - Пассивный",
    "main_body": "Прислужник считается побежденным, когда получает любой урон. За каждые 13 урона, нанесенного прислужнику, победите дополнительного Приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1382,
    "name": "Групповая Атака - Действие",
    "main_body": "[**Потратьте Страх** ](/rule/spending-fear), чтобы выбрать цель и [активировать](/rule/spotlight) всех Прислужников в пределах [Средней](/rule/close) дистанции от нее. Эти Приспешники перемещаются [Вплотную](/rule/melee) к цели и совершают один общий [бросок Атаки](/rule/attack-roll). В случае успеха они наносят по 11 единиц физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "3",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 11,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 1,
  "hp": 1,
  "difficulty": 17,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Прислужник из внешних миров",
  "main_body": null,
  "short_description": "Неясная человекоподобная форма, лишенная памяти и личности.",
  "type_name": "Приспешник",
  "motives": "Уничтожить, вызвать отвращение, дезориентировать, запугать",
  "weapon_name": "Когти и зубы",
  "experiences": ""
}, {
  "id": 2284,
  "slug": "hallowed-archer",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "ranged",
  "image_url": "",
  "features": [{
    "id": 1408,
    "name": "Наказать виновных - Пассивный",
    "main_body": "Лучник наносит двойной урон целям, отмеченным *Виновными* [Высшим серафимом](/adversary/high-seraph)."
  }, {
    "id": 1409,
    "name": "Божественный удар - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы совершить стандартную атаку против не более чем трёх целей."
  }],
  "attack_bonus": "4",
  "attack_range": "far",
  "damage_type": "physical",
  "damage_bonus": 8,
  "damage_die_size": 8,
  "damage_die_count": 4,
  "stress": 2,
  "hp": 3,
  "difficulty": 19,
  "damage_thresholds": [25, 45],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Святой Лучник",
  "main_body": null,
  "short_description": "Духовные воины с священными луками.",
  "type_name": "Дальнобойный",
  "motives": "Сосредоточить огонь, подчиняйться, перемещаться, вести залповый огонь",
  "weapon_name": "Священный длинный лук",
  "experiences": ""
}, {
  "id": 2283,
  "slug": "hallowed-soldier",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "minion",
  "image_url": "",
  "features": [{
    "id": 1405,
    "name": "Приспешник (13) - Пассивный",
    "main_body": "Солдат считается побежденным, если он получил любой урон. За каждые 13 единиц урона, нанесенного солдату персонажем, победите еще одного приспешника в пределах [дистанции](/rule/range), на которую действует атака."
  }, {
    "id": 1406,
    "name": "Божественный полет - Пассивный",
    "main_body": "Пока Солдат летит, [**потратьте Страх** ](/rule/spending-fear), чтобы переместиться на [Далекую](/rule/far) дистанцию вместо [Средней](/rule/close) перед тем, как совершить действие."
  }, {
    "id": 1407,
    "name": "Груповая Атака - Действие",
    "main_body": "**Потратьте Страх**, чтобы выбрать цель и активировать всех Святых Солдат в Средней дистанции от нее. Эти Приспешники перемещаются Вплотную к цели и совершают один общий [бросок Атаки](/rule/attack-roll). При успехе они наносят по 10 единиц Физического урона каждый. Объедините этот урон."
  }],
  "attack_bonus": "2",
  "attack_range": "melee",
  "damage_type": "physical",
  "damage_bonus": 10,
  "damage_die_size": 0,
  "damage_die_count": 0,
  "stress": 2,
  "hp": 1,
  "difficulty": 18,
  "damage_thresholds": null,
  "horde_per_hp": null,
  "language": "ru",
  "name": "Святой Солдат",
  "main_body": null,
  "short_description": "Души верных, вознесенные с божественным оружием.",
  "type_name": "Приспешник",
  "motives": "Подчиняться, обходить, наказывать, нападать",
  "weapon_name": "Меч и Щит",
  "experiences": ""
}, {
  "id": 2273,
  "slug": "perfected-zombie",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "bruiser",
  "image_url": "",
  "features": [{
    "id": 1357,
    "name": "Ужасающий - Пассивный",
    "main_body": "Когда Зомби совершает успешную атаку, все персонажи в пределах [Далекой](/rule/far) дистанции теряют [Надежду](/rule/hope), а вы получаете [Страх](/rule/fear)."
  }, {
    "id": 1358,
    "name": "Устрашающее влияние - Пассивный",
    "main_body": "Персонажи не могут использовать против Зомби свойства, что тратят надежду."
  }, {
    "id": 1359,
    "name": "Идеальный удар - Действие",
    "main_body": "[**Отметьте Стресс** ](/rule/marking-stress), чтобы совершить стандартную атаку против всех целей в пределах Близкой дистанции. Цели, против которых зомби добился успеха, становятся [*Уязвимыми* ](/rule/vulnerable) до следующего отдыха."
  }, {
    "id": 1360,
    "name": "Умелый спекулянт - Реакция",
    "main_body": "Когда другой противник наносит урон цели, находящейся в пределах Близкой дистанции от Зомби, вы можете [**потратить Страх** ](/rule/spending-fear), чтобы добавить стандартный урон атаки Зомби к [броску урона](/rule/damage-roll)."
  }],
  "attack_bonus": "4",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 15,
  "damage_die_size": 12,
  "damage_die_count": 4,
  "stress": 4,
  "hp": 9,
  "difficulty": 20,
  "damage_thresholds": [40, 70],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Совершенный Зомби",
  "main_body": null,
  "short_description": "Высокий, мускулистый зомби с магической силой и ловкостью.",
  "type_name": "Громила",
  "motives": "Потреблять, преследовать, калечить, терроризировать",
  "weapon_name": "Секира",
  "experiences": ""
}, {
  "id": 2392,
  "slug": "bladedance-jester",
  "source_slugs": ["core", "srd"],
  "campaign_frame_slugs": ["none"],
  "tier": 4,
  "type_slug": "standard",
  "image_url": "",
  "features": [{
    "id": 1746,
    "name": "Танцуй со Мной - Действие",
    "main_body": "Совершите атаку против цели, находящейся на Близкой дистанции. При успехе цель должна успешно выполнить [Бросок Реакции](/rule/reaction-roll) на [Проворность](/rule/agility) или быть притянута [Вплотную](/rule/melee) к Шуту, и при следующем её ходе вы [получаете Страх](/rule/gaining-fear)."
  }, {
    "id": 1747,
    "name": "Беззвучное стаккато - Реакция",
    "main_body": "Когда Шут получает урон, вы можете [**отметить Стресс** ](/rule/marking-stress), чтобы уменьшить урон на **3d6**. Затем Шут может переместиться в точку в пределах [Средней](/rule/close) дистанции."
  }],
  "attack_bonus": "3",
  "attack_range": "veryclose",
  "damage_type": "physical",
  "damage_bonus": 5,
  "damage_die_size": 8,
  "damage_die_count": 4,
  "stress": 3,
  "hp": 5,
  "difficulty": 19,
  "damage_thresholds": [22, 50],
  "horde_per_hp": null,
  "language": "ru",
  "name": "Шут Танца Клинка",
  "main_body": null,
  "short_description": "Гибкий цирковой артист, настроенный на танец из других миров.",
  "type_name": "Рядовой",
  "motives": "Пуститься в пляс, развлекать, увлекать",
  "weapon_name": "Сцепленные чакрамы",
  "experiences": "Комедия +2, Танец +3"
}]