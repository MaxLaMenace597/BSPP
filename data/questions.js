// Banque de questions « Objectif BSPP ».
// Format : Q(thème, question, [bonne réponse, mauvaise, mauvaise, mauvaise], explication)
// La bonne réponse est toujours écrite en premier ; l'app mélange l'ordre à l'affichage.
(function(){
const THEMES = {
  histoire:{n:'Histoire BSPP', e:'🏛️'},
  orga:{n:'Organisation & chiffres', e:'🗺️'},
  recrut:{n:'Recrutement & formation', e:'🎯'},
  grades:{n:'Grades & vie militaire', e:'🎖️'},
  secours:{n:'Secourisme', e:'🚑'},
  incendie:{n:'Incendie', e:'🔥'},
  engins:{n:'Engins & matériel', e:'🚒'},
  alerte:{n:'Alerte & numéros', e:'📞'},
  sigles:{n:'Sigles', e:'🔤'},
  culture:{n:'Culture générale', e:'🇫🇷'},
  sport:{n:'Sport & épreuves', e:'🏃'}
};
const L = [];
const count = {};
function Q(t, q, c, e){ count[t] = (count[t]||0) + 1; L.push({ id: t + '-' + count[t], t, q, c, e: e || '' }); }

/* ================= HISTOIRE ================= */
Q('histoire', "Quel drame est à l'origine de la création des sapeurs-pompiers de Paris ?", ["L'incendie de l'ambassade d'Autriche en 1810", "L'incendie de l'Opéra-Comique en 1887", "Le grand incendie de Londres en 1666", "L'incendie du Bazar de la Charité en 1897"], "Le 1er juillet 1810, un bal à l'ambassade d'Autriche tourne au drame. Napoléon Ier y échappe de peu.");
Q('histoire', "À quelle date a eu lieu l'incendie de l'ambassade d'Autriche ?", ["1er juillet 1810", "18 septembre 1811", "14 juillet 1789", "2 décembre 1804"]);
Q('histoire', "Qui donnait le bal à l'ambassade d'Autriche en 1810 ?", ["Le prince de Schwarzenberg, ambassadeur d'Autriche", "Le prince de Metternich", "Talleyrand", "Joseph Fouché"]);
Q('histoire', "Le bal de 1810 était donné en l'honneur…", ["du mariage de Napoléon Ier avec Marie-Louise d'Autriche", "du sacre de Napoléon", "de la victoire d'Austerlitz", "de la naissance du roi de Rome"]);
Q('histoire', "Quel souverain a décidé de confier la lutte contre le feu à Paris à un corps militaire ?", ["Napoléon Ier", "Napoléon III", "Louis XVIII", "Louis-Philippe"]);
Q('histoire', "Date du décret impérial créant le bataillon de sapeurs-pompiers de Paris ?", ["18 septembre 1811", "1er juillet 1810", "1er mars 1967", "4 décembre 1811"], "C'est la date de naissance officielle de l'unité.");
Q('histoire', "Quel était le nom de l'unité créée en 1811 ?", ["Bataillon de sapeurs-pompiers de Paris", "Régiment de sapeurs-pompiers de Paris", "Brigade de sapeurs-pompiers de Paris", "Compagnie des gardes-pompes"]);
Q('histoire', "Pourquoi Napoléon a-t-il choisi un corps militaire pour combattre le feu ?", ["Le modèle militaire était vu comme une garantie de discipline et d'efficacité", "Il n'y avait plus de volontaires civils", "Pour surveiller la population", "Pour faire des économies"], "Le rapport sur l'incendie de 1810 avait montré les failles du système existant.");
Q('histoire', "La BSPP a été la première unité… ", ["de pompiers professionnels en France", "de pompiers volontaires en France", "de pompiers à cheval en Europe", "de secours en montagne"]);
Q('histoire', "En quelle année le bataillon devient-il le Régiment de sapeurs-pompiers de Paris ?", ["1867", "1811", "1897", "1967"], "Un décret de décembre 1866 transforme le bataillon en régiment à partir de 1867.");
Q('histoire', "À quelle date le régiment devient-il la Brigade de sapeurs-pompiers de Paris ?", ["1er mars 1967", "1er janvier 1867", "8 mai 1945", "18 septembre 1911"]);
Q('histoire', "Qu'est-ce qui change en 1967 avec la création de la Brigade ?", ["Elle protège aussi les trois départements de la petite couronne (92, 93, 94)", "Elle quitte l'armée", "Elle est rattachée au SAMU", "Elle ne fait plus que des incendies"]);
Q('histoire', "Pourquoi parle-t-on de « sapeurs »-pompiers ?", ["Parce qu'ils appartiennent à l'arme du Génie, dont les soldats sont des sapeurs", "Parce qu'ils creusaient des puits", "Parce qu'ils portaient des haches de sapeur", "Parce que le mot vient de « sapin »"]);
Q('histoire', "Depuis quand la planche à rétablissement est-elle présente dans les casernes de pompiers de Paris ?", ["1895", "1811", "1945", "1967"], "Elle apparaît à partir du 16 juin 1895 et reste l'agrès de référence pour l'admission au service incendie.");
Q('histoire', "Que représente la planche pour un sapeur-pompier de Paris ?", ["L'agrès de référence pour l'admission au service incendie et un baromètre de sa forme", "Un banc pour se reposer en caserne", "Une épreuve réservée aux officiers", "Un outil de désincarcération"]);
Q('histoire', "En quelle année a eu lieu l'incendie du Bazar de la Charité ?", ["1897", "1810", "1903", "1921"], "Le 4 mai 1897, rue Jean-Goujon (8e arrondissement).");
Q('histoire', "Dans quelle rue se trouvait le Bazar de la Charité ?", ["Rue Jean-Goujon (8e)", "Rue de Rivoli", "Rue de Trévise", "Boulevard Haussmann"]);
Q('histoire', "Quelle personnalité, sœur de l'impératrice Sissi, est morte dans l'incendie du Bazar de la Charité ?", ["La duchesse d'Alençon", "Marie-Antoinette", "La princesse de Lamballe", "La reine Hortense"]);
Q('histoire', "En quelle année l'incendie du métro Couronnes a-t-il eu lieu ?", ["1903", "1897", "1934", "1958"], "Il a fait 84 morts et a changé les règles de sécurité du métro.");
Q('histoire', "Combien de morts a fait l'incendie du métro Couronnes en 1903 ?", ["84", "12", "350", "1 200"]);
Q('histoire', "En quelle année l'Opéra-Comique a-t-il été ravagé par un incendie meurtrier ?", ["1887", "1810", "1903", "1971"]);
Q('histoire', "En quelle année les pompiers de Paris se dotent-ils de leur première ambulance de réanimation avec médecin ?", ["1967", "1811", "1945", "1999"], "Dès le 7 novembre 1967.");
Q('histoire', "En quelle année le premier secours évacuation (PSE), engin propre à la BSPP, est-il mis en service ?", ["1985", "1955", "1967", "2005"]);
Q('histoire', "Quelle cathédrale parisienne a brûlé le 15 avril 2019 ?", ["Notre-Dame de Paris", "Le Sacré-Cœur", "Saint-Sulpice", "La basilique de Saint-Denis"]);
Q('histoire', "Quel robot a été utilisé par la BSPP pendant l'incendie de Notre-Dame ?", ["Colossus", "Atlas", "Spot", "Robocop"], "Robot chenillé porte-lance, capable d'aller là où c'était trop dangereux pour les hommes.");
Q('histoire', "En janvier 2019, une explosion de gaz rue de Trévise (Paris 9e) a coûté la vie à…", ["deux sapeurs-pompiers de Paris", "aucun pompier", "dix sapeurs-pompiers de Paris", "un officier de police"]);
Q('histoire', "Combien de sapeurs-pompiers de Paris ont été engagés lors des attentats du 13 novembre 2015 ?", ["Environ 430, avec 125 engins", "Environ 40", "Environ 4 000", "Aucun, seule la police est intervenue"], "Chiffres donnés par le général commandant la BSPP devant les députés en décembre 2015.");
Q('histoire', "Quel anniversaire la BSPP a-t-elle fêté en 2011 ?", ["Son bicentenaire (200 ans)", "Ses 100 ans", "Ses 50 ans", "Ses 300 ans"]);
Q('histoire', "Pendant la Seconde Guerre mondiale, des pompiers de Paris ont participé à la Libération au sein du réseau de Résistance…", ["Sécurité parisienne", "Combat", "Libération-Nord", "Alliance"]);
Q('histoire', "Comment s'appelait le corps de pompiers parisiens avant 1811 ?", ["Les gardes-pompes", "Les mousquetaires du feu", "La garde républicaine", "Les sapeurs du roi"]);
Q('histoire', "Qui a introduit les premières pompes à incendie à Paris au début du XVIIIe siècle ?", ["François Dumouriez du Périer", "Vauban", "Louis Pasteur", "Le baron Haussmann"]);
Q('histoire', "L'empereur était-il présent lors de l'incendie de l'ambassade d'Autriche ?", ["Oui, il y a échappé de peu", "Non, il était en campagne", "Non, il n'avait pas été invité", "Oui, et il a été blessé gravement"]);
Q('histoire', "En 2026, combien d'années d'existence comptent les sapeurs-pompiers de Paris depuis le décret de 1811 ?", ["215 ans", "115 ans", "59 ans", "300 ans"]);
Q('histoire', "Le statut « brigade » date de 1967. Quelle unité militaire est plus grande qu'un régiment ?", ["Une brigade", "Un bataillon", "Une compagnie", "Une section"], "Section < compagnie < bataillon/régiment < brigade < division.");

/* ================= ORGANISATION & CHIFFRES ================= */
Q('orga', "La BSPP est une unité de…", ["l'armée de Terre", "la Gendarmerie nationale", "la Marine nationale", "la Police nationale"]);
Q('orga', "À quelle arme de l'armée de Terre la BSPP est-elle rattachée ?", ["Le Génie", "L'Infanterie", "L'Artillerie", "Le Train"]);
Q('orga', "Sous l'autorité de qui la BSPP est-elle placée pour emploi ?", ["Le préfet de police de Paris", "Le maire de Paris", "Le ministre de la Santé", "Le chef d'état-major des armées"]);
Q('orga', "Quel territoire la BSPP protège-t-elle ?", ["Paris et les départements 92, 93 et 94", "Paris intra-muros uniquement", "Toute l'Île-de-France", "Paris, Yvelines et Essonne"]);
Q('orga', "Combien de communes la BSPP défend-elle ?", ["124", "20", "36", "1 281"], "Paris + les communes des Hauts-de-Seine, de Seine-Saint-Denis et du Val-de-Marne.");
Q('orga', "Quelle superficie environ couvre la BSPP ?", ["Environ 800 km²", "Environ 105 km²", "Environ 12 000 km²", "Environ 50 km²"]);
Q('orga', "Combien de centres de secours compte la BSPP ?", ["71", "20", "150", "312"]);
Q('orga', "Combien de centres de secours « Exploration longue durée » (ELD) compte la BSPP ?", ["3", "1", "10", "71"]);
Q('orga', "Combien de militaires compte la BSPP (2025) ?", ["Un peu plus de 8 700", "Environ 1 500", "Environ 25 000", "Environ 43 000"], "8 731 militaires en 2025, dont environ 300 officiers et 1 500 sous-officiers.");
Q('orga', "Combien d'officiers environ compte la BSPP ?", ["300", "30", "3 000", "1 500"]);
Q('orga', "Combien de sous-officiers environ compte la BSPP ?", ["1 500", "150", "6 000", "300"]);
Q('orga', "Quel rang mondial occupe la BSPP par ses effectifs parmi les corps de sapeurs-pompiers ?", ["3e, après Tokyo et New York", "1er", "10e", "2e, après Londres"]);
Q('orga', "Quels sont les deux corps de pompiers plus grands que la BSPP ?", ["Tokyo et New York (FDNY)", "Londres et Berlin", "Pékin et Moscou", "Marseille et Lyon"]);
Q('orga', "De combien de groupements se compose la BSPP ?", ["6", "3", "12", "4"]);
Q('orga', "Combien de groupements d'incendie et de secours (GIS) compte la BSPP ?", ["3", "6", "4", "71"]);
Q('orga', "Quel secteur couvre le 1er GIS ?", ["La Seine-Saint-Denis (93) et le nord de Paris", "Le Val-de-Marne (94) et le sud-est de Paris", "Les Hauts-de-Seine (92) et l'ouest de Paris", "Tout Paris intra-muros"]);
Q('orga', "Quel secteur couvre le 2e GIS ?", ["Le Val-de-Marne (94) et l'est / sud-est de Paris", "La Seine-Saint-Denis (93) et le nord de Paris", "Les Hauts-de-Seine (92) et l'ouest de Paris", "Les aéroports"]);
Q('orga', "Quel secteur couvre le 3e GIS ?", ["Les Hauts-de-Seine (92) et le sud-ouest / ouest de Paris", "La Seine-Saint-Denis (93) et le nord de Paris", "Le Val-de-Marne (94) et le sud-est de Paris", "Le centre de Paris"]);
Q('orga', "Où se trouve l'état-major du 1er GIS ?", ["Montmartre (Paris 18e)", "Masséna (Paris 13e)", "Courbevoie (92)", "Valenton (94)"]);
Q('orga', "Où se trouve l'état-major du 2e GIS ?", ["Masséna (Paris 13e)", "Montmartre (Paris 18e)", "Courbevoie (92)", "Saint-Denis (93)"]);
Q('orga', "Où se trouve l'état-major du 3e GIS ?", ["Courbevoie (92)", "Montmartre (Paris 18e)", "Masséna (Paris 13e)", "Champerret (Paris 17e)"]);
Q('orga', "Où se trouve l'état-major de la BSPP ?", ["Porte de Champerret (Paris 17e)", "Île de la Cité", "Place Beauvau", "Fort de Vincennes"], "Adresse : 1, place Jules-Renard, 75017 Paris.");
Q('orga', "Quel est le 4e groupement de la BSPP ?", ["Le groupement d'appuis et de secours (GAS)", "Le groupement de soutiens et de secours (GSS)", "Le groupement de formation (GFIS)", "Le 4e GIS"]);
Q('orga', "Que regroupe le groupement d'appuis et de secours (GAS) ?", ["Les unités spécialisées : NRBC, nautique, cynotechnie, GRIMP…", "La logistique et les garages", "Les écoles de formation", "Les centres d'appels"]);
Q('orga', "Où se trouve l'état-major du GAS ?", ["Saint-Denis (93)", "Valenton (94)", "Courbevoie (92)", "Montmartre (18e)"]);
Q('orga', "Combien de centres de secours nautiques compte la BSPP ?", ["2", "0", "7", "15"]);
Q('orga', "Combien de centres de secours NRBC compte la BSPP ?", ["3", "1", "12", "71"]);
Q('orga', "Quel est le rôle du groupement de soutiens et de secours (GSS) ?", ["Le soutien logistique et technique de la brigade", "La lutte contre les feux de forêt", "La formation des recrues", "Le secours en mer"]);
Q('orga', "Quel est le rôle du groupement de formation, d'instruction et de secours (GFIS) ?", ["Former les recrues et faire progresser tous les grades", "Gérer les appels d'urgence", "Réparer les engins", "Protéger les monuments"]);
Q('orga', "Où se trouve l'état-major du GFIS (l'école) ?", ["Valenton (94)", "Saint-Denis (93)", "Courbevoie (92)", "Versailles (78)"]);
Q('orga', "Combien d'interventions la BSPP a-t-elle réalisées en 2024 ?", ["474 053", "47 405", "4 740 530", "1 302 287"], "Soit environ 1 295 par jour.");
Q('orga', "Combien d'interventions la BSPP a-t-elle réalisées en 2025 ?", ["486 294 (+3 %)", "48 629", "1,3 million", "250 000"]);
Q('orga', "Combien d'interventions par jour en moyenne la BSPP a-t-elle faites en 2024 ?", ["Environ 1 300", "Environ 130", "Environ 13 000", "Environ 500"]);
Q('orga', "Quelle part des interventions de la BSPP concerne le secours à personne (2024) ?", ["84 %", "25 %", "50 %", "99 %"]);
Q('orga', "Quelle part des interventions de la BSPP concerne les incendies (2024) ?", ["Environ 2 %", "Environ 40 %", "Environ 20 %", "Environ 75 %"], "9 147 incendies en 2024. Le cœur de l'activité, c'est le secours aux victimes.");
Q('orga', "Combien d'appels d'urgence la BSPP a-t-elle reçus en 2024 ?", ["Environ 1,3 million", "Environ 130 000", "Environ 13 millions", "Environ 480 000"]);
Q('orga', "Combien de vies les pompiers de Paris ont-ils sauvées lors d'incendies en 2024 ?", ["88", "8", "880", "8 800"]);
Q('orga', "Combien d'incendies la BSPP a-t-elle traités en 2024 ?", ["9 147", "914", "91 470", "474 053"]);
Q('orga', "Combien de centres d'appels possède la BSPP ?", ["2", "1", "71", "6"]);
Q('orga', "Combien de détachements compte la BSPP ?", ["20", "2", "71", "200"]);
Q('orga', "Combien de centres d'appuis et de secours compte la BSPP ?", ["8", "3", "20", "71"]);
Q('orga', "Quel est le grade du commandant de la BSPP ?", ["Général de division", "Colonel", "Général d'armée", "Contrôleur général"]);
Q('orga', "Qui commande la BSPP en 2026 ?", ["Le général de division Arnaud de Cacqueray-Valmenier", "Le général Joseph Dupré La Tour", "Le général Jean-Marie Gontier", "Le général Jean-Claude Gallet"], "Nom à revérifier juste avant ton entretien : les commandants changent tous les 2 à 4 ans. Avant lui, le général Joseph Dupré La Tour l'avait commandée à partir d'août 2022.");
Q('orga', "Qui est le préfet de police de Paris (2026) ?", ["Patrice Faure", "Laurent Nuñez", "Didier Lallement", "Michel Delpuech"], "Nommé par décret du 22 octobre 2025. Laurent Nuñez, son prédécesseur, est devenu ministre de l'Intérieur.");
Q('orga', "Combien de gardes de 24 h un sapeur-pompier de Paris fait-il environ par mois ?", ["12", "4", "20", "30"]);
Q('orga', "Quelle est la moyenne d'âge d'un militaire du rang à la BSPP ?", ["28 ans", "19 ans", "35 ans", "42 ans"]);
Q('orga', "Combien de temps en moyenne un sapeur-pompier de Paris reste-t-il dans la brigade ?", ["7 ans", "1 an", "20 ans", "35 ans"]);
Q('orga', "Combien de nouvelles recrues ont rejoint la BSPP en 2023 ?", ["1 058", "105", "10 580", "300"]);
Q('orga', "Combien de centres de secours défendent Paris intra-muros en première intention ?", ["25", "71", "5", "124"]);
Q('orga', "Une compagnie d'incendie et de secours regroupe généralement…", ["2 à 4 centres de secours", "1 seul centre", "20 centres", "un groupement entier"]);
Q('orga', "Dans un centre de secours, qui commande la garde incendie ?", ["Le chef de garde incendie", "Le chef d'agrès", "Le conducteur", "L'officier de garde compagnie"]);
Q('orga', "Qui commande un engin (et son équipage) en intervention ?", ["Le chef d'agrès", "Le chef de groupement", "Le préfet de police", "Le plus ancien sapeur"]);
Q('orga', "La BSPP assure aussi la sécurité d'un site stratégique en Guyane. Lequel ?", ["Le Centre spatial guyanais de Kourou", "Le port de Cayenne", "L'aéroport de Fort-de-France", "La base de Djibouti"]);
Q('orga', "Quelle est la plus grande unité de sapeurs-pompiers d'Europe ?", ["La BSPP", "Les marins-pompiers de Marseille", "Les pompiers de Londres", "Le SDIS du Nord"]);
Q('orga', "Quel est l'autre corps de pompiers militaires en France, à Marseille ?", ["Le bataillon de marins-pompiers (Marine nationale)", "La brigade de pompiers de l'air", "Le régiment de pompiers du Sud", "Il n'y en a pas"]);
Q('orga', "Le préfet de police est aussi préfet de la zone de défense et de sécurité de…", ["Paris (Île-de-France)", "Nord", "Sud", "Ouest"]);

/* ================= RECRUTEMENT & FORMATION ================= */
Q('recrut', "Quel âge faut-il avoir pour devenir sapeur-pompier de Paris ?", ["Entre 18 et 25 ans", "Entre 16 et 35 ans", "Entre 21 et 30 ans", "Pas de limite d'âge"], "Jusqu'à 30 ans pour les spécialistes.");
Q('recrut', "Jusqu'à quel âge peut-on être recruté comme spécialiste à la BSPP ?", ["30 ans", "25 ans", "40 ans", "18 ans"]);
Q('recrut', "Quelle nationalité faut-il avoir ?", ["Française", "Européenne", "Peu importe", "Française ou suisse"]);
Q('recrut', "Quel diplôme minimum faut-il pour être sapeur-pompier de Paris ?", ["Le brevet des collèges", "Le baccalauréat", "Un BTS", "Aucun diplôme ni brevet"]);
Q('recrut', "Quelle condition sur le casier judiciaire ?", ["Il doit être vierge", "Pas de condition", "Moins de 3 condamnations", "Seulement pas de condamnation récente"]);
Q('recrut', "Où faut-il prendre rendez-vous pour postuler à la BSPP ?", ["Dans un CIRFA", "Directement dans une caserne", "À la mairie", "À Pôle emploi"], "Le conseiller CIRFA remet le dossier et le calendrier.");
Q('recrut', "Que comprennent les évaluations de l'armée de Terre ?", ["Visite médicale, tests psychotechniques, épreuves sportives et entretien de motivation", "Un concours écrit de culture générale", "Uniquement un test sportif", "Un stage de 3 mois"]);
Q('recrut', "Quelles sont les épreuves sportives de sélection de l'armée de Terre pour un homme ?", ["Luc Léger, tractions et test de Killy", "100 m, saut en longueur et natation", "Pompes, abdos et 3 000 m", "Corde, planche et natation"]);
Q('recrut', "Depuis 2025, le test de Killy a remplacé quelle épreuve dans les sélections de l'armée ?", ["Les squats", "Les pompes", "Le 3 000 m", "Le grimper de corde"]);
Q('recrut', "Pour les femmes, quelle épreuve remplace les tractions aux tests de l'armée de Terre ?", ["Le tirage poulie haute", "Les pompes sur les genoux", "La planche", "Le lancer de poids"]);
Q('recrut', "Combien de temps dure l'agrément technique BSPP ?", ["24 heures", "1 semaine", "1 heure", "1 mois"]);
Q('recrut', "Où se passent les tests aquatiques de l'agrément technique ?", ["À la caserne Masséna (Paris 13e)", "À la piscine Molitor", "Dans la Seine", "À Valenton"]);
Q('recrut', "Que passe-t-on à l'école de Valenton pendant l'agrément technique ?", ["Tractions max, parcours SPP, quiz et entretien", "Un examen de conduite", "Un test de cuisine", "Un concours écrit de maths"]);
Q('recrut', "Sur quoi porte l'entretien de l'agrément technique ?", ["Ta motivation et ta connaissance de l'histoire et de l'organisation de la BSPP", "Uniquement tes notes scolaires", "Ton permis de conduire", "Ton salaire souhaité"]);
Q('recrut', "Dans quel délai reçoit-on la réponse de l'état-major après l'envoi du dossier ?", ["Dans les deux mois", "Le jour même", "Dans un an", "Il n'y a jamais de réponse"]);
Q('recrut', "Quel contrat signe-t-on à l'incorporation ?", ["Un contrat VDAT d'un an", "Un CDI", "Un contrat de 10 ans", "Un stage non rémunéré"]);
Q('recrut', "Que signifie VDAT ?", ["Volontaire de l'armée de Terre", "Volontaire de défense et d'appui territorial", "Vacataire d'appui technique", "Volontaire diplômé de l'armée de Terre"]);
Q('recrut', "Quel contrat la BSPP propose-t-elle après environ 6 mois ?", ["Un contrat EVAT de 5 ans", "Un CDI de fonctionnaire", "Un contrat de 6 mois", "Un contrat d'apprentissage"]);
Q('recrut', "Que signifie EVAT ?", ["Engagé volontaire de l'armée de Terre", "Élève volontaire en apprentissage technique", "Équipier volontaire d'assistance terrestre", "Engagé à vie de l'armée de Terre"]);
Q('recrut', "Si tu ne signes pas l'EVAT, que se passe-t-il ?", ["Tu dois quand même aller au bout de ton VDAT d'un an", "Tu pars le jour même", "Tu deviens automatiquement sous-officier", "Tu rembourses ta formation"]);
Q('recrut', "Combien de temps dure environ la formation initiale du sapeur-pompier de Paris ?", ["Environ 4 mois (puis environ 2 mois en caserne)", "2 semaines", "2 ans", "1 an"]);
Q('recrut', "Que fait-on pendant les 15 premiers jours de formation ?", ["Les bases militaires et la discipline", "Les feux de forêt", "Le permis poids lourd", "Les gardes en caserne"]);
Q('recrut', "Quels examens de secourisme passe-t-on pendant la formation initiale ?", ["Le PSE 1 et le PSE 2", "Le BNSSA", "Le diplôme d'infirmier", "Le PSC 1 seulement"]);
Q('recrut', "Pendant la 3e phase (une semaine), où va la recrue ?", ["En centre de secours, sur deux gardes de 48 h", "En mission à l'étranger", "En vacances", "À la préfecture de police"]);
Q('recrut', "Sur quoi porte la 4e phase de la formation (2 mois) ?", ["La lutte contre l'incendie, jusqu'à l'examen ACIS", "La conduite des engins", "Le secourisme en montagne", "Les langues étrangères"]);
Q('recrut', "Que signifie ACIS ?", ["Admission en compagnie d'incendie et de secours", "Agent de contrôle incendie et sécurité", "Attestation de capacité d'intervention spécialisée", "Accès au centre d'instruction supérieur"]);
Q('recrut', "Que devient la recrue après avoir réussi l'ACIS ?", ["Officiellement sapeur-pompier de Paris", "Sergent", "Sapeur-pompier volontaire", "Elle reste en école un an"]);
Q('recrut', "Ton affectation en caserne dépend…", ["des besoins de la brigade (tes souhaits ne sont pas toujours suivis)", "uniquement de ton souhait", "du tirage au sort", "de ton adresse"]);
Q('recrut', "À quel âge peut-on devenir jeune sapeur-pompier de Paris (JSPP) ?", ["14 à 15 ans dans l'année", "10 ans", "17 ans", "18 ans"]);
Q('recrut', "Au barème des tests de l'armée (hommes), quel palier du Luc Léger donne 20/20 ?", ["Le palier 12", "Le palier 8", "Le palier 15", "Le palier 10"]);
Q('recrut', "Au barème de l'armée (hommes), quel niveau du Luc Léger donne environ 10/20 ?", ["Palier 7 + 15 s", "Palier 3", "Palier 10", "Palier 12"]);
Q('recrut', "Au barème de l'armée, combien de temps faut-il tenir au Killy pour avoir 20/20 ?", ["2 min 48 s", "1 min", "5 min", "45 s"]);
Q('recrut', "Au barème de l'armée, quel temps au Killy correspond à 10/20 ?", ["1 min 28 s", "30 s", "2 min 48 s", "4 min"]);
Q('recrut', "Quelle est la durée maximale du test de Killy aux sélections ?", ["4 minutes", "10 minutes", "1 minute", "Pas de limite"]);
Q('recrut', "Quels conseils pour l'entretien de motivation ?", ["Connaître la BSPP, expliquer pourquoi toi et pourquoi Paris, rester sincère", "Réciter un texte appris par cœur", "Parler surtout du salaire", "Dire que tu hésites avec d'autres métiers"]);
Q('recrut', "Pourquoi être militaire change le quotidien d'un pompier de Paris ?", ["Il vit en caserne avec la discipline militaire, l'uniforme et la hiérarchie", "Il peut refuser une intervention", "Il ne fait jamais de sport", "Il travaille uniquement de jour"]);
Q('recrut', "Quelle qualité est la plus attendue d'une recrue BSPP ?", ["L'esprit d'équipe et la rigueur", "L'individualisme", "La rapidité à tout prix, même sans consignes", "Être le plus fort physiquement, même seul"]);

/* ================= GRADES & VIE MILITAIRE ================= */
Q('grades', "À la BSPP (Génie), comment appelle-t-on le militaire du rang de base ?", ["Sapeur", "Soldat", "Matelot", "Aviateur"]);
Q('grades', "Quel est le premier grade de sous-officier ?", ["Sergent", "Caporal", "Adjudant", "Major"]);
Q('grades', "Quel est le grade le plus élevé des sous-officiers ?", ["Major", "Adjudant-chef", "Sergent-chef", "Aspirant"]);
Q('grades', "Quel est le premier grade d'officier ?", ["Sous-lieutenant", "Lieutenant", "Aspirant", "Capitaine"]);
Q('grades', "Dans le Génie et l'Infanterie, comment s'appelle le grade de commandant ?", ["Chef de bataillon", "Chef d'escadron", "Capitaine de corvette", "Commandant de bord"]);
Q('grades', "Combien d'étoiles porte un général de brigade ?", ["2", "1", "3", "5"]);
Q('grades', "Combien d'étoiles porte un général de division ?", ["3", "2", "4", "5"]);
Q('grades', "Combien d'étoiles porte un général de corps d'armée ?", ["4", "3", "5", "2"]);
Q('grades', "Combien d'étoiles porte un général d'armée ?", ["5", "4", "3", "6"]);
Q('grades', "Combien de galons porte un sous-lieutenant ?", ["1", "2", "3", "0"]);
Q('grades', "Combien de galons porte un lieutenant ?", ["2", "1", "3", "4"]);
Q('grades', "Combien de galons porte un capitaine ?", ["3", "2", "4", "5"]);
Q('grades', "Combien de galons porte un commandant (chef de bataillon) ?", ["4", "3", "5", "2"]);
Q('grades', "Combien de galons porte un colonel ?", ["5", "4", "6", "3"]);
Q('grades', "Qu'est-ce qui distingue les galons d'un lieutenant-colonel de ceux d'un colonel ?", ["5 galons dont 2 d'une autre couleur", "6 galons", "Une étoile en plus", "Aucune différence"]);
Q('grades', "Comment s'adresse-t-on à un lieutenant (homme) ?", ["« Mon lieutenant »", "« Lieutenant »", "« Monsieur »", "« Chef »"]);
Q('grades', "Comment s'adresse-t-on à un sergent ?", ["« Sergent »", "« Mon sergent »", "« Chef »", "« Monsieur le sergent »"]);
Q('grades', "Comment s'adresse-t-on à un sergent-chef ?", ["« Chef »", "« Mon sergent-chef »", "« Mon chef »", "« Sergent »"]);
Q('grades', "Comment s'adresse-t-on à un adjudant ?", ["« Mon adjudant »", "« Adjudant »", "« Chef »", "« Mon lieutenant »"]);
Q('grades', "Comment s'adresse-t-on à un major ?", ["« Major »", "« Mon major »", "« Chef »", "« Mon commandant »"]);
Q('grades', "Comment s'adresse-t-on à une femme capitaine ?", ["« Capitaine » (sans « mon »)", "« Ma capitaine »", "« Madame la générale »", "« Chef »"]);
Q('grades', "Comment s'adresse-t-on à un général ?", ["« Mon général »", "« Général »", "« Monsieur »", "« Excellence »"]);
Q('grades', "Comment s'adresse-t-on à un chef de bataillon ?", ["« Mon commandant »", "« Mon chef »", "« Mon bataillon »", "« Major »"]);
Q('grades', "Qui est le chef des armées en France ?", ["Le Président de la République", "Le Premier ministre", "Le ministre des Armées", "Le chef d'état-major des armées"]);
Q('grades', "Quels grades forment les militaires du rang ?", ["Sapeurs, caporaux et caporaux-chefs", "Sergents et adjudants", "Lieutenants et capitaines", "Uniquement les sapeurs de 2e classe"]);
Q('grades', "Quel grade vient au-dessus de caporal-chef chez les militaires du rang ?", ["Caporal-chef de 1re classe", "Sergent-major", "Caporal de 1re classe", "Aspirant"]);
Q('grades', "De quelle main fait-on le salut militaire ?", ["La main droite", "La main gauche", "Les deux mains", "Peu importe"]);
Q('grades', "Quelle est la sainte patronne des pompiers ?", ["Sainte Barbe", "Sainte Geneviève", "Sainte Jeanne d'Arc", "Sainte Thérèse"]);
Q('grades', "À quelle date fête-t-on la Sainte-Barbe ?", ["Le 4 décembre", "Le 14 juillet", "Le 1er novembre", "Le 25 décembre"]);
Q('grades', "Quelle est la devise des sapeurs-pompiers de Paris ?", ["« Sauver ou périr »", "« Honneur et patrie »", "« Toujours prêts »", "« Courage et dévouement »"]);
Q('grades', "Quand ont traditionnellement lieu les bals des pompiers ?", ["Les 13 et 14 juillet", "Le 4 décembre", "Le 1er janvier", "Le 11 novembre"]);
Q('grades', "Quelle inscription figure sur les drapeaux et étendards de l'armée française ?", ["« Honneur et Patrie »", "« Sauver ou périr »", "« Liberté, Égalité, Fraternité »", "« Dieu et mon droit »"]);
Q('grades', "Où défilent les sapeurs-pompiers de Paris le 14 juillet ?", ["Sur les Champs-Élysées", "Sur le Champ-de-Mars uniquement", "À Versailles", "Ils ne défilent pas"]);
Q('grades', "Combien de temps dure une garde classique en centre de secours ?", ["24 heures", "8 heures", "72 heures", "12 heures"]);
Q('grades', "Que signifie l'expression « être de garde » en caserne ?", ["Être en service, prêt à partir en intervention à tout moment", "Garder l'entrée de la caserne", "Être en congé", "Être puni"]);

/* ================= SECOURISME ================= */
Q('secours', "Quelles sont les trois étapes de l'action de secours ?", ["Protéger, alerter, secourir", "Alerter, courir, soigner", "Secourir, protéger, alerter", "Observer, filmer, alerter"]);
Q('secours', "Quelle est la première chose à faire en arrivant sur un accident ?", ["Se protéger et protéger la victime d'un sur-accident", "Déplacer immédiatement la victime", "Prendre une photo", "Donner à boire à la victime"]);
Q('secours', "Quand peut-on faire un dégagement d'urgence d'une victime ?", ["Face à un danger réel, vital, immédiat et impossible à supprimer", "Toujours, pour la mettre au calme", "Uniquement si elle le demande", "Jamais"]);
Q('secours', "Comment apprécie-t-on la conscience d'une victime ?", ["On lui pose des questions simples et on lui demande de serrer la main / ouvrir les yeux", "On la pince fort", "On lui jette de l'eau froide", "On prend son pouls"]);
Q('secours', "Comment libère-t-on les voies aériennes d'une victime inconsciente ?", ["Bascule prudente de la tête en arrière et élévation du menton", "On la met assise", "On lui tape dans le dos", "On lui tourne la tête sur le côté"]);
Q('secours', "Combien de temps au maximum pour vérifier si une victime respire ?", ["10 secondes", "1 minute", "3 secondes", "30 secondes"]);
Q('secours', "Comment vérifie-t-on la respiration ?", ["En regardant le ventre et la poitrine, en écoutant et en sentant le souffle", "En prenant la température", "En vérifiant les pupilles", "En demandant à la victime de tousser"]);
Q('secours', "Victime inconsciente qui respire normalement : que fais-tu ?", ["Je la mets en position latérale de sécurité (PLS) et j'alerte", "Je commence le massage cardiaque", "Je la laisse sur le dos", "Je la mets assise"]);
Q('secours', "Victime inconsciente qui ne respire pas (ou respire anormalement) : que fais-tu ?", ["J'alerte, je commence la RCP et je fais chercher un défibrillateur", "Je la mets en PLS", "J'attends les secours sans rien faire", "Je lui donne de l'eau"]);
Q('secours', "À quel rythme fait-on les compressions thoraciques ?", ["100 à 120 par minute", "60 par minute", "200 par minute", "30 par minute"]);
Q('secours', "Quelle profondeur pour les compressions chez l'adulte ?", ["5 à 6 cm", "1 à 2 cm", "10 cm", "Le plus fort possible, sans limite"]);
Q('secours', "Quel rapport compressions / insufflations chez l'adulte ?", ["30 compressions pour 2 insufflations", "15 pour 1", "5 pour 1", "50 pour 5"]);
Q('secours', "Où place-t-on les mains pour masser un adulte ?", ["Au centre de la poitrine, sur la moitié inférieure du sternum", "Sur le ventre", "Sur le côté gauche du thorax", "Sur la gorge"]);
Q('secours', "Chez un secouriste en équipe, par quoi commence la RCP d'un enfant ou d'un nourrisson ?", ["5 insufflations", "30 compressions", "Le défibrillateur seul", "Une claque dans le dos"]);
Q('secours', "Après une noyade, par quoi commence-t-on la réanimation ?", ["Par 5 insufflations", "Par la PLS", "Par 30 compressions sans insufflation", "En faisant vomir l'eau"], "Le manque d'oxygène est la cause de l'arrêt : on apporte de l'air d'abord.");
Q('secours', "Avec quoi masse-t-on un nourrisson ?", ["Avec deux doigts (ou les deux pouces)", "Avec le talon des deux mains", "Avec le poing", "On ne masse jamais un nourrisson"]);
Q('secours', "Quelle profondeur de compression chez l'enfant ?", ["Environ un tiers de l'épaisseur du thorax (≈ 5 cm)", "10 cm", "1 cm", "Pas de compression chez l'enfant"]);
Q('secours', "Que fait-on pendant que le défibrillateur analyse le rythme cardiaque ?", ["Personne ne touche la victime", "On continue à masser", "On secoue la victime", "On lui parle fort"]);
Q('secours', "Où colle-t-on les électrodes du DAE chez l'adulte ?", ["Sous la clavicule droite et sur le côté gauche, sous l'aisselle", "Sur le ventre et le dos", "Sur les deux épaules", "Sur le front et le cœur"]);
Q('secours', "Qui a le droit d'utiliser un défibrillateur automatisé externe en France ?", ["Toute personne, même non formée", "Seulement les médecins", "Seulement les pompiers", "Seulement les infirmiers"]);
Q('secours', "Quels sont les 4 maillons de la chaîne de survie ?", ["Alerte précoce, RCP précoce, défibrillation précoce, soins avancés précoces", "Protéger, alerter, masser, attendre", "PLS, eau, sucre, repos", "Appeler, filmer, partir, revenir"]);
Q('secours', "De combien baissent environ les chances de survie par minute sans RCP lors d'un arrêt cardiaque ?", ["Environ 10 %", "Environ 1 %", "Environ 50 %", "Elles ne baissent pas"]);
Q('secours', "Un adulte s'étouffe, ne peut plus parler ni tousser. Premier geste ?", ["Jusqu'à 5 claques vigoureuses dans le dos", "Lui donner de l'eau", "Le mettre en PLS", "Attendre que ça passe"]);
Q('secours', "Si les claques dans le dos ne débouchent pas l'adulte qui s'étouffe ?", ["Jusqu'à 5 compressions abdominales (méthode de Heimlich)", "Lui faire boire de l'eau", "Le coucher sur le dos", "Lui mettre les doigts dans la bouche"]);
Q('secours', "Chez une femme enceinte ou une personne obèse qui s'étouffe, on remplace les compressions abdominales par…", ["des compressions thoraciques", "des claques sur les joues", "un massage du ventre", "rien du tout"]);
Q('secours', "Chez un nourrisson qui s'étouffe, après les claques dans le dos, on fait…", ["des compressions thoraciques", "des compressions abdominales", "une PLS", "un bouche-à-bouche immédiat"]);
Q('secours', "Une personne s'étouffe mais tousse fort et parle encore. Que fais-tu ?", ["Je l'encourage à tousser et je surveille, sans taper dans le dos", "Je lui donne 5 claques dans le dos", "Je fais la méthode de Heimlich", "Je la mets en PLS"]);
Q('secours', "La victime d'étouffement perd connaissance. Que fais-tu ?", ["J'alerte et je commence la RCP", "Je continue les claques dans le dos", "Je la mets en PLS", "Je lui donne de l'eau"]);
Q('secours', "Face à une hémorragie externe, quel est le premier geste ?", ["Comprimer directement l'endroit qui saigne", "Poser un garrot tout de suite", "Mettre la jambe en hauteur et attendre", "Laver la plaie"]);
Q('secours', "Quand pose-t-on un garrot ?", ["Quand la compression directe d'un saignement au membre est inefficace ou impossible", "Pour toute petite coupure", "Au cou en cas de saignement de la tête", "Jamais"]);
Q('secours', "Que faut-il absolument noter quand on pose un garrot ?", ["L'heure de pose", "Le nom du fabricant", "La température extérieure", "La couleur des vêtements"]);
Q('secours', "Où pose-t-on un garrot ?", ["Entre la plaie et la racine du membre, à quelques centimètres au-dessus de la plaie, jamais sur une articulation", "Directement sur la plaie", "Sur le coude", "Au poignet quelle que soit la plaie"]);
Q('secours', "Saignement de nez : quelle conduite à tenir ?", ["Tête penchée en avant, comprimer la narine pendant 10 minutes", "Tête en arrière", "S'allonger sur le dos", "Mettre du coton et courir"]);
Q('secours', "Que fait-on d'un objet planté dans une plaie (couteau, morceau de verre) ?", ["On ne le retire jamais", "On le retire vite", "On l'enfonce pour stopper le saignement", "On le coupe au ras de la peau"]);
Q('secours', "Plaie au thorax : quelle position pour une victime consciente ?", ["Demi-assise", "Allongée sur le ventre", "Debout", "Tête en bas"]);
Q('secours', "Plaie à l'abdomen : quelle position ?", ["Allongée, jambes fléchies", "Assise penchée en avant", "Debout", "Sur le ventre"]);
Q('secours', "Plaie à l'œil : que demande-t-on à la victime ?", ["Rester allongée, ne pas bouger la tête et garder les yeux fermés", "Se frotter l'œil", "Rincer avec du savon", "Marcher pour aller voir un médecin"]);
Q('secours', "Brûlure : quel est le geste immédiat ?", ["Refroidir sous l'eau tempérée le plus vite possible, plusieurs minutes", "Mettre du beurre ou du dentifrice", "Mettre de la glace directement", "Percer les cloques"]);
Q('secours', "Une brûlure est grave quand…", ["les cloques font plus que la moitié de la paume de la victime, ou si elle touche visage, mains, articulations, ou si la peau est blanche/noirâtre", "elle est rouge et fait mal", "elle a moins de 1 cm", "elle a été causée par de l'eau"]);
Q('secours', "Que fait-on des vêtements collés à une brûlure ?", ["On ne les retire pas", "On les arrache", "On les découpe sur la plaie", "On les mouille avec de l'alcool"]);
Q('secours', "Brûlure chimique sur la peau : que fais-tu ?", ["Arroser abondamment à l'eau et retirer les vêtements imbibés en se protégeant", "Neutraliser avec un autre produit", "Frotter avec un chiffon sec", "Attendre que ça sèche"]);
Q('secours', "Une brûlure électrique est toujours considérée comme…", ["grave (lésions internes possibles)", "bénigne", "superficielle", "sans importance si la peau est intacte"]);
Q('secours', "Avant de toucher une victime électrisée, il faut…", ["couper le courant", "lui prendre la main", "l'arroser", "attendre qu'elle se relève"]);
Q('secours', "Voix rauque, suie dans le nez, brûlures au visage après un incendie : que craindre ?", ["Une atteinte des voies respiratoires (détresse respiratoire)", "Une simple fatigue", "Une allergie au pollen", "Rien de particulier"]);
Q('secours', "Suspicion de traumatisme de la colonne vertébrale (chute, accident) : que faire ?", ["Ne pas mobiliser la victime et lui maintenir la tête dans l'axe", "La faire marcher pour vérifier", "L'asseoir", "La mettre en PLS tout de suite si elle est consciente"]);
Q('secours', "Fracture d'un membre : que fait le secouriste ?", ["Il immobilise le membre dans la position où il le trouve", "Il remet l'os en place", "Il fait marcher la victime", "Il masse la zone"]);
Q('secours', "Entorse de la cheville : quels gestes ?", ["Froid, repos, compression, membre surélevé", "Chaleur et massage", "Courir pour « l'échauffer »", "Rien, ça passe tout seul"]);
Q('secours', "Que veut dire l'acronyme VITE pour reconnaître un AVC ?", ["Visage paralysé, Inertie d'un membre, Trouble de la parole, En urgence le 15", "Vertige, Insomnie, Toux, Énervement", "Vomissement, Infection, Tension, Essoufflement", "Vision, Intestins, Tête, Estomac"]);
Q('secours', "Face à un AVC, pourquoi faut-il appeler très vite ?", ["Chaque minute compte : un traitement rapide limite les séquelles", "Parce que ça passe en 5 minutes", "Pour prévenir la famille", "Ce n'est pas urgent"]);
Q('secours', "Douleur serrant la poitrine, irradiant au bras gauche ou à la mâchoire : que suspecter ?", ["Un problème cardiaque (infarctus)", "Une indigestion banale", "Une crampe", "Un rhume"]);
Q('secours', "Un diabétique conscient est pâle, en sueur, tremble et devient bizarre. Que fais-tu ?", ["Je lui donne du sucre s'il peut avaler, et j'alerte si besoin", "Je lui fais une piqûre d'insuline", "Je lui donne de l'eau gazeuse", "Je le laisse dormir"], "C'est probablement une hypoglycémie.");
Q('secours', "Crise convulsive : que faut-il faire ?", ["Protéger la victime des chocs sans la tenir, ne rien mettre dans sa bouche, puis PLS après la crise", "Lui mettre un objet entre les dents", "La retenir fermement", "Lui jeter de l'eau"]);
Q('secours', "Crise d'asthme : quelle position ?", ["Assise, et l'aider à prendre son traitement", "Allongée à plat", "Tête en bas", "En PLS"]);
Q('secours', "Réaction allergique grave (gonflement, difficultés à respirer) chez quelqu'un qui a un stylo d'adrénaline :", ["On l'aide à s'injecter l'adrénaline et on alerte", "On lui donne un antihistaminique et on attend", "On le fait courir", "On le met dans un bain froid"]);
Q('secours', "Quelles sont les trois grandes détresses vitales ?", ["Neurologique, respiratoire, circulatoire", "Digestive, cutanée, osseuse", "Visuelle, auditive, olfactive", "Musculaire, nerveuse, sanguine"]);
Q('secours', "Dans quel ordre se déroule le bilan du secouriste ?", ["Circonstanciel, urgence vitale, complémentaire, surveillance", "Complémentaire, circonstanciel, vital", "Surveillance puis rien", "Urgence vitale uniquement"]);
Q('secours', "Que veut dire MHTA dans l'interrogatoire d'une victime ?", ["Maladies, Hospitalisations, Traitements, Allergies", "Médecin, Hôpital, Transport, Ambulance", "Mal, Hémorragie, Tension, Asthme", "Mouvement, Hauteur, Température, Âge"]);
Q('secours', "Que permet d'évaluer la méthode PQRST ?", ["La douleur : Provoquée, Qualité, Région/irradiation, Sévérité, Temps", "La respiration", "La conscience", "La température"]);
Q('secours', "Quelle est la fréquence respiratoire normale d'un adulte au repos ?", ["12 à 20 mouvements par minute", "2 à 5 par minute", "40 à 60 par minute", "100 par minute"]);
Q('secours', "Quelle est la fréquence cardiaque normale d'un adulte au repos ?", ["60 à 100 battements par minute", "20 à 40", "120 à 160", "180 à 200"]);
Q('secours', "Quelle saturation en oxygène (SpO2) est normale chez un adulte en bonne santé ?", ["94 à 100 %", "50 à 60 %", "70 à 80 %", "Exactement 100 % sinon c'est grave"]);
Q('secours', "Sur combien de points est noté le score de Glasgow ?", ["De 3 à 15", "De 0 à 10", "De 1 à 100", "De 0 à 20"]);
Q('secours', "Quelles sont les trois composantes du score de Glasgow ?", ["Ouverture des yeux, réponse verbale, réponse motrice", "Pouls, tension, température", "Respiration, couleur, sueurs", "Âge, poids, taille"]);
Q('secours', "En dessous de quelle température corporelle parle-t-on d'hypothermie ?", ["35 °C", "37 °C", "30 °C", "38 °C"]);
Q('secours', "Que faire pour une personne en hypothermie consciente ?", ["La mettre à l'abri, retirer les vêtements mouillés, la couvrir, lui donner une boisson chaude sucrée", "La frotter vigoureusement avec de la neige", "Lui donner de l'alcool", "La faire courir"]);
Q('secours', "Gelures aux doigts : que ne faut-il pas faire ?", ["Frotter ou réchauffer brutalement la zone", "Mettre à l'abri", "Couvrir", "Alerter"]);
Q('secours', "Coup de chaleur : quels gestes ?", ["Mettre à l'ombre, refroidir (eau, ventilation), alerter", "Couvrir chaudement", "Faire courir la personne", "Lui donner de l'alcool"]);
Q('secours', "Le monoxyde de carbone (CO) est dangereux parce qu'il est…", ["invisible, inodore et toxique", "très odorant", "coloré en jaune", "sans danger en petite quantité"]);
Q('secours', "Symptômes d'une intoxication au monoxyde de carbone ?", ["Maux de tête, nausées, vertiges, souvent plusieurs personnes touchées", "Démangeaisons", "Fièvre élevée", "Toux sèche uniquement"]);
Q('secours', "Suspicion d'intoxication au CO dans un logement : que fais-tu ?", ["Aérer, évacuer tout le monde et appeler les secours", "Allumer une bougie pour vérifier", "Rester pour dormir", "Fermer les fenêtres"]);
Q('secours', "Que fait-on d'un doigt sectionné ?", ["On le met dans un sac plastique, lui-même posé dans un sac avec de la glace (sans contact direct)", "On le jette", "On le plonge dans l'eau chaude", "On le pose directement sur la glace"]);
Q('secours', "Écoulement de sang par l'oreille après un choc à la tête : que fais-tu ?", ["Je laisse s'écouler sans comprimer et j'alerte (signe de gravité)", "Je bouche l'oreille avec du coton", "Je comprime fort", "Je penche la tête en arrière"]);
Q('secours', "Un motard est inconscient. Retire-t-on son casque ?", ["Seulement si c'est indispensable (ex. il ne respire pas), idéalement à deux et en maintenant la tête", "Toujours, tout de suite", "Jamais, même s'il ne respire pas", "On le retire en tirant fort d'un coup"]);
Q('secours', "Quel est l'intérêt de la position latérale de sécurité (PLS) ?", ["Garder les voies aériennes libres et laisser s'écouler vomissements ou sang", "Faire remonter la tension", "Réchauffer la victime", "Faciliter le massage cardiaque"]);
Q('secours', "Que signifie PSC 1 ?", ["Prévention et secours civiques de niveau 1", "Premiers soins en caserne 1", "Pompier secouriste certifié 1", "Protection sanitaire civile 1"]);
Q('secours', "Que signifie PSE 1 ?", ["Premiers secours en équipe de niveau 1", "Pompier secouriste élémentaire 1", "Prévention santé emploi 1", "Protection et sauvetage en eau 1"]);
Q('secours', "Une victime consciente se plaint d'un malaise. Que fais-tu d'abord ?", ["Je la mets au repos dans la position où elle se sent le mieux et je l'interroge", "Je la fais marcher", "Je lui donne un médicament", "Je la laisse seule"]);
Q('secours', "Signes d'une hémorragie interne ?", ["Pâleur, sueurs, soif, pouls rapide, sensation de froid", "Rougeur et chaleur du visage", "Démangeaisons", "Aucun signe visible n'existe"]);
Q('secours', "Pourquoi porte-t-on des gants pour traiter une plaie qui saigne ?", ["Pour se protéger des maladies transmissibles par le sang", "Pour mieux tenir les compresses", "Pour avoir chaud", "Ce n'est pas utile"]);
Q('secours', "Victime en arrêt cardiaque : quand arrête-t-on la RCP ?", ["À l'arrivée des secours qui prennent le relais ou si la victime se remet à respirer", "Au bout de 2 minutes", "Quand on est fatigué au bout de 30 s", "Dès que le DAE est posé, définitivement"]);
Q('secours', "Que faire si le DAE annonce « choc non indiqué » ?", ["Reprendre immédiatement la RCP", "Arrêter tout", "Débrancher le DAE", "Mettre la victime en PLS"]);
Q('secours', "À quoi sert principalement un défibrillateur ?", ["À arrêter une fibrillation ventriculaire pour que le cœur reparte normalement", "À faire repartir un cœur totalement arrêté (sans aucune activité)", "À mesurer la tension", "À oxygéner le sang"]);

/* ================= INCENDIE ================= */
Q('incendie', "Quels sont les trois éléments du triangle du feu ?", ["Combustible, comburant, énergie d'activation", "Eau, air, terre", "Bois, papier, essence", "Flamme, fumée, cendre"]);
Q('incendie', "Quel est le comburant le plus courant ?", ["L'oxygène de l'air", "L'azote", "Le gaz carbonique", "La vapeur d'eau"]);
Q('incendie', "Quel pourcentage d'oxygène contient l'air environ ?", ["21 %", "78 %", "50 %", "5 %"]);
Q('incendie', "Le tétraèdre du feu ajoute au triangle…", ["la réaction en chaîne", "l'eau", "le vent", "la pression"]);
Q('incendie', "Feux de classe A : de quoi s'agit-il ?", ["Feux de solides (bois, papier, tissu) qui font des braises", "Feux de liquides", "Feux de gaz", "Feux de métaux"]);
Q('incendie', "Feux de classe B ?", ["Feux de liquides ou de solides liquéfiables (essence, huile, plastique fondu)", "Feux de bois", "Feux de métaux", "Feux de cuisine uniquement"]);
Q('incendie', "Feux de classe C ?", ["Feux de gaz", "Feux de liquides", "Feux de métaux", "Feux de papier"]);
Q('incendie', "Feux de classe D ?", ["Feux de métaux (sodium, magnésium…)", "Feux de gaz", "Feux de forêt", "Feux électriques"]);
Q('incendie', "Feux de classe F ?", ["Feux d'huiles et graisses de cuisson", "Feux de forêt", "Feux de fourrage", "Feux de métaux"]);
Q('incendie', "Une friteuse prend feu. Que fais-tu ?", ["Couper le feu et étouffer avec un couvercle ou un linge humide, jamais d'eau", "Jeter un verre d'eau", "Porter la friteuse dehors", "Souffler dessus"]);
Q('incendie', "Pourquoi ne jamais jeter d'eau sur de l'huile en feu ?", ["L'eau se vaporise d'un coup et projette l'huile enflammée", "L'eau rend l'huile toxique", "L'eau ne sert à rien mais sans danger", "L'eau fait exploser la casserole en métal"]);
Q('incendie', "Un extincteur à CO2 est adapté surtout aux…", ["feux de liquides et aux feux d'origine électrique", "feux de métaux", "feux de bois profonds", "feux de forêt"]);
Q('incendie', "Un extincteur à poudre ABC éteint les feux de classe…", ["A, B et C", "D uniquement", "F uniquement", "A seulement"]);
Q('incendie', "Quels sont les modes de propagation de la chaleur dans un incendie ?", ["Conduction, convection, rayonnement (et projection de matières en feu)", "Uniquement les flammes", "Évaporation et condensation", "Le vent seulement"]);
Q('incendie', "La conduction, c'est…", ["la chaleur qui se transmet à travers un matériau (poutre métallique, mur)", "la chaleur qui monte avec les fumées", "la chaleur émise à distance comme le soleil", "des brandons qui volent"]);
Q('incendie', "La convection, c'est…", ["le transport de la chaleur par les gaz chauds et les fumées qui montent", "la chaleur à travers un mur", "la chaleur émise à distance", "l'eau qui coule"]);
Q('incendie', "Le rayonnement, c'est…", ["la chaleur émise à distance, en ligne droite, comme celle d'un feu de cheminée", "la chaleur dans un tuyau", "les fumées qui montent", "le vent"]);
Q('incendie', "Quels sont les modes d'extinction ?", ["Refroidir, étouffer, supprimer le combustible, inhiber la réaction", "Souffler, chauffer, ventiler", "Uniquement arroser", "Attendre que tout ait brûlé"]);
Q('incendie', "Comment l'eau éteint-elle surtout un feu ?", ["Par refroidissement", "Par étouffement uniquement", "En supprimant le combustible", "Par réaction chimique"]);
Q('incendie', "Combien de litres de vapeur produit environ 1 litre d'eau vaporisée ?", ["Environ 1 700 litres", "Environ 10 litres", "Environ 100 litres", "Environ 1 litre"]);
Q('incendie', "Comment éteint principalement la mousse ?", ["Par étouffement (elle isole le combustible de l'air)", "En chauffant le combustible", "En produisant de l'oxygène", "En le rendant liquide"]);
Q('incendie', "Qu'est-ce qu'un embrasement généralisé éclair (flashover) ?", ["L'inflammation brutale de tout un local quand tout atteint sa température d'inflammation", "Une explosion de gaz de ville", "Un feu de cheminée", "Un éclair d'orage"]);
Q('incendie', "Quel signe annonce un embrasement généralisé éclair ?", ["Chaleur intense et flammes qui roulent dans les fumées sous le plafond", "Fumées blanches légères", "Pièce froide", "Aucun signe possible"]);
Q('incendie', "Qu'est-ce qu'un backdraft (explosion de fumées) ?", ["L'inflammation explosive de fumées chaudes et riches en gaz quand on apporte de l'air dans un local fermé", "Un feu de forêt", "Une fuite d'eau", "Un retour de flamme dans un moteur"]);
Q('incendie', "Signes d'un risque de backdraft ?", ["Local fermé très chaud, vitres noircies, fumées qui « pulsent », sifflements, aspiration d'air à l'ouverture", "Fenêtres ouvertes et flammes visibles", "Pièce froide et sans fumée", "Bruit de pluie"]);
Q('incendie', "Quelle est la première cause de mort dans un incendie ?", ["Les fumées (intoxication)", "Les flammes", "Les chutes", "La chaleur seule"]);
Q('incendie', "Quels gaz toxiques des fumées sont particulièrement dangereux ?", ["Le monoxyde de carbone (CO) et l'acide cyanhydrique (HCN)", "L'oxygène et l'azote", "La vapeur d'eau", "L'hélium"]);
Q('incendie', "Quelles sont les caractéristiques des fumées d'incendie ?", ["Chaudes, opaques, toxiques, mobiles et inflammables", "Froides et inoffensives", "Toujours blanches", "Plus lourdes que l'air"]);
Q('incendie', "Le feu est chez toi. Que fais-tu ?", ["Je sors, je ferme la porte derrière moi et j'appelle le 18 ou le 112", "Je reste pour sauver mes affaires", "J'ouvre toutes les fenêtres", "Je prends l'ascenseur"]);
Q('incendie', "La cage d'escalier est envahie par la fumée. Que fais-tu ?", ["Je reste chez moi, porte fermée, linges mouillés en bas de la porte, et je me signale à la fenêtre", "Je traverse la fumée en courant", "Je saute par la fenêtre", "Je prends l'ascenseur"]);
Q('incendie', "Pourquoi se baisser quand il y a de la fumée ?", ["L'air est plus frais et moins toxique près du sol", "Pour éviter les flammes au sol", "Pour courir plus vite", "Ça ne sert à rien"]);
Q('incendie', "Peut-on prendre l'ascenseur en cas d'incendie ?", ["Non, jamais", "Oui, c'est plus rapide", "Oui, s'il n'y a pas de fumée", "Oui, au-dessus du 5e étage"]);
Q('incendie', "Depuis quand le détecteur de fumée (DAAF) est-il obligatoire dans tous les logements ?", ["Depuis le 8 mars 2015", "Depuis 1990", "Depuis 2024", "Il n'est pas obligatoire"]);
Q('incendie', "Où installer un détecteur de fumée ?", ["Au plafond, de préférence dans le couloir qui dessert les chambres", "Dans la salle de bains", "Au ras du sol", "Au-dessus des plaques de cuisson"]);
Q('incendie', "Quelle est la première étape de la marche générale des opérations (MGO) ?", ["La reconnaissance", "L'attaque", "Le déblai", "La surveillance"]);
Q('incendie', "Quelle est l'ordre de la marche générale des opérations ?", ["Reconnaissance, sauvetage, établissements, attaque, protection, déblai, surveillance", "Attaque, sauvetage, déblai", "Déblai, attaque, reconnaissance", "Surveillance, attaque, sauvetage"]);
Q('incendie', "Quelle est la dernière étape de la marche générale des opérations ?", ["La surveillance", "L'attaque", "La reconnaissance", "Les établissements"]);
Q('incendie', "Qu'est-ce qu'un sauvetage pour les sapeurs-pompiers ?", ["Soustraire une victime à un danger immédiat qu'elle ne peut pas fuir seule", "Récupérer des objets de valeur", "Éteindre le feu", "Remplir un rapport"]);
Q('incendie', "Que respire un pompier sous appareil respiratoire isolant (ARI) ?", ["De l'air comprimé", "De l'oxygène pur", "De l'azote", "L'air ambiant filtré"]);
Q('incendie', "Quelle est la pression de service typique d'une bouteille d'ARI moderne ?", ["300 bar", "3 bar", "30 bar", "3 000 bar"]);
Q('incendie', "En zone dangereuse (feu, fumées), comment s'engagent les sapeurs-pompiers ?", ["Toujours en binôme au minimum", "Seuls pour aller plus vite", "À dix", "Le chef reste seul dehors"]);
Q('incendie', "Quels sont les diamètres de tuyaux d'incendie les plus courants ?", ["45, 70 et 110 mm", "5, 10 et 15 mm", "200, 300 et 400 mm", "1, 2 et 3 cm"]);
Q('incendie', "Où se trouve une bouche d'incendie ?", ["Sous le trottoir, dans un regard", "En haut des immeubles", "Dans les caves uniquement", "Dans les camions"]);
Q('incendie', "Qu'est-ce qu'une colonne sèche ?", ["Une canalisation vide dans un immeuble, que les pompiers alimentent en eau depuis la rue", "Une colonne de fumée", "Un pilier en béton", "Un extincteur géant"]);
Q('incendie', "À partir de quelle hauteur un immeuble d'habitation devient-il un IGH ?", ["Plus de 50 m", "Plus de 10 m", "Plus de 100 m", "Plus de 28 m"]);
Q('incendie', "À partir de quelle hauteur un immeuble de bureaux devient-il un IGH ?", ["Plus de 28 m", "Plus de 50 m", "Plus de 8 m", "Plus de 150 m"]);
Q('incendie', "Un ERP de 1re catégorie accueille…", ["plus de 1 500 personnes", "moins de 20 personnes", "uniquement des enfants", "uniquement des malades"]);
Q('incendie', "Le point d'éclair d'un liquide, c'est…", ["la température minimale à laquelle il dégage assez de vapeurs pour s'enflammer au contact d'une flamme", "sa température d'ébullition", "la température à laquelle il gèle", "sa couleur quand il brûle"]);
Q('incendie', "Une combustion incomplète (manque d'oxygène) produit surtout…", ["du monoxyde de carbone (CO)", "de l'oxygène", "de l'eau pure", "de l'hélium"]);
Q('incendie', "Que signifie BLEVE ?", ["La vaporisation explosive d'un liquide surchauffé (ex. citerne de gaz prise dans un feu)", "Une marque d'extincteur", "Un type de lance", "Un feu de forêt"]);
Q('incendie', "Sur une plaque orange de transport de matières dangereuses, le nombre du haut indique…", ["le code danger", "le numéro ONU de la matière", "le poids du camion", "le numéro du chauffeur"]);
Q('incendie', "Sur une plaque orange, le nombre du bas indique…", ["le numéro ONU de la matière", "le code danger", "la vitesse maximale", "le nombre d'essieux"]);
Q('incendie', "Un « X » devant le code danger d'une plaque orange signifie…", ["que la matière réagit dangereusement avec l'eau", "que la matière est sans danger", "que le camion est vide", "que c'est un produit alimentaire"]);
Q('incendie', "Feu dans une armoire électrique : premier réflexe ?", ["Couper le courant, puis utiliser un extincteur CO2", "Jeter un seau d'eau", "Ouvrir l'armoire en grand", "Souffler"]);
Q('incendie', "Feu de cheminée : que faire en attendant les pompiers ?", ["Appeler le 18, fermer les arrivées d'air, éloigner ce qui peut brûler, ne pas jeter d'eau dans le foyer", "Jeter un seau d'eau dans le conduit", "Ouvrir toutes les fenêtres", "Monter sur le toit"]);
Q('incendie', "Le « rollover », c'est…", ["des flammes qui roulent dans les fumées sous le plafond, signe d'embrasement proche", "un engin de la BSPP", "une technique de PLS", "un type de tuyau"]);
Q('incendie', "Pourquoi fermer les portes en évacuant un feu ?", ["Pour ralentir la propagation du feu et des fumées", "Pour empêcher les voleurs", "Pour garder la chaleur", "Ça ne sert à rien"]);

/* ================= ENGINS & MATÉRIEL ================= */
Q('engins', "Quel engin est principalement utilisé pour le secours à victimes ?", ["Le VSAV", "Le FPT", "L'EPA", "Le BEA"]);
Q('engins', "Combien de sapeurs-pompiers composent en général l'équipage d'un VSAV ?", ["3", "1", "6", "10"]);
Q('engins', "Quel est le rôle principal d'un fourgon pompe-tonne (FPT) ?", ["La lutte contre l'incendie : il transporte de l'eau, une pompe et des tuyaux", "Le transport des victimes", "Les sauvetages en hauteur uniquement", "Le dépannage des voitures"]);
Q('engins', "Le premier secours évacuation (PSE) est un engin…", ["propre à la BSPP, polyvalent incendie et secours", "de la police", "de l'armée de l'Air", "uniquement pour les animaux"]);
Q('engins', "Quel équipement trouve-t-on notamment dans un PSE ?", ["Un dévidoir, une pompe et un réservoir d'émulseur", "Un hélicoptère", "Un bateau", "Une grue de 50 m"]);
Q('engins', "À quoi sert une échelle pivotante automatique (EPA) ?", ["Aux sauvetages et à l'attaque du feu en hauteur", "Au transport des blessés", "Au pompage dans la Seine", "À la désincarcération"]);
Q('engins', "Quelle hauteur atteint typiquement une grande échelle (EPA) ?", ["Environ 30 m", "Environ 5 m", "Environ 100 m", "Environ 300 m"]);
Q('engins', "Quelle est la différence entre un BEA et une EPA ?", ["Le BEA a un bras articulé qui permet de contourner des obstacles", "Le BEA est un bateau", "L'EPA transporte des victimes", "Il n'y a aucune différence"]);
Q('engins', "Qu'est-ce qu'une ambulance de réanimation (AR) à la BSPP ?", ["Un engin médicalisé, avec un médecin à bord", "Un VSAV sans équipage", "Une ambulance privée", "Un engin pour les animaux"]);
Q('engins', "À quoi sert un VID (véhicule d'intervention diverse) ?", ["Aux interventions comme les fuites d'eau, ouvertures de porte, animaux, nids de guêpes…", "À l'incendie de grande ampleur", "Au transport des officiers", "Aux secours en mer"]);
Q('engins', "Que comprend la tenue de feu (EPI) d'un sapeur-pompier ?", ["Veste et surpantalon de feu, casque, cagoule, gants, bottes", "Un short et un tee-shirt", "Un gilet jaune", "Une combinaison de plongée"]);
Q('engins', "Pour quel type de mission est conçu le casque F1 ?", ["La lutte contre les incendies de bâtiments", "Le vélo", "La plongée", "Le secours en montagne uniquement"]);
Q('engins', "À quoi sert une caméra thermique en intervention ?", ["À voir à travers les fumées, repérer les victimes et les points chauds", "À filmer pour les réseaux sociaux", "À mesurer la pollution", "À éclairer la nuit"]);
Q('engins', "À quoi sert l'émulseur ?", ["À fabriquer de la mousse pour éteindre les feux de liquides", "À nettoyer les engins", "À soigner les brûlures", "À refroidir le moteur"]);
Q('engins', "Que sont les outils de désincarcération ?", ["Des outils hydrauliques (écarteur, cisaille, vérin) pour dégager une victime d'un véhicule", "Des clés pour ouvrir les portes de caserne", "Des scies à bois", "Des pelles"]);
Q('engins', "Que fait une équipe cynotechnique ?", ["Elle utilise des chiens pour rechercher des personnes (décombres, disparus)", "Elle soigne les animaux", "Elle forme les chevaux", "Elle surveille la caserne"]);
Q('engins', "Que fait le GRIMP ?", ["Il intervient en milieu périlleux : hauteurs, profondeurs, puits, toits…", "Il gère les appels", "Il répare les engins", "Il forme les recrues"]);
Q('engins', "Où interviennent les plongeurs de la BSPP ?", ["Dans la Seine, la Marne, les canaux et les plans d'eau", "En mer Méditerranée", "Uniquement en piscine", "Dans l'Atlantique"]);
Q('engins', "À quoi servent les unités NRBC ?", ["À faire face aux risques nucléaires, radiologiques, biologiques et chimiques", "À éteindre les feux de forêt", "À sauver les animaux", "À régler la circulation"]);
Q('engins', "Que signifie LSPCC ?", ["Lot de sauvetage et de protection contre les chutes", "Lance spéciale pour colonne creuse", "Liste des sapeurs pour le centre de commandement", "Lot de soins pour cas critiques"]);
Q('engins', "Qu'est-ce qu'une lance à débit variable (LDV) ?", ["Une lance dont on peut régler le débit et la forme du jet", "Une lance fixe sur un mur", "Un tuyau d'arrosage", "Un extincteur"]);
Q('engins', "Que contient un sac de premiers secours d'un VSAV ?", ["Matériel d'oxygénothérapie, de pansement, de bilan (tensiomètre, oxymètre)…", "Des outils de désincarcération", "Des tuyaux d'incendie", "Des cordes de rappel"]);
Q('engins', "Pourquoi les engins de la BSPP sont-ils compacts ?", ["Pour circuler dans les rues étroites et denses de Paris", "Pour coûter moins cher", "Parce qu'ils sont anciens", "Pour aller plus vite sur autoroute"]);

/* ================= ALERTE & NUMÉROS ================= */
Q('alerte', "Quel numéro appeler pour les sapeurs-pompiers ?", ["18", "15", "17", "115"]);
Q('alerte', "Quel numéro appeler pour le SAMU ?", ["15", "18", "17", "119"]);
Q('alerte', "Quel numéro appeler pour la police ou la gendarmerie ?", ["17", "18", "15", "114"]);
Q('alerte', "Quel est le numéro d'urgence européen ?", ["112", "911", "999", "118"]);
Q('alerte', "Quel numéro pour les personnes sourdes ou malentendantes (SMS, visio, tchat) ?", ["114", "112", "115", "116"]);
Q('alerte', "À quoi sert le 115 ?", ["Au SAMU social (personnes sans abri en détresse)", "Aux pompiers", "À la police", "Aux urgences en mer"]);
Q('alerte', "Quel numéro pour l'enfance en danger ?", ["119", "115", "17", "3919"]);
Q('alerte', "Quel numéro pour les urgences en mer ?", ["196", "191", "18", "112"]);
Q('alerte', "Quel numéro pour les urgences aéronautiques ?", ["191", "196", "119", "114"]);
Q('alerte', "Quel numéro pour la prévention du suicide ?", ["3114", "3919", "115", "17"]);
Q('alerte', "Quel numéro pour les femmes victimes de violences ?", ["3919", "3114", "119", "116 000"]);
Q('alerte', "Quel numéro pour signaler un enfant disparu ?", ["116 000", "119", "115", "112"]);
Q('alerte', "Le 112 fonctionne…", ["gratuitement dans tous les pays de l'Union européenne", "seulement en France", "seulement avec un abonnement", "uniquement depuis un fixe"]);
Q('alerte', "Quelles informations donner en priorité lors d'un appel d'urgence ?", ["Ton numéro, l'adresse précise, ce qui se passe, le nombre de victimes et leur état", "Ton âge et ta profession", "La météo", "Le nom de ton médecin"]);
Q('alerte', "Lors d'un appel au 18, qui raccroche en premier ?", ["L'opérateur : on attend qu'il nous dise de raccrocher", "Toi, dès que tu as donné l'adresse", "Peu importe", "La victime"]);
Q('alerte', "Pourquoi l'adresse précise est-elle l'information la plus importante ?", ["Sans elle, les secours ne peuvent pas venir, même si l'appel coupe", "Pour la facture", "Pour les statistiques", "Elle n'est pas importante"]);
Q('alerte', "Quand la sirène du réseau national d'alerte est-elle testée ?", ["Le premier mercredi de chaque mois à midi", "Tous les jours à 8 h", "Le 14 juillet", "Jamais"]);
Q('alerte', "Le signal national d'alerte est…", ["un son montant et descendant, répété 3 fois", "un son continu de 30 s", "trois coups de klaxon", "une musique"]);
Q('alerte', "Le signal de fin d'alerte est…", ["un son continu de 30 secondes", "un son montant et descendant", "un silence total", "trois bips courts"]);
Q('alerte', "Quand la sirène d'alerte retentit (hors essai), que faire ?", ["Se mettre à l'abri dans un bâtiment, écouter la radio, ne pas aller chercher les enfants à l'école", "Sortir dans la rue pour voir", "Aller chercher ses enfants à l'école", "Appeler le 18 pour savoir"]);
Q('alerte', "Qu'est-ce que FR-Alert ?", ["Le système qui envoie des alertes d'urgence directement sur les téléphones portables", "Une appli de jeux", "Un numéro de police", "Une chaîne de télévision"]);
Q('alerte', "Si tu es témoin d'un malaise et que tu hésites entre 15 et 18 :", ["Appelle l'un ou l'autre : les centres sont reliés et se transfèrent l'appel", "N'appelle personne", "Appelle le 17", "Attends de voir si ça s'aggrave"]);

/* ================= CULTURE GÉNÉRALE ================= */
Q('culture', "Combien d'arrondissements compte Paris ?", ["20", "12", "24", "16"]);
Q('culture', "Quel est le numéro du département des Hauts-de-Seine ?", ["92", "93", "94", "91"]);
Q('culture', "Quel est le numéro du département de la Seine-Saint-Denis ?", ["93", "92", "94", "95"]);
Q('culture', "Quel est le numéro du département du Val-de-Marne ?", ["94", "93", "92", "77"]);
Q('culture', "Quelle est la préfecture des Hauts-de-Seine ?", ["Nanterre", "Boulogne-Billancourt", "Courbevoie", "Versailles"]);
Q('culture', "Quelle est la préfecture de la Seine-Saint-Denis ?", ["Bobigny", "Saint-Denis", "Montreuil", "Aubervilliers"]);
Q('culture', "Quelle est la préfecture du Val-de-Marne ?", ["Créteil", "Vitry-sur-Seine", "Ivry-sur-Seine", "Vincennes"]);
Q('culture', "Quel fleuve traverse Paris ?", ["La Seine", "La Loire", "Le Rhône", "La Garonne"]);
Q('culture', "Quelle rivière se jette dans la Seine juste en amont de Paris ?", ["La Marne", "L'Oise", "La Loire", "La Saône"]);
Q('culture', "Environ combien d'habitants compte Paris ?", ["Environ 2,1 millions", "Environ 12 millions", "Environ 500 000", "Environ 7 millions"]);
Q('culture', "Environ combien d'habitants compte l'Île-de-France ?", ["Environ 12 millions", "Environ 2 millions", "Environ 30 millions", "Environ 5 millions"]);
Q('culture', "Quelle est la devise de la République française ?", ["Liberté, Égalité, Fraternité", "Honneur et Patrie", "Sauver ou périr", "Travail, Famille, Patrie"]);
Q('culture', "Quel est l'hymne national français ?", ["La Marseillaise", "Le Chant des partisans", "L'Internationale", "La Madelon"]);
Q('culture', "Qui a écrit La Marseillaise ?", ["Rouget de Lisle", "Victor Hugo", "Napoléon", "Berlioz"]);
Q('culture', "En quelle année La Marseillaise a-t-elle été composée ?", ["1792", "1789", "1815", "1870"]);
Q('culture', "Que commémore-t-on le 11 novembre ?", ["L'armistice de 1918", "La victoire de 1945", "La prise de la Bastille", "La fin de la guerre d'Algérie"]);
Q('culture', "Que commémore-t-on le 8 mai ?", ["La victoire de 1945 en Europe", "L'armistice de 1918", "Le débarquement", "La Révolution"]);
Q('culture', "Que fête-t-on le 14 juillet ?", ["La fête nationale (prise de la Bastille 1789 et fête de la Fédération 1790)", "La fin de la Seconde Guerre mondiale", "L'anniversaire de Napoléon", "La Sainte-Barbe"]);
Q('culture', "Sous quelle République la France vit-elle aujourd'hui ?", ["La Ve République", "La IVe République", "La IIIe République", "La VIe République"]);
Q('culture', "En quelle année la Constitution de la Ve République a-t-elle été adoptée ?", ["1958", "1945", "1968", "1981"]);
Q('culture', "Pour combien de temps le Président de la République est-il élu ?", ["5 ans", "7 ans", "4 ans", "6 ans"]);
Q('culture', "Qui est le Président de la République en 2026 ?", ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Jacques Chirac"], "Son second mandat se termine en 2027.");
Q('culture', "Combien de députés siègent à l'Assemblée nationale ?", ["577", "348", "100", "925"]);
Q('culture', "Combien de sénateurs siègent au Sénat ?", ["348", "577", "100", "200"]);
Q('culture', "Qui nomme le Premier ministre ?", ["Le Président de la République", "L'Assemblée nationale", "Le Sénat", "Les citoyens directement"]);
Q('culture', "Où se trouve la résidence officielle du Président de la République ?", ["Au palais de l'Élysée", "À l'hôtel Matignon", "Au palais Bourbon", "Au palais du Luxembourg"]);
Q('culture', "Où travaille le Premier ministre ?", ["À l'hôtel Matignon", "À l'Élysée", "Au Sénat", "À Versailles"]);
Q('culture', "Où siège l'Assemblée nationale ?", ["Au palais Bourbon", "Au palais du Luxembourg", "À l'Élysée", "À l'Hôtel de Ville"]);
Q('culture', "Où siège le Sénat ?", ["Au palais du Luxembourg", "Au palais Bourbon", "À Matignon", "Au Louvre"]);
Q('culture', "Où se trouve le siège de la préfecture de police de Paris ?", ["Sur l'île de la Cité", "À Montmartre", "À La Défense", "À Champerret"]);
Q('culture', "Où se trouve le ministère des Armées ?", ["À Balard (Paris 15e)", "Place Beauvau", "À Matignon", "À Versailles"]);
Q('culture', "Le ministère de l'Intérieur se trouve…", ["place Beauvau", "à Balard", "au Louvre", "à la Défense"]);
Q('culture', "Où repose Napoléon Ier ?", ["Aux Invalides, à Paris", "Au Panthéon", "À Sainte-Hélène", "À Ajaccio"]);
Q('culture', "Sous l'Arc de triomphe repose…", ["le Soldat inconnu", "Napoléon", "Victor Hugo", "le général de Gaulle"]);
Q('culture', "En quelle année Napoléon a-t-il été sacré empereur ?", ["1804", "1789", "1815", "1811"]);
Q('culture', "Combien d'États membres compte l'Union européenne ?", ["27", "28", "15", "50"]);
Q('culture', "En quelle année Paris a-t-il accueilli les Jeux olympiques d'été les plus récents ?", ["2024", "2016", "2012", "1998"]);
Q('culture', "Qu'est-ce que la JDC ?", ["La Journée défense et citoyenneté, obligatoire pour les jeunes Français", "Un jour férié", "Un examen de conduite", "Une fête de quartier"]);
Q('culture', "Quel symbole représente la République française ?", ["Marianne", "Jeanne d'Arc", "Napoléon", "Le lion"]);
Q('culture', "Quelles sont les couleurs du drapeau français, dans l'ordre depuis la hampe ?", ["Bleu, blanc, rouge", "Rouge, blanc, bleu", "Blanc, bleu, rouge", "Bleu, rouge, blanc"]);
Q('culture', "Quel monument parisien a été construit pour l'Exposition universelle de 1889 ?", ["La tour Eiffel", "L'Arc de triomphe", "Notre-Dame", "Le Sacré-Cœur"]);
Q('culture', "Dans quel quartier d'affaires se trouvent de nombreux immeubles de grande hauteur près de Paris ?", ["La Défense", "Le Marais", "Montmartre", "Belleville"]);

/* ================= SPORT & ÉPREUVES ================= */
Q('sport', "Sur quelle distance se font les navettes du Luc Léger ?", ["20 m", "50 m", "10 m", "100 m"]);
Q('sport', "De combien augmente la vitesse à chaque palier du Luc Léger ?", ["0,5 km/h", "1 km/h", "2 km/h", "0,1 km/h"]);
Q('sport', "Combien de temps dure environ un palier du Luc Léger ?", ["Environ 1 minute", "30 secondes", "3 minutes", "5 minutes"]);
Q('sport', "Quand ton Luc Léger s'arrête-t-il ?", ["Quand tu n'atteins plus la ligne à temps au bip", "Au bout de 10 minutes", "Quand tu as soif", "Au palier 10 pour tout le monde"]);
Q('sport', "Qu'est-ce que la VMA ?", ["La vitesse maximale aérobie : la vitesse à laquelle tu consommes le maximum d'oxygène", "La vitesse de marche active", "Ta vitesse sur 100 m", "La vitesse moyenne annuelle"]);
Q('sport', "Quelle séance développe le mieux la VMA ?", ["Le fractionné court, par exemple 30 s vite / 30 s lent", "Une heure de marche", "Des étirements", "Des pompes"]);
Q('sport', "Astuce clé pour les virages au Luc Léger ?", ["Pivoter sur un pied pile sur la ligne, sans la dépasser", "Freiner 5 m avant la ligne", "Tourner en grand cercle", "Sauter au-dessus de la ligne"]);
Q('sport', "Comment est jugée une traction valide ?", ["Départ bras tendus, menton au-dessus de la barre, sans élan ni balancement", "Front au niveau de la barre suffit", "Avec un coup de reins autorisé", "Coudes à moitié pliés en bas"]);
Q('sport', "Que veut dire « traction en pronation » ?", ["Paumes des mains tournées vers l'avant", "Paumes tournées vers soi", "Une main dans chaque sens", "Avec les pieds au sol"]);
Q('sport', "Quels muscles travaillent le plus dans une traction ?", ["Le grand dorsal et les biceps", "Les quadriceps", "Les mollets", "Les pectoraux uniquement"]);
Q('sport', "Quelle est la position du test de Killy ?", ["Dos plaqué au mur, cuisses parallèles au sol, genoux à 90°", "Planche sur les coudes", "Accroupi talons décollés", "Debout sur une jambe"]);
Q('sport', "Quels muscles travaillent surtout pendant le test de Killy ?", ["Les quadriceps", "Les biceps", "Les dorsaux", "Les triceps"]);
Q('sport', "D'où vient le nom du test de Killy ?", ["Du skieur Jean-Claude Killy, triple champion olympique", "D'un médecin militaire", "D'une caserne parisienne", "D'un exercice de yoga"]);
Q('sport', "Pourquoi prévoir des semaines allégées dans un plan d'entraînement ?", ["Pour laisser le corps assimiler le travail et éviter la blessure", "Parce qu'on s'ennuie", "Pour perdre du muscle", "Ça ne sert à rien"]);
Q('sport', "Qu'est-ce que le principe de surcompensation ?", ["Après un effort et une bonne récupération, le corps revient plus fort qu'avant", "S'entraîner sans jamais se reposer", "Manger deux fois plus", "Compenser un jour raté par deux séances"]);
Q('sport', "Combien d'heures de sommeil viser quand on s'entraîne dur ?", ["Environ 8 heures", "4 heures", "12 heures", "Peu importe"]);
Q('sport', "Pourquoi s'échauffer avant une séance intense ?", ["Pour préparer cœur, muscles et articulations et limiter les blessures", "Pour se fatiguer avant", "Ça ne sert à rien", "Pour transpirer plus"]);
Q('sport', "Comment estimer grossièrement ta fréquence cardiaque maximale ?", ["220 moins ton âge", "100 plus ton âge", "Ton poids fois deux", "180 pour tout le monde"]);
Q('sport', "À quelle allure se court un footing d'endurance fondamentale ?", ["Une allure où tu peux parler sans être essoufflé", "Le plus vite possible", "En sprintant toutes les minutes", "En marchant"]);
Q('sport', "Qu'est-ce qu'un EMOM ?", ["Faire un nombre fixe de répétitions au début de chaque minute, et se reposer le reste de la minute", "Une course de 1 mile", "Un type de chaussure", "Un échauffement en musique"]);
Q('sport', "Que veut dire « graisser le geste » pour les tractions ?", ["Faire souvent des séries faciles, loin de l'échec, pour automatiser le mouvement", "Mettre de la magnésie", "Faire une seule série max par semaine", "Huiler la barre"]);
Q('sport', "Pourquoi les tractions négatives (descente lente) font-elles progresser ?", ["Le muscle est très sollicité en phase de descente, ce qui le renforce", "Elles ne servent à rien", "Elles étirent seulement", "Elles remplacent l'échauffement"]);
Q('sport', "Pendant le Killy, comment gérer la difficulté ?", ["Respirer lentement, fixer un point, compter par tranches de 30 s", "Bloquer sa respiration", "Bouger les jambes pour soulager", "Poser les mains sur les cuisses et pousser"]);
Q('sport', "Pourquoi s'entraîner à enchaîner les 3 épreuves avec 15 min de pause ?", ["Pour habituer le corps à performer fatigué, comme le jour J", "Pour gagner du temps", "Parce que c'est plus facile", "Ça n'a aucun intérêt"]);
Q('sport', "Que manger la veille des épreuves ?", ["Un repas riche en glucides (pâtes, riz) et bien s'hydrater", "Un fast-food", "Rien du tout", "Uniquement des protéines"]);
Q('sport', "Combien de temps avant l'effort prendre son dernier vrai repas ?", ["Environ 2 h 30 à 3 h", "10 minutes", "La veille au soir seulement", "Juste avant de courir"]);

/* ============ QUESTIONS GÉNÉRÉES À PARTIR DE TABLES ============ */
// Grades dans l'ordre (BSPP / armée de Terre, arme du Génie)
const GR = ["Sapeur de 2e classe","Sapeur de 1re classe","Caporal","Caporal-chef","Caporal-chef de 1re classe","Sergent","Sergent-chef","Adjudant","Adjudant-chef","Major","Sous-lieutenant","Lieutenant","Capitaine","Chef de bataillon (commandant)","Lieutenant-colonel","Colonel","Général de brigade","Général de division","Général de corps d'armée","Général d'armée"];
const CAT = i => i <= 4 ? 'militaire du rang' : i <= 9 ? 'sous-officier' : i <= 15 ? 'officier' : 'officier général';
function prng(seed){ return function(){ seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const R = prng(1811);
const pick = (arr, n, excl) => { const out = []; let guard = 0; while (out.length < n && guard++ < 500){ const v = arr[Math.floor(R()*arr.length)]; if (!out.includes(v) && !(excl||[]).includes(v)) out.push(v); } return out; };
for (let i = 0; i < GR.length - 1; i++){
  const wrong = pick(GR.filter((g,k) => k !== i+1 && k !== i), 3);
  Q('grades', `Quel grade vient juste au-dessus de « ${GR[i]} » ?`, [GR[i+1], ...wrong]);
}
for (let i = 0; i < GR.length; i++){
  const cats = ['militaire du rang','sous-officier','officier','officier général'];
  Q('grades', `« ${GR[i]} » : à quelle catégorie appartient ce grade ?`, [CAT(i), ...cats.filter(c => c !== CAT(i))]);
}
for (let n = 0; n < 30; n++){
  const idx = []; while (idx.length < 4){ const k = Math.floor(R()*GR.length); if (!idx.includes(k)) idx.push(k); }
  const hi = Math.max(...idx);
  Q('grades', `Lequel de ces grades est le plus élevé ?`, [GR[hi], ...idx.filter(k => k !== hi).map(k => GR[k])]);
}

// Sigles
const SIG = [
  ["BSPP","Brigade de sapeurs-pompiers de Paris"],["BMPM","Bataillon de marins-pompiers de Marseille"],["SDIS","Service départemental d'incendie et de secours"],
  ["CIRFA","Centre d'information et de recrutement des forces armées"],["JDC","Journée défense et citoyenneté"],["VDAT","Volontaire de l'armée de Terre"],
  ["EVAT","Engagé volontaire de l'armée de Terre"],["ACIS","Admission en compagnie d'incendie et de secours"],["GIS","Groupement d'incendie et de secours"],
  ["GAS","Groupement d'appuis et de secours"],["GSS","Groupement de soutiens et de secours"],["GFIS","Groupement de formation, d'instruction et de secours"],
  ["ELD","Exploration longue durée"],["NRBC","Nucléaire, radiologique, biologique, chimique"],["GRIMP","Groupe de reconnaissance et d'intervention en milieu périlleux"],
  ["JSPP","Jeune sapeur-pompier de Paris"],["PSC 1","Prévention et secours civiques de niveau 1"],["PSE 1","Premiers secours en équipe de niveau 1"],
  ["FPT","Fourgon pompe-tonne"],["FPTL","Fourgon pompe-tonne léger"],["EPA","Échelle pivotante automatique"],["BEA","Bras élévateur articulé"],
  ["VSAV","Véhicule de secours et d'assistance aux victimes"],["AR","Ambulance de réanimation"],["VID","Véhicule d'intervention diverse"],
  ["VPS","Véhicule de protection et de signalisation"],["ARI","Appareil respiratoire isolant"],["LDV","Lance à débit variable"],
  ["DAE","Défibrillateur automatisé externe"],["RCP","Réanimation cardio-pulmonaire"],["PLS","Position latérale de sécurité"],
  ["SAMU","Service d'aide médicale urgente"],["SMUR","Structure mobile d'urgence et de réanimation"],["CTA","Centre de traitement de l'alerte"],
  ["ERP","Établissement recevant du public"],["IGH","Immeuble de grande hauteur"],["DAAF","Détecteur avertisseur autonome de fumée"],
  ["EGE","Embrasement généralisé éclair"],["EPI","Équipement de protection individuelle"],["AVC","Accident vasculaire cérébral"],
  ["ORSEC","Organisation de la réponse de sécurité civile"],["NOVI","Nombreuses victimes"],["SPV","Sapeur-pompier volontaire"],
  ["SPP","Sapeur-pompier professionnel"],["SSSM","Service de santé et de secours médical"],["TMD","Transport de matières dangereuses"],
  ["MGO","Marche générale des opérations"],["VMA","Vitesse maximale aérobie"],["CS","Centre de secours"],["CO","Monoxyde de carbone"],
  ["DGSCGC","Direction générale de la sécurité civile et de la gestion des crises"],["UIISC","Unité d'instruction et d'intervention de la sécurité civile"],
  ["CODIS","Centre opérationnel départemental d'incendie et de secours"],["PI","Poteau d'incendie"],["BI","Bouche d'incendie"]
];
const sigMeanings = SIG.map(s => s[1]), sigCodes = SIG.map(s => s[0]);
SIG.forEach(([s, m]) => {
  Q('sigles', `Que signifie le sigle « ${s} » ?`, [m, ...pick(sigMeanings, 3, [m])]);
  Q('sigles', `Quel est le sigle de « ${m} » ?`, [s, ...pick(sigCodes, 3, [s])]);
});

// Numéros d'urgence
const NUM = [["18","Sapeurs-pompiers"],["15","SAMU"],["17","Police / gendarmerie"],["112","Numéro d'urgence européen"],["114","Urgences pour personnes sourdes ou malentendantes"],["115","SAMU social"],["119","Enfance en danger"],["196","Urgences en mer"],["191","Urgences aéronautiques"],["3114","Prévention du suicide"],["3919","Violences faites aux femmes"],["116 000","Enfants disparus"]];
NUM.forEach(([n, s]) => {
  Q('alerte', `Quel service joint-on en composant le ${n} ?`, [s, ...pick(NUM.map(x => x[1]), 3, [s])]);
});

// Luc Léger : vitesse par palier
for (let n = 1; n <= 15; n++){
  const v = 8 + 0.5*n, f = x => String(x).replace('.', ',') + ' km/h';
  const wr = [v-0.5, v+0.5, v+1, v-1, v+1.5].filter(x => x > 6 && x !== v);
  Q('sport', `Au Luc Léger, à quelle vitesse court-on au palier ${n} ?`, [f(v), ...pick(wr, 3).map(f)], "Palier 1 = 8,5 km/h, puis +0,5 km/h à chaque palier.");
}

window.QUIZ_THEMES = THEMES;
window.QUESTIONS = L;
})();
