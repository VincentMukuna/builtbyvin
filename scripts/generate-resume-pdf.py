#!/usr/bin/env python3
"""Generate the downloadable resume from the same verified content as /resume."""

from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUTS = [
    ROOT / "public" / "vincent-mukuna-resume.pdf",
    ROOT / "output" / "pdf" / "vincent-mukuna-resume.pdf",
]

INK = colors.HexColor("#17181A")
MUTED = colors.HexColor("#65676C")
LINE = colors.HexColor("#D2D1CC")
ACCENT = colors.HexColor("#4058E8")

EXPERIENCE = [
    (
        "StockMarketGuides",
        "Frontend Engineer · Contract",
        "Jan 2026 - Present · Remote",
        [
            "Redesign and rebuild key areas of a production Next.js financial dashboard, including dense tables, filters, detail views, onboarding, and subscription flows.",
            "Ship and maintain features inside an established codebase without disrupting customer workflows. The redesigned dashboard has received positive feedback from users.",
        ],
    ),
    (
        "Self-employed",
        "Software Engineer · Freelance",
        "Dec 2024 - Present · Remote",
        [
            "Build and maintain web and mobile products for startups and product teams, taking work from early prototypes through production and launch.",
            "Built much of BetterFlow alongside its founder and carried the work through launch across public booking, business dashboards, React Native apps, backend workflows, and Stripe payments.",
            "Turned AmpleLeads from an early AI prototype into a production system with authentication, payments, realtime behaviour, and secure team-scoped data.",
        ],
    ),
    (
        "Kibbe AI",
        "Frontend Developer · Full-time",
        "Feb 2025 - Jan 2026 · Remote",
        [
            "Built and refined the Next.js and TypeScript frontend across the product's core AI-assisted discovery flows.",
            "Shipped the frontend through launch and supported the product as it reached its first users.",
        ],
    ),
    (
        "Trans Business Machines Ltd",
        "Software Developer · Contract",
        "Sep 2024 - Sep 2025 · Nairobi · Hybrid",
        [
            "Took a property management concept from field research and site visits to a working prototype while contributing to internal and client-facing software.",
        ],
    ),
    (
        "Statsspeak",
        "Software Developer · Internship",
        "Jun 2024 - Sep 2024 · Nairobi · Hybrid",
        [
            "Built a learner book-sharing platform and prototypes for NGO projects as part of a newly forming software team.",
        ],
    ),
]


def section_heading(text, styles):
    return KeepTogether(
        [
            Paragraph(text.upper(), styles["section"]),
            Spacer(1, 1.2 * mm),
            HRFlowable(width="100%", thickness=0.5, color=LINE),
        ]
    )


