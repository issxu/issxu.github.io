// Edit this file to update the content of your homepage. No build is required.
// Claims and dates below are taken from the supplied CV; paper URLs are omitted
// until actual public links are supplied. Add paperUrl/codeUrl when available.
window.PROFILE = {
  email: 'xxxxdeja1@gmail.com',
  name: 'Weifeng Xu',
  chineseName: '许伟锋',
  github: 'https://github.com/issxu',
  scholar: 'https://scholar.google.com/citations?hl=en&user=xwB7lCkAAAAJ',
  introduction: {
    en: 'I am a Master’s student in Data Science at the <a href="https://www.um.edu.mo/" target="_blank" rel="noopener">University of Macau</a>, advised by <a href="https://zdzheng.xyz/" target="_blank" rel="noopener">Zhedong Zheng</a>. I expect to graduate in June 2027. Previously, I received my bachelor’s degree in Computer Science and Technology from <a href="https://www.hbut.edu.cn/" target="_blank" rel="noopener">Hubei University of Technology</a> in 2025.',
    zh: '我目前在<a href="https://www.um.edu.mo/" target="_blank" rel="noopener">澳门大学</a>攻读数据科学硕士学位，师从<a href="https://zdzheng.xyz/" target="_blank" rel="noopener">郑哲东（Zhedong Zheng）</a>，预计于 2027 年 6 月毕业。此前，我于 2025 年在<a href="https://www.hbut.edu.cn/" target="_blank" rel="noopener">湖北工业大学</a>获得计算机科学与技术学士学位。'
  },
  interests: {
    en: 'My research interests lie in <strong>multimodal learning</strong> and <strong>visual reasoning</strong>.',
    zh: '我的研究兴趣是<strong>多模态学习</strong>与<strong>视觉推理</strong>。'
  },
  news: [
    { date: '2026', en: '<strong>RuleForge</strong>, our work on inferring and instantiating latent visual rules as executable programs, is under review.', zh: '<strong>RuleForge</strong>：将潜在视觉规则推断并实例化为可执行程序，论文在投。' },
    { date: '2026', en: 'My first-author work on generative causal intervention for pedestrian anomaly behavior retrieval appears in <strong>Findings of EMNLP 2026</strong>.', zh: '第一作者工作：基于生成式因果干预的行人异常行为检索，发表于 <strong>Findings of EMNLP 2026</strong>。' },
    { date: '2025.08', en: 'I started my Master’s studies in Data Science at the <strong>University of Macau</strong>.', zh: '进入<strong>澳门大学</strong>攻读数据科学硕士学位。' }
  ],
  research: [
    {
      id: 'causal-intervention', type: 'publication', image: 'assets/figure1.png', figurePdf: 'assets/figure1.pdf',
      imageAlt: { en: 'Figure from the causal intervention paper, showing narrative style bias, visual context confounding, and the proposed approach', zh: '因果干预论文图：叙述风格偏差、视觉场景混淆因素与本文方法' },
      title: 'Causal Intervention with LMMs: Generative Text Facilitates Fine-Grained Pedestrian Anomaly Behavior Retrieval',
      venue: { en: 'Findings of EMNLP 2026', zh: 'Findings of EMNLP 2026' },
      authors: { en: 'Weifeng Xu, Shaofei Huang, Yaxiong Wang, Zhedong Zheng', zh: 'Weifeng Xu, Shaofei Huang, Yaxiong Wang, Zhedong Zheng' },
      period: { en: 'Jan – May 2026', zh: '2026.01 – 2026.05' },
      summary: {
        en: 'A generative causal intervention framework that uses large multimodal models to reduce spurious visual correlations and strengthen fine-grained action–text alignment.',
        zh: '利用大多模态模型生成反事实困难负样本与多样化描述，减少背景、外观等伪相关线索的影响，增强细粒度动作与文本之间的语义对齐。'
      },
      details: {
        en: [
          'Models the confounding relationships among visual context, action semantics, and text descriptions with a structural causal model.',
          'Combines counterfactual hard-negative generation with multi-description semantic intervention driven by large multimodal models.',
          'Achieves 89.73% R@1 and 94.56% mAP on PAB, with improved generalization to out-of-distribution scenarios including UCC.'
        ],
        zh: [
          '以结构因果模型刻画视觉环境、动作语义与文本描述间的混淆关系。',
          '设计大多模态模型驱动的反事实困难负样本生成与多描述语义干预策略。',
          '在 PAB 基准上取得 89.73% R@1 和 94.56% mAP，并在 UCC 等分布外场景中提升泛化表现。'
        ]
      },
      paperUrl: '', codeUrl: 'https://github.com/issxu/Causal-Intervention-PAB'
    },
    {
      id: 'ruleforge', type: 'review', image: 'assets/rule.png', figurePdf: 'assets/rule.pdf',
      imageAlt: { en: 'RuleForge overview: visual input, rule reasoning, executable generation, and answer explanation', zh: 'RuleForge 流程图：视觉输入、规则推理、可执行生成及答案解释' },
      title: 'RuleForge: Inferring and Instantiating Latent Visual Rules as Executable Programs',
      venue: { en: 'Under review', zh: '论文在投' },
      authors: { en: 'Visual reasoning · Executable programs', zh: '视觉推理 · 可执行程序' },
      period: { en: 'Jun – Oct 2026', zh: '2026.06 – 2026.10' },
      summary: {
        en: 'A Bongard visual reasoning benchmark and a three-stage training framework that connects visual rule understanding to executable scene programs and execution-feedback reinforcement learning.',
        zh: '构建 Bongard 视觉推理基准，通过视觉规则理解、规则条件式场景程序生成，以及执行反馈强化学习，将规则理解连接到程序化场景生成。'
      },
      details: {
        en: [
          'Builds a benchmark of 108,797 problems: 86,000 training problems, 19,297 seen-rule test problems, and 3,500 unseen rule-combination test problems.',
          'Evaluates executability, rule satisfaction, diversity, and robustness across multiple random execution seeds on UniLIP, InternVL3.5, Qwen3-VL, and Show-o2.',
          'Improves UniLIP multiple-choice accuracy by 20.93 and 28.42 percentage points on seen rules and unseen combinations; scene-level rule satisfaction on seen rules rises from 2.91% to 70.99%.'
        ],
        zh: [
          '构建包含 108,797 道题的基准：86,000 道训练题、19,297 道已见规则测试题、3,500 道未见规则组合测试题。',
          '通过多随机种子执行评估程序可执行性、规则满足度、多样性与鲁棒性，并在 UniLIP、InternVL3.5、Qwen3-VL 和 Show-o2 上验证。',
          'UniLIP 在已见规则与未见组合上的选择题准确率分别提高 20.93 和 28.42 个百分点；已见规则的场景级规则满足率由 2.91% 提升至 70.99%。'
        ]
      },
      paperUrl: '', codeUrl: ''
    }
  ],
  education: [
    { university: { en: 'University of Macau', zh: '澳门大学' }, url: 'https://www.um.edu.mo/', degree: { en: 'Master’s student in Data Science', zh: '数据科学 · 硕士在读' }, dates: { en: 'Aug 2025 – Jun 2027 (expected)', zh: '2025.08 – 2027.06（预计）' } },
    { university: { en: 'Hubei University of Technology', zh: '湖北工业大学' }, url: 'https://www.hbut.edu.cn/', degree: { en: 'Bachelor’s degree in Computer Science and Technology', zh: '计算机科学与技术 · 本科' }, dates: { en: 'Sep 2021 – Jun 2025', zh: '2021.09 – 2025.06' } }
  ],
  experience: {
    company: { en: 'Ming Yuan Cloud Group', zh: '明源云集团' },
    role: { en: 'Algorithm Intern', zh: '算法实习生' },
    dates: { en: 'Apr – Jul 2025', zh: '2025.04 – 2025.07' },
    description: {
      en: 'Worked on LLM agent systems for enterprise decision support. Built Dify-based agentic workflows for customer research, user profiling, sentiment and intent analysis, and structured report generation.',
      zh: '参与面向企业智能决策的大模型 Agent 系统研发。基于 Dify 搭建 Agentic Workflow，整合客户研究、用户画像、情绪与意向识别、任务编排及结构化报告生成。'
    }
  }
};
