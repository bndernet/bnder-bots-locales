import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_fr {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string): string {
                return `La date limite pour la tâche **${id}** est le ${deadline} dans le serveur [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string): string {
                return `Vous avez été assigné à une tâche dans le serveur [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Tâche ${id} assignée`;
            },
            assigned_embed_footer: "Ces notifications peuvent être désactivées par un administrateur de serveur en utilisant la commande \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "Marquer comme en cours",
            assigned_embed_button_done: "Marquer comme fait",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `La date limite pour la tâche ${id} est dépassée dans le serveur [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string): string {
                return `Une tâche à laquelle vous êtes assigné a été répétée et doit être effectuée dans le serveur [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tâche ${id} répétée`;
            },
            deadline_alert: "Date limite de tâche",
            commented_embed_title(id: string): string {
                return `Commentaire ajouté à la tâche ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Un commentaire a été ajouté à une tâche dans le serveur [${guildName}](https://discord.com/channels/${guildId}) par ${author}: ${commentText}`;
            }
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Date limite",
            assignees_field: "Assignés",
            status_field: "Statut",
            subtasks_field: "Sous-tâches",
            delete_at_field: "Supprimer à",
            project_field: "Projet",
            text_field: "Texte",
            role_field: "Rôle",
            permission_field: "Autorisation",
            user_field: "Utilisateur",
            preset_field: "Préréglage",
            priority_field: "Priorité",
            label_field: "Étiquette",
            personal_field: "Personnel",
            manager_field: "Manager",
            repeat_interval_field: "Intervalle de répétition en jours",
            repeat_end_date_field: "Date de fin de répétition",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "En cours";
                    case 2:
                        return "Fait";
                    default:
                        return "Inconnu";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Date limite pour la tâche ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `La date limite pour la tâche **${id}** est le ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tâche ${id} supprimée.`;
                },
                description(id: string): string {
                    return `La tâche ${id} a été supprimée de la corbeille.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tâche ${id} répétée.`;
                },
                description(id: string): string {
                    return `La tâche ${id} a été répétée et l'état a été défini sur todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tâche ${id} créée.`;
                },
                description(task_text: string, id: string): string {
                    return `La tâche ${id} a été créée avec le texte: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tâche ${id} mise à jour.`;
                },
                description(id: string): string {
                    return `La tâche ${id} a été mise à jour et les données suivantes ont été modifiées.`;
                }
            },
            project_created: {
                title: "Projet créé",
                description(projectName: string): string {
                    return `Projet ${projectName} a été créé`;
                }
            },
            project_deleted: {
                title: "Projet supprimé",
                description(projectName: string): string {
                    return `Projet ${projectName} a été supprimé`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Statut de la tâche ${id} modifié`;
                }
            },
            permission_revoked: {
                title: "Autorisation révoquée",
            },
            permission_granted: {
                title: "Autorisation accordée",
            },
            preset_applied: {
                title: "Préréglage appliqué",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `La date limite pour la tâche ${id} est dépassée`;
                }
            },
            project_updated: {
                title: "Projet mis à jour",
                description(name: string): string {
                    return `Projet ${name} a été mis à jour`;
                }
            },
            test_message: {
                title: "Ceci est un message de test",
                description: "Si vous voyez ce message, le webhook fonctionne correctement et la journalisation est activée."
            },
            comment_added: {
                title(id: string): string {
                    return `Commentaire ajouté à la tâche ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Commentaire supprimé de la tâche ${id}`;
                }
            }
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `L'événement à venir (${id}: ${name}) commence dans ${durationTillEventMinutes} minutes dans [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `Vous avez été invité à l'événement ${eventId} par <@${inviterId}>: ${eventName} de ${start} à ${end}`;
                },
                accept_button: "Accepter",
                deny_button: "Refuser"
            }
        }
    }
}