# The Low-Rank Structure of VLA Reinforcement Learning

Minjae Oh, Yoonah Park, Jongwon Lim, and Yohan Jo

[Project page](https://holi-lab.github.io/vla_rl_interp/) · [Paper](https://arxiv.org/abs/2609.34599)

This repository hosts the research project page. It summarizes the paper's parameter-update analysis, module-replacement experiments, shift-direction probes, and adaptive steering results.

## Citation

```bibtex
@article{oh2026low,
  title={The Low-Rank Structure of VLA Reinforcement Learning},
  author={Oh, Minjae and Park, Yoonah and Lim, Jongwon and Jo, Yohan},
  journal={arXiv preprint arXiv:2609.34599},
  year={2026}
}
```

## Website maintenance

The site is static HTML, CSS, and JavaScript, served by GitHub Pages from the root of `gh_pages`. The default branch, `main`, is reserved for research code. Edit `index.html` for content and `assets/site.css` for presentation. No build step is required.

For a local preview, run `python -m http.server 8000` from this directory and open `http://localhost:8000`.

The four research figures in `assets/` are the original figures from [arXiv:2609.34599](https://arxiv.org/abs/2609.34599). CSS displays their panels separately to place each beside its explanation; the original images remain available through full-size links. Tables retain their paper identifiers in `data-source` attributes to simplify future updates.
