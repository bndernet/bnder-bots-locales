import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_de {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string): string {
                return `Die Deadline für die Aufgabe **${id}** ist am ${deadline} fällig im Server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string): string {
                return `Sie wurden einer Aufgabe im Server [${guildName}](https://discord.com/channels/${guildId}) zugewiesen`;
            },
            assigned_embed_title(id: string): string {
                return `Aufgabe ${id} zugewiesen`;
            },
            assigned_embed_footer: "Diese Benachrichtigungen können von einem Serveradministrator mit dem Befehl \"/preferences direct_messages\" deaktiviert werden.",
            assigned_embed_button_in_progress: "In Bearbeitung",
            assigned_embed_button_done: "Erledigt",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `Die Deadline für die Aufgabe ${id} ist im Server [${guildName}](https://discord.com/channels/${guildId}) abgelaufen`;
            },
            repeat_notification(guildName: string, guildId: string): string {
                return `Eine Aufgabe, der Sie zugewiesen sind, wurde wiederholt und muss im Server [${guildName}](https://discord.com/channels/${guildId}) erledigt werden`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Aufgabe ${id} wiederholt`;
            },
            deadline_alert: "Deadline Benachrichtigung",
            commented_embed_title(id: string): string {
                return `Kommentar hinzugefügt zu Aufgabe ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Ein Kommentar wurde zu einer Aufgabe im Server [${guildName}](https://discord.com/channels/${guildId}) hinzugefügt von ${author}: ${commentText}`;
            },
            comment_response_button: "Auf Kommentar antworten",
            stop_followup_reminder_button: "Folge-Erinnerung stoppen",
            extend_deadline_by_one_day_button: "Frist um 1 Tag verlängern",
            extend_deadline_by_two_days_button: "Frist um 2 Tage verlängern",
            extend_deadline_by_one_week_button: "Frist um 1 Woche verlängern",
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Fälligkeitsdatum",
            assignees_field: "Zugewiesene",
            status_field: "Status",
            subtasks_field: "Unteraufgaben",
            delete_at_field: "Löschen am",
            text_field: "Text",
            project_field: "Projekt",
            user_field: "Benutzer",
            role_field: "Rolle",
            permission_field: "Berechtigung",
            preset_field: "Voreinstellung",
            priority_field: "Priorität",
            label_field: "Label",
            personal_field: "Persönlich",
            manager_field: "Manager",
            repeat_interval_field: "Wiederholungsintervall in Tagen",
            repeat_end_date_field: "Wiederholungsenddatum",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "In Bearbeitung";
                    case 2:
                        return "Erledigt";
                    default:
                        return "Unbekannt";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Fälligkeitsdatum für Aufgabe ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Die Deadline für die Aufgabe **${id}** ist am ${deadline} fällig`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Aufgabe ${id} gelöscht.`;
                },
                description(id: string): string {
                    return `Aufgabe ${id} wurde gelöscht.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Aufgabe ${id} wiederholt.`;
                },
                description(id: string): string {
                    return `Aufgabe ${id} wurde wiederholt und der Status wurde auf todo gesetzt.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Aufgabe ${id} erstellt.`;
                },
                description(task_text: string, id: string): string {
                    return `Aufgabe ${id} wurde mit dem Text erstellt: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Aufgabe ${id} aktualisiert.`;
                },
                description(id: string): string {
                    return `Aufgabe ${id} wurde aktualisiert und die folgenden Daten wurden geändert.`;
                }
            },
            project_created: {
                title: "Projekt erstellt",
                description(projectName: string): string {
                    return `Projekt ${projectName} wurde erstellt`;
                }
            },
            project_deleted: {
                title: "Projekt gelöscht",
                description(projectName: string): string {
                    return `Projekt ${projectName} wurde gelöscht`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Aufgabenstatus ${id} geändert`;
                }
            },
            permission_revoked: {
                title: "Berechtigung entzogen",
            },
            permission_granted: {
                title: "Berechtigung erteilt",
            },
            preset_applied: {
                title: "Voreinstellung angewendet",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Deadline für Aufgabe ${id} ist überfällig`;
                }
            },
            project_updated: {
                title: "Projekt aktualisiert",
                description(name: string): string {
                    return `Projekt ${name} wurde aktualisiert`;
                }
            },
            test_message: {
                title: "Dies ist eine Testnachricht",
                description: "Wenn Sie diese Nachricht sehen, funktioniert das Webhook richtig und das Protokollieren ist aktiviert."
            },
            comment_added: {
                title(id: string): string {
                    return `Kommentar hinzugefügt zu Aufgabe ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Kommentar gelöscht von Aufgabe ${id}`;
                }
            }
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Bevorstehend Ereignis (${id}: ${name}) beginnt in ${durationTillEventMinutes} Minuten um ${startTime} in [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `Sie wurden zu einem Ereignis eingeladen von <@${inviterId}> (${eventId}) **${eventName}** von ${start} bis ${end}.`;
                },
                accept_button: "Akzeptieren",
                deny_button: "Ablehnen"
            }
        }
    }
}