import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_fr {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `L'échéance de la tâche **${id}** ${taskTitle} est due le ${deadline} dans le serveur [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Vous avez été affecté à la tâche **${id}** ${taskText} dans le serveur [${guildName}](https://discord.com/channels/${guildId})`;
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
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `La tâche **${id}** ${taskTitle} à laquelle vous êtes affecté a été répétée et doit être effectuée à nouveau sur le serveur [${guildName}](https://discord.com/channels/${guildId})`;
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
            },
            comment_response_button: "Répondre au commentaire",
            stop_followup_reminder_button: "Arrêter le rappel de suivi",
            extend_deadline_by_one_day_button: "Prolonger le délai de 1 jour",
            extend_deadline_by_two_days_button: "Prolonger le délai de 2 jours",
            extend_deadline_by_one_week_button: "Prolonger le délai de 1 semaine",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `La tâche **${id}** ${taskTitle} que vous observez sur le serveur [${guildName}](https://discord.com/channels/${guildId}) a changé :`;
            },
            watcher_notification_footer: "Désactiver les notifications pour cette tâche en utilisant la commande « /task unwatch ».",
            watcher_embed_title(id: string): string {
                return `Mise à jour de la tâche ${id}`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Le jalon **${milestoneName}** doit être atteint dans moins de 6 heures sur le serveur [${guildName}](https://discord.com/channels/${guildId}) et comporte des tâches à accomplir.`;
            }
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Date limite",
            assignees_field: "Assignés",
            status_field: "Statut",
            todos_field: "À faire",
            delete_at_field: "Supprimer à",
            project_field: "Projet",
            topic_field: "Sujet",
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
            milestone_field: "Jalon",
            due_date_field: "Date d'échéance",
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
            },
            topic_created: {
                title: "Sujet créé",
                description(name: string): string {
                    return `Sujet ${name} a été créé`;
                }
            },
            topic_updated: {
                title: "Sujet mis à jour",
                description(name: string): string {
                    return `Sujet ${name} a été mis à jour`;
                }
            },
            topic_deleted: {
                title: "Sujet supprimé",
                description(name: string): string {
                    return `Sujet ${name} a été supprimé`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Document ${id} créé`;
                },
                description(name: string): string {
                    return `Document ${name} a été créé`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Document ${id} mis à jour`;
                },
                description(name: string): string {
                    return `Document ${name} a été mis à jour`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Document ${id} supprimé`;
                },
                description(name: string): string {
                    return `Document ${name} a été supprimé`;
                }
            },
            label_created: {
                title: "Étiquette créée",
                description(name: string): string {
                    return `L'étiquette ${name} a été créée`;
                }
            },
            label_updated: {
                title: "Étiquette mise à jour",
                description(name: string): string {
                    return `L'étiquette ${name} a été mise à jour`;
                }
            },
            label_deleted: {
                title: "Étiquette supprimée",
                description(name: string): string {
                    return `L'étiquette ${name} a été supprimée`;
                }
            },
            attachments_field: "Pièces jointes",
            milestone_created: {
                title: "Jalon créé",
            },
            milestone_updated: {
                title: "Jalon mis à jour",
            },
            milestone_deleted: {
                title: "Jalon supprimé",
            },
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
        },
        premium_granted_notification(guildId: string, guildName: string): string {
            return `Félicitations ! Vous avez été placé dans un siège premium sur le serveur [${guildName}](<https://discord.com/channels/${guildId}>). Cela signifie que vous avez maintenant accès aux [fonctionnalités premium](<https://bnder.net/pricing>). Profitez-en!`;
        }
    }
}