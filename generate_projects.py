import os
import json
import re

projects = []

# Posters
if os.path.exists('Posters'):
    for f in os.listdir('Posters'):
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            projects.append({
                'title': os.path.splitext(f)[0].replace('-', ' ').title(),
                'category': 'posters',
                'catLabel': 'Posters & Icons',
                'tags': ['Graphic Design', 'Poster'],
                'desc': f'Graphic design artwork: {f}',
                'caseStudy': f'<strong>Overview:</strong><br>A creative poster/icon design tailored for visual impact and brand messaging.<br><br><strong>Design Approach:</strong><br>Focused on maintaining aesthetic balance, strong typography, and color harmony to stand out in digital feeds.',
                'img': f'Posters/{f}'
            })

# Banners
if os.path.exists('banners'):
    for f in os.listdir('banners'):
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            projects.append({
                'title': os.path.splitext(f)[0].replace('-', ' ').title(),
                'category': 'banners',
                'catLabel': 'LinkedIn Banners',
                'tags': ['Branding', 'Banner'],
                'desc': 'Professional banner design for web and LinkedIn profiles.',
                'caseStudy': '<strong>Overview:</strong><br>Designed an impactful horizontal banner focusing on employer branding and professional presence.<br><br><strong>Design Approach:</strong><br>Ensured negative space for profile elements and used a balanced layout so text remains highly readable on both desktop and mobile devices.',
                'img': f'banners/{f}'
            })

# Carousels
if os.path.exists('Carousel'):
    for d in os.listdir('Carousel'):
        p = os.path.join('Carousel', d)
        if os.path.isdir(p):
            images = [f for f in os.listdir(p) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
            if images:
                cover = '1.jpg' if '1.jpg' in images else images[0]
                projects.append({
                    'title': d.replace('-', ' ').title(),
                    'category': 'carousel',
                    'catLabel': 'Carousel Posts',
                    'tags': ['Content Marketing', 'Carousel'],
                    'desc': 'Educational and engaging multi-slide carousel.',
                    'caseStudy': '<strong>Overview:</strong><br>A multi-slide carousel crafted to deliver high-value information efficiently and maximize user engagement metrics.<br><br><strong>Design Approach:</strong><br>Maintained a consistent grid and progressive disclosure across slides to encourage users to swipe through to the end.',
                    'img': f'Carousel/{d}/{cover}'
                })

# Reels
if os.path.exists('Reel'):
    for sub in ['Landscape', 'Portrait']:
        p = os.path.join('Reel', sub)
        if os.path.exists(p):
            for f in os.listdir(p):
                if f.lower().endswith(('.mp4', '.mov')):
                    projects.append({
                        'title': os.path.splitext(f)[0].replace('-', ' ').title(),
                        'category': 'video',
                        'catLabel': f'{sub} Video',
                        'tags': ['Video Editing', sub],
                        'desc': 'Fast-paced, engaging short-form video content.',
                        'caseStudy': '<strong>Overview:</strong><br>High-retention video content crafted with precision editing to maximize audience watch time.<br><br><strong>Editing Approach:</strong><br>Utilized dynamic cuts, engaging text pop-ups, and audio syncing to keep the viewer hooked from the first second.',
                        'img': f'Reel/{sub}/{f}'
                    })

projects.append({
    'title': 'E-Commerce App Redesign',
    'category': 'ui-ux',
    'catLabel': 'UI/UX Work',
    'tags': ['Figma', 'Prototyping'],
    'desc': 'Modernized user interface and streamlined checkout flow to reduce cart abandonment.',
    'caseStudy': '<strong>Overview:</strong><br>A comprehensive UX audit and UI overhaul for an e-commerce mobile application, aimed at reducing friction in the user journey and decreasing cart abandonment.<br><br><strong>Design Approach & Concept:</strong><br>The redesign introduces a bottom-heavy navigation model for better thumb reachability. The checkout flow was reduced from 5 steps to a seamless 3-step process.',
    'img': 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
})

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'const projects = \[\s*\{.*?\}\s*\];', re.DOTALL)
match = pattern.search(content)
if match:
    replacement = f"const projects = {json.dumps(projects, indent=2)};"
    new_content = content[:match.start()] + replacement + content[match.end():]
else:
    new_content = content + f"\nconst projects = {json.dumps(projects, indent=2)};"

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Injected {len(projects)} projects into script.js")