def build_story(styles):
    story = [
        Paragraph("RESUME / AUGUST 2026", styles["kicker"]),
        Spacer(1, 4 * mm),
        Paragraph("Vincent Mukuna", styles["name"]),
        Paragraph("Full-stack Software Engineer", styles["title"]),
        Spacer(1, 3 * mm),
        Paragraph(
            "Full-stack software engineer with experience shipping web, mobile, SaaS, and AI products across new builds and established codebases. Currently a Frontend Engineer at StockMarketGuides, with a UX background and a strong focus on clear, dependable product work.",
            styles["summary"],
        ),
        Spacer(1, 2.6 * mm),
        Paragraph(
            'Nairobi, Kenya · Remote · <link href="https://builtby.vin" color="#17181A">builtby.vin</link> · '
            '<link href="https://www.linkedin.com/in/vinmukuna/" color="#17181A">linkedin.com/in/vinmukuna</link> · '
            '<link href="https://github.com/VincentMukuna" color="#17181A">github.com/VincentMukuna</link> · '
            '<link href="https://www.upwork.com/freelancers/vinmukuna" color="#17181A">upwork.com/freelancers/vinmukuna</link>',
            styles["meta"],
        ),
        Spacer(1, 4.5 * mm),
        section_heading("Technical skills", styles),
        Spacer(1, 1.6 * mm),
        Paragraph(
            "<b>Frontend:</b> TypeScript, JavaScript, React, Next.js · "
            "<b>Mobile:</b> React Native, Expo, app release · "
            "<b>Backend:</b> Node.js, Laravel, Supabase, PostgreSQL, Stripe<br/>"
            "<b>AI:</b> OpenAI API, Vercel AI SDK, tool calling, retrieval, human controls · "
            "<b>Product:</b> UX, requirements, testing, maintenance",
            styles["small"],
        ),
        Spacer(1, 4.5 * mm),
        section_heading("Experience", styles),
        Spacer(1, 2 * mm),
    ]

    for company, role, period, bullets in EXPERIENCE:
        heading = Paragraph(
            f"<b>{company}</b><br/><font color='#65676C' size='7.8'>{role} · {period}</font>",
            styles["company"],
        )
        bullet_paragraphs = [
            Paragraph(f"-&nbsp;&nbsp;{bullet}", styles["bullet"]) for bullet in bullets
        ]
        story.append(KeepTogether([heading, Spacer(1, 1.2 * mm), *bullet_paragraphs]))
        story.append(Spacer(1, 2.8 * mm))

    story.extend(
        [
            Spacer(1, 1 * mm),
            section_heading("Selected projects", styles),
            Spacer(1, 1.6 * mm),
            Paragraph(
                '<b>Owwed</b> · Expo, React Native, TypeScript · '
                '<link href="https://owwed.builtby.vin" color="#4058E8">owwed.builtby.vin</link> · '
                '<link href="https://apps.apple.com/ke/app/owwed/id6785079538" color="#4058E8">App Store</link><br/>'
                "Designed, built, tested, and released a local-first debt tracker that works without an account and keeps its core data on-device.",
                styles["small"],
            ),
            Spacer(1, 2.4 * mm),
            Paragraph(
                '<b>Oak &amp; Pine</b> · AI workflows, tool calling, human controls · '
                '<link href="https://oak.builtby.vin" color="#4058E8">oak.builtby.vin</link><br/>'
                "Built a public AI operations demo connected to customer, CRM, and booking workflows with staff review and takeover.",
                styles["small"],
            ),
            Spacer(1, 3.2 * mm),
            section_heading("Education", styles),
            Spacer(1, 1.6 * mm),
            Paragraph(
                "<b>University of Nairobi</b> · Computer Science · 2021 - 2024",
                styles["small"],
            ),
            Spacer(1, 3.2 * mm),
            Paragraph(
                "Top Rated on Upwork · 100% Job Success · 2.8K+ hours",
                styles["footer"],
            ),
        ]
    )
    return story


def make_styles():
    sample = getSampleStyleSheet()
    return {
        "kicker": ParagraphStyle(
            "Kicker", parent=sample["Normal"], fontName="Helvetica", fontSize=6.5,
            leading=8, textColor=MUTED, tracking=0.7,
        ),
        "name": ParagraphStyle(
            "Name", parent=sample["Normal"], fontName="Helvetica-Bold", fontSize=28,
            leading=30, textColor=INK, spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title", parent=sample["Normal"], fontName="Helvetica", fontSize=11,
            leading=13, textColor=ACCENT,
        ),
        "summary": ParagraphStyle(
            "Summary", parent=sample["Normal"], fontName="Helvetica", fontSize=9.2,
            leading=12.5, textColor=INK, maxLeading=12.5,
        ),
        "meta": ParagraphStyle(
            "Meta", parent=sample["Normal"], fontName="Helvetica", fontSize=7.3,
            leading=9.4, textColor=MUTED,
        ),
        "section": ParagraphStyle(
            "Section", parent=sample["Normal"], fontName="Helvetica", fontSize=7,
            leading=8.5, textColor=MUTED, tracking=0.8,
        ),
        "company": ParagraphStyle(
            "Company", parent=sample["Normal"], fontName="Helvetica-Bold", fontSize=9.6,
            leading=11.5, textColor=INK,
        ),
        "bullet": ParagraphStyle(
            "Bullet", parent=sample["Normal"], fontName="Helvetica", fontSize=8.3,
            leading=11.2, textColor=INK, leftIndent=0, spaceAfter=0.8,
        ),
        "small": ParagraphStyle(
            "Small", parent=sample["Normal"], fontName="Helvetica", fontSize=8.1,
            leading=10.8, textColor=INK,
        ),
        "footer": ParagraphStyle(
            "Footer", parent=sample["Normal"], fontName="Helvetica", fontSize=7.4,
            leading=9.4, textColor=MUTED,
        ),
    }


def build_pdf(path):
    path.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        rightMargin=20 * mm,
        leftMargin=20 * mm,
        topMargin=15 * mm,
        bottomMargin=13 * mm,
        title="Vincent Mukuna - Resume",
        author="Vincent Mukuna",
        subject="Software Engineer resume",
    )
    document.build(build_story(make_styles()))


if __name__ == "__main__":
    build_pdf(OUTPUTS[0])
    print(OUTPUTS[0])
    for output in OUTPUTS[1:]:
        output.parent.mkdir(parents=True, exist_ok=True)
        copyfile(OUTPUTS[0], output)
        print(output)
