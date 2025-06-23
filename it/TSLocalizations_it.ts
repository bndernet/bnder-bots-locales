import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_it {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `La scadenza del compito **${id}** ${taskTitle} è il ${deadline} nel server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Ti è stato assegnato il compito **${id}** ${taskText} nel server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Compito ${id} assegnato`;
            },
            assigned_embed_footer: "Queste notifiche possono essere disabilitate con il comando \"/preferences direct_messages\".",
            assigned_embed_button_in_progress: "Segna come in corso",
            assigned_embed_button_done: "Segna come completato",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `La scadenza del compito **${id}** ${taskTitle} è scaduta nel server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Il compito **${id}** ${taskTitle} a cui sei assegnato è stato ripetuto e deve essere fatto di nuovo nel server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Compito ${id} ripetuto`;
            },
            deadline_alert: "Scadenza del compito",
            commented_embed_title(id: string): string {
                return `Commento aggiunto al compito ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Un commento è stato aggiunto a un compito nel server [${guildName}](https://discord.com/channels/${guildId}) da ${author}: ${commentText}`;
            },
            comment_response_button: "Rispondi al commento",
            stop_followup_reminder_button: "Ferma il promemoria di follow-up",
            extend_deadline_by_one_day_button: "Estendi la scadenza di 1 giorno",
            extend_deadline_by_two_days_button: "Estendi la scadenza di 2 giorni",
            extend_deadline_by_one_week_button: "Estendi la scadenza di 1 settimana",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Sei stato aggiunto come osservatore all'attività **${id}** ${taskText} sul server [${guildName}](https://discord.com/channels/${guildId}) da <@${addedBy}>. Riceverai notifiche ogni volta che qualcosa cambia in questa attività. Se vuoi interrompere la ricezione delle notifiche, puoi cliccare sul pulsante qui sotto.`;
            },
            watcher_added_notification_unsubscribe_button: "Annulla iscrizione",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Il compito **${id}** ${taskTitle} che stai monitorando nel server [${guildName}](https://discord.com/channels/${guildId}) è stato aggiornato:`
            },
            watcher_notification_footer: "Disabilita le notifiche per questo compito con il comando \"/task unwatch\"",
            watcher_embed_title(id: string): string {
                return `Compito ${id} aggiornato`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `La milestone **${milestoneName}** scade tra meno di 6 ore nel server [${guildName}](https://discord.com/channels/${guildId}) e ha compiti che devono essere completati.`;
            },
            status_todo: "Da fare",
            status_in_progress: "In corso",
            status_done: "Completato"
        },
        webhookLogging: {
            id_field: "ID",
            deadline_field: "Scadenza",
            assignees_field: "Assegnatari",
            status_field: "Stato",
            todos_field: "Compiti",
            delete_at_field: "Elimina a",
            project_field: "Progetto",
            topic_field: "Argomento",
            text_field: "Testo",
            role_field: "Ruolo",
            permission_field: "Permesso",
            user_field: "Utente",
            preset_field: "Preset",
            priority_field: "Priorità",
            label_field: "Etichetta",
            personal_field: "Personale",
            manager_field: "Manager",
            repeat_interval_field: "Intervallo di ripetizione in giorni",
            repeat_end_date_field: "Data di fine ripetizione",
            milestone_field: "Milestone",
            due_date_field: "Data di scadenza",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Da fare";
                    case 1:
                        return "In corso";
                    case 2:
                        return "Completato";
                    default:
                        return "Sconosciuto";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Scadenza per il compito ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `La scadenza per il compito **${id}** è il ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Compito ${id} eliminato.`;
                },
                description(id: string): string {
                    return `Il compito ${id} è stato eliminato.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Compito ${id} ripetuto.`;
                },
                description(id: string): string {
                    return `Il compito ${id} è stato ripetuto e lo stato è stato impostato su "da fare".`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Compito ${id} creato.`;
                },
                description(task_text: string, id: string): string {
                    return `Il compito ${id} è stato creato con il testo: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Compito ${id} aggiornato.`;
                },
                description(id: string): string {
                    return `Il compito ${id} è stato aggiornato e i seguenti dati sono stati modificati.`;
                }
            },
            project_created: {
                title: "Progetto creato",
                description(projectName: string): string {
                    return `Il progetto ${projectName} è stato creato`;
                }
            },
            project_deleted: {
                title: "Progetto eliminato",
                description(projectName: string): string {
                    return `Il progetto ${projectName} è stato eliminato`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Lo stato del compito ${id} è stato cambiato`;
                }
            },
            permission_granted: {
                title: "Permesso concesso",
            },
            permission_revoked: {
                title: "Permesso revocato",
            },
            preset_applied: {
                title: "Preset applicato",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `La scadenza del compito ${id} è scaduta`;
                }
            },
            project_updated: {
                title: "Progetto aggiornato",
                description(name: string): string {
                    return `Il progetto ${name} è stato aggiornato`;
                }
            },
            test_message: {
                title: "Questo è un messaggio di test",
                description: "Se vedi questo messaggio, il webhook sta funzionando correttamente e il logging è attivato."
            },
            comment_added: {
                title(id: string): string {
                    return `Commento aggiunto al compito ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Commento eliminato dal compito ${id}`;
                }
            },
            topic_created: {
                title: "Argomento creato",
                description(name: string): string {
                    return `L'argomento ${name} è stato creato`;
                }
            },
            topic_updated: {
                title: "Argomento aggiornato",
                description(name: string): string {
                    return `L'argomento ${name} è stato aggiornato`;
                }
            },
            topic_deleted: {
                title: "Argomento eliminato",
                description(name: string): string {
                    return `L'argomento ${name} è stato eliminato`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Documento ${id} creato`;
                },
                description(name: string): string {
                    return `Il documento ${name} è stato creato`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Documento ${id} aggiornato`;
                },
                description(name: string): string {
                    return `Il documento ${name} è stato aggiornato`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Documento ${id} eliminato`;
                },
                description(name: string): string {
                    return `Il documento ${name} è stato eliminato`;
                }
            },
            label_created: {
                title: "Etichetta creata",
                description(name: string): string {
                    return `L'etichetta ${name} è stata creata`;
                }
            },
            label_updated: {
                title: "Etichetta aggiornata",
                description(name: string): string {
                    return `L'etichetta ${name} è stata aggiornata`;
                }
            },
            label_deleted: {
                title: "Etichetta eliminata",
                description(name: string): string {
                    return `L'etichetta ${name} è stata eliminata`;
                }
            },
            attachments_field: "Allegati",
            milestone_created: {
                title: "Milestone creata",
            },
            milestone_updated: {
                title: "Milestone aggiornata",
            },
            milestone_deleted: {
                title: "Milestone eliminata",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `L'evento imminente (${id}) **${name}** inizierà tra ${durationTillEventMinutes} minuti alle ${startTime} nel server [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Sei stato invitato all'evento ${eventId} da <@${inviterId}>: **${eventName}** che inizia alle ${start} e termina alle ${end}.\n-# Tutte le date sono calcolate in ${timezone}. Usa \"/settings timezone\" per cambiare il fuso orario per l'intero server, o \"/preferences timezone\" per cambiare il tuo fuso orario.`;
                },
                accept_button: "Accetta",
                deny_button: "Rifiuta"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> ha aggiornato l'evento ${eventId}: **${eventName}** che inizia alle ${start} e termina alle ${end}.\n-# Tutte le date sono calcolate in ${timezone}. Usa \"/settings timezone\" per cambiare il fuso orario per l'intero server, o \"/preferences timezone\" per cambiare il tuo fuso orario.`
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Congratulazioni! Sei stato inserito in un posto pro nel server [${guildName}](<https://discord.com/channels/${guildId}>). Ciò significa che ora hai accesso alle [funzionalità pro](<https://bnder.net/pricing>). Divertiti!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Azione richiesta: Pagamento non riuscito per l'abbonamento Pro\nNon siamo riusciti a elaborare il pagamento per uno o più utenti Pro su [${guildName}](<https://discord.com/channels/${guildId}>). Per evitare di perdere l'accesso alle funzionalità Pro, [aggiorna le tue informazioni di pagamento e paga la fattura ora](<${customerPortalLink}>).\n\nLe tue funzionalità Pro verranno disattivate a breve se non interverrai.\n\nHai bisogno di aiuto? [Contatta l'assistenza](https://bnder.net/discord) — siamo qui per te.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Il file **${fileName}** è stato condiviso con te nel server [${guildName}](https://discord.com/channels/${guildId}) da <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `La cartella **${folderName}** è stata condivisa con te nel server [${guildName}](https://discord.com/channels/${guildId}) da <@${userId}>`;
            }
        },
        self_data_download_ready: "I tuoi dati sono pronti per il download. Puoi scaricarli nella [nostra app](<https://bnder.net/app/>). Il link per il download sarà disponibile per due settimane."
    }
}