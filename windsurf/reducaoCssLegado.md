# Objetivo

Reduzir ao mínimo o CSS legado, mantendo apenas estilos globais e regras ainda utilizadas após a migração para Tailwind.

# Plano de ação

- [x] Mapear o que ainda depende de CSS legado.
- [x] Remover importação de `sections.css` do fluxo principal.
- [x] Enxugar `src/index.css` para base global + animações/reveal usadas.
- [x] Ajustar classes residuais nos componentes para não depender de seletores legados.
- [x] Validar build e diagnósticos.

# Checklist de execução

- [x] CSS legado reduzido sem quebrar layout.
- [x] Sem dependência de `sections.css` no app.
- [x] Sem erros de build/diagnóstico.
