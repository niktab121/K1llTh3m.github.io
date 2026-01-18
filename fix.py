#!/usr/bin/env python3
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the sections using regex with DOTALL
pattern = r'</div>\s*<h3 style="color: #ff006e; margin-top: 30px;">🎯 Objectifs.*?N\'hésitez pas à me contacter via le formulaire ou les réseaux sociaux\.</p>\s*</div>'

replacement = '''</div>
            
            <h3 style="color: #ff006e; margin-top: 30px;">📞 Me Contacter</h3>
            <p style="color: #ccc; text-align: center; margin: 20px 0; font-size: 15px;">Envie d'échanger sur la cybersécurité, les CTF ou collaborer sur un projet ? Je suis toujours ouvert aux discussions et partages d'expériences.</p>
            
            <div style="display: flex; justify-content: center; gap: 20px; margin: 40px 0; flex-wrap: wrap;">
                <a href="https://linkedin.com" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px; color: white; font-weight: bold;">in</span>
                </a>
                <a href="https://discord.com" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px;">🎮</span>
                </a>
                <a href="https://github.com" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px;">🐙</span>
                </a>
                <a href="https://ctftime.org" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px;">🚩</span>
                </a>
                <a href="https://tryhackme.com" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border: 2px solid rgba(255, 0, 110, 0.4); border-radius: 50%; cursor: pointer; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='#ff006e'; this.style.boxShadow='0 0 20px rgba(255, 0, 110, 0.5)';" onmouseout="this.style.borderColor='rgba(255, 0, 110, 0.4)'; this.style.boxShadow='none';">
                    <span style="font-size: 28px;">📦</span>
                </a>
            </div>'''

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

if new_content != content:
    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("✅ Portfolio updated with Me Contacter section!")
else:
    print("❌ Pattern not found")
