#!/usr/bin/env python3
with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '<h3 style="color: #ff006e; margin-top: 30px;">🏆 Réalisations Récentes</h3>'
end_marker = '<h3 style="color: #ff006e; margin-top: 30px;">🎯 Objectifs Professionnels</h3>'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    replacement = '''            <h3 style="color: #ff006e; margin-top: 30px;">💻 Compétences Techniques</h3>
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
            
            '''
    
    new_content = content[:start_idx] + replacement + content[end_idx:]
    
    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("✅ Portfolio sections updated successfully!")
else:
    print(f"❌ Failed: start={start_idx}, end={end_idx}")
