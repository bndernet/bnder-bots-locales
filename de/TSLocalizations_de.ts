import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_de {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Die Deadline für die Aufgabe **${id}** ${taskTitle} ist am ${deadline} fällig im Server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Sie wurden der Aufgabe **${id}** ${taskText} im Server [${guildName}](https://discord.com/channels/${guildId}) zugewiesen`;
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
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Die Aufgabe **${id}** ${taskTitle} die Ihnen zugewiesen wurde, wurde wiederholt und muss auf dem Server [${guildName}](https://discord.com/channels/${guildId}) erneut erledigt werden.`;
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
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Du wurdest von <@${addedBy}> als Beobachter zur Aufgabe **${id}** ${taskText} auf Server [${guildName}](https://discord.com/channels/${guildId}) hinzugefügt. Du erhältst Benachrichtigungen, sobald sich an dieser Aufgabe etwas ändert. Wenn du keine Benachrichtigungen mehr erhalten möchtest, klicke auf die Schaltfläche unten.`;
            },
            watcher_added_notification_unsubscribe_button: "Abbestellen",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Die Aufgabe **${id}** ${taskTitle} die Sie auf dem Server [${guildName}](https://discord.com/channels/${guildId}) beobachten, wurde geändert:`;
            },
            watcher_notification_footer: "Benachrichtigungen für diese Aufgabe mit dem Befehl „/task unwatch“ deaktivieren",
            watcher_embed_title(id: string): string {
                return `Aufgabe ${id} wurde aktualisiert`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Der Meilenstein **${milestoneName}** ist in weniger als 6 Stunden auf dem Server [${guildName}](https://discord.com/channels/${guildId}) fällig und umfasst Aufgaben, die abgeschlossen werden müssen.`;
            },
            status_todo: "Todo",
            status_in_progress: "In Bearbeitung",
            status_done: "Erledigt"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Fälligkeitsdatum",
            assignees_field: "Zugewiesene",
            status_field: "Status",
            todos_field: "Zu tun",
            delete_at_field: "Löschen am",
            text_field: "Text",
            project_field: "Projekt",
            topic_field: "Thema",
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
            milestone_field: "Meilenstein",
            due_date_field: "Fälligkeitsdatum",
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
            },
            topic_created: {
                title: "Thema erstellt",
                description(name: string): string {
                    return `Thema ${name} wurde erstellt`;
                }
            },
            topic_updated: {
                title: "Thema aktualisiert",
                description(name: string): string {
                    return `Thema ${name} wurde aktualisiert`;
                }
            },
            topic_deleted: {
                title: "Thema gelöscht",
                description(name: string): string {
                    return `Thema ${name} wurde gelöscht`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Dokument ${id} erstellt`;
                },
                description(name: string): string {
                    return `Dokument ${name} wurde erstellt`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Dokument ${id} aktualisiert`;
                },
                description(name: string): string {
                    return `Dokument ${name} wurde aktualisiert`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Dokument ${id} gelöscht`;
                },
                description(name: string): string {
                    return `Dokument ${name} wurde gelöscht`;
                }
            },
            label_created: {
                title: "Label erstellt",
                description(name: string): string {
                    return `Label ${name} wurde erstellt`;
                }
            },
            label_updated: {
                title: "Label aktualisiert",
                description(name: string): string {
                    return `Label ${name} wurde aktualisiert`;
                }
            },
            label_deleted: {
                title: "Label gelöscht",
                description(name: string): string {
                    return `Label ${name} wurde gelöscht`;
                }
            },
            attachments_field: "Anhänge",
            milestone_created: {
                title: "Meilenstein erstellt",
            },
            milestone_updated: {
                title: "Meilenstein aktualisiert",
            },
            milestone_deleted: {
                title: "Meilenstein gelöscht",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Das bevorstehende Event (${id}) **${name}** beginnt in ${durationTillEventMinutes} Minuten um ${startTime} in [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Sie wurden von <@${inviterId}> zum Event ${eventId} eingeladen: **${eventName}**, das um ${start} beginnt und um ${end} endet.\n-# Alle Daten werden in ${timezone} berechnet. Verwenden Sie \"/settings timezone\", um die Zeitzone für den gesamten Server zu ändern, oder \"/preferences timezone\", um Ihre eigene Zeitzone zu ändern.`;
                },
                accept_button: "Akzeptieren",
                deny_button: "Ablehnen"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> hat das Event ${eventId}: **${eventName}** aktualisiert, beginnend um ${start} und endend um ${end}.\n-# Alle Daten werden in ${timezone} berechnet. Verwenden Sie \"/settings timezone\", um die Zeitzone für den gesamten Server zu ändern, oder \"/preferences timezone\", um Ihre eigene Zeitzone zu ändern.`;
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Herzlichen Glückwunsch! Sie haben einen Pro-Platz auf dem Server [${guildName}](<https://discord.com/channels/${guildId}>) erhalten. Das bedeutet, dass Sie jetzt Zugang zu [Pro-Features](<https://bnder.net/pricing>) haben. Viel Spaß!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `Die Zahlung für einen oder mehrere Pro-Plätze auf dem Server [${guildName}](https://discord.com/channels/${guildId}) ist fehlgeschlagen. Bitte [klicken Sie hier](${customerPortalLink}) um die Zahlungsinformationen zu überprüfen und die Zahlung erneut zu versuchen.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Die Datei **${fileName}** wurde auf dem Server [${guildName}](https://discord.com/channels/${guildId}) geteilt von <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `Der Ordner **${folderName}** wurde auf dem Server [${guildName}](https://discord.com/channels/${guildId}) geteilt von <@${userId}>`;
            }
        },
        self_data_download_ready: "Deine Daten stehen zum Download bereit. Du kannst sie in [unserer App](<https://bnder.net/app/>) herunterladen. Der Download-Link ist zwei Wochen lang verfügbar."
    }
}