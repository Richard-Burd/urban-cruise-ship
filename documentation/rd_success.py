# Module created March 25, 2024. Last substantial update: March 25, 2024.

# To-do
# - Find some energy-specific estimates, or at least estimates in a field closer to energy.
# - Parameterize the time estimate to depend on the research time and the degree of novelty of the technology.
# - Account for partial success, rather than a binary success/failure.

# Research and Development success. Public (or private, for that matter) R&D projects don't always turn out as hoped.
# The purpose of this module is to capture the probability of success.

def success_probability():
    # Cite this paper: https://www.nature.com/articles/nrd1470
    # Stated here: https://www.knowledgeportalia.org/r-d-time-and-success-rate
    # They give several estimates, citing several papers. The choice of the Kola and Landis paper is a bit arbitrary, since
    # I ultimately want to use an estimate that is more relevant to energy.
    return 0.11